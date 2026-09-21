import { useContext, useEffect, useRef, useState } from "react";
import Usuarios from "@/features/Usuarios/Services/Usuarios.service";
import Usuario from "@/features/Usuarios/interfaces/Usuario.interface";
import { useRouter } from "next/navigation";
import { ErroContext } from "@/context/ErroContext/erroContext.context";

export function usePerfilUsuario(){
    const [ dados, setDados ] = useState<Usuario | null>(null);

    // const gg = useRef(false)


    // async function alocandoDados() {
    //     if (!gg.current) {
    //         const usuario = await Usuarios.BuscaUsuario()
    //         setDados(usuario);

    //         gg.current = true;
    //     }

    //     return
    // }

    //  useEffect(() => {
    //     alocandoDados()
    //  }, []);

    const router = useRouter();

    const erroContext = useContext(ErroContext);

    const gg = useRef(false)

    async function buscandoUsuario() {

        if (gg.current) return;
        try {
            gg.current = true;

            erroContext?.setLoading(true);

            const dadosUsuario = await Usuarios.BuscaUsuario();

            setDados(dadosUsuario);

            return;
        } catch (error) {   

            erroContext?.setErro(`${error}`);
            erroContext?.setUrl("/Login");
            router.replace("/Erro");

        } finally {
            erroContext?.setLoading(false);
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
