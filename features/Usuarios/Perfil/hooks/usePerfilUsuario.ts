import { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "@/context/UserContext/userContext";
import Usuarios from "@/features/Usuarios/Services/Usuarios";
import Usuario from "@/features/Usuarios/interfaces/Usuario.interface";
import { useRouter } from "next/navigation";
import { ErroContext } from "@/context/ErroContext/erroContext";

export function usePerfilUsuario(){
    const userContext = useContext(UserContext);
    const router = useRouter();
    const erroContext = useContext(ErroContext);

    const [ dados, setDados ] = useState<Usuario | null>(null);

    const token = userContext?.acessToken;

    const gg = useRef(false)

    useEffect(
        () => {
            if (gg.current || token) return;

            async function buscandoUsuario() {
                gg.current = true;
                try {
                    erroContext?.setLoading(true);
    
                    if(!token) {
                        throw new Error("Acess Token Indefinido");
                    }

                    // if(dados) return;

                    console.log("Token")
                    console.log(token)
                    const dadosUsuario = await Usuarios.BuscaUsuario(token.toString());

                    console.log("Dados usu")
                    console.log(dadosUsuario)

                    setDados(dadosUsuario);

                    console.log("Dados")
                    console.log(dados)
                    return 
                } catch (error) {   

                    console.error(error);

                    erroContext?.setErro(`${error}`);
                    erroContext?.setUrl("/Login");
                    router.replace("/Erro");

                } finally {
                    erroContext?.setLoading(false);
                }
            }
            
            buscandoUsuario();
        },
        [userContext?.acessToken]
    );

    return { dados, setDados }
}
