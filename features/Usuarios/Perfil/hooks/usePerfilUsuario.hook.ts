import { useContext, useEffect, useRef, useState } from "react";
import Usuarios from "@/features/Usuarios/Services/Usuarios.service";
import Usuario from "@/features/Usuarios/interfaces/Usuario.interface";
import { useRouter } from "next/navigation";
import { ErroContext } from "@/context/ErroContext/erroContext.context";

export function usePerfilUsuario(){
    const [ dados, setDados ] = useState<Usuario>(
        {
            Cpf : "", 
            Data_Nascimento : "", 
            Id_Usuario: 0, 
            Nome : ""
        }
    );

    const router = useRouter();

    const erroContext = useContext(ErroContext);

    async function buscandoUsuario() {
        try {

            erroContext?.setLoading(true);

            const dadosUsuario = await Usuarios.BuscaUsuario();

            setDados(dadosUsuario);

            return;
        } catch (error) {   

            erroContext?.setErro(`${error}`);
            erroContext?.setUrl("/Login");
            router.replace("/Erro");

            return;

        } finally {
            erroContext?.setLoading(false);

            return;
        }
    }

    useEffect(
        () => {
            buscandoUsuario();
        },
        []
    );

    return { dados, setDados }
}
