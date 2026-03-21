import { useContext } from "react";
import Usuarios from "../Services/Usuarios";
import { ErroContext } from "@/app/UI/context/erroContext";
import { useRouter } from "next/router";

export function useDesativaPerfil() {

    const erroContext = useContext(ErroContext);
    const cookies = document.cookie;
    const token = cookies.split('sessionToken=')[1];
    const router = useRouter();

    erroContext?.setLoading(true);

    async function desativandoPerfil(){
        try {
            const Response = await Usuarios.DesativaPerfil(token);

            if (Response != 204) {
                throw new Error(`Erro ao Desativar Usuário, Tente Novamente Mais Tarde`);
            }

            router.push('/');

        } catch (error) {

            erroContext?.setErro(`${error}`);
            erroContext?.setUrl('/Login');
            router.replace('/Erro');

        } finally {
            erroContext?.setLoading(false);
        }
       
    }

    return { desativandoPerfil }
}
