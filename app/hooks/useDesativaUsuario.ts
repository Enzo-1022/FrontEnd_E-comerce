import { useContext } from "react";
import Usuarios from "../Services/Usuarios";
import { ErroContext } from "@/app/UI/context/erroContext";
import { useRouter } from "next/navigation";

export function useDesativaPerfil() {
    const router = useRouter();
    const erroContext = useContext(ErroContext);
    
    async function desativandoPerfil(){
        try {
            erroContext?.setLoading(true);

            const cookiestorage = document.cookie;
            const token = cookiestorage.split('sessionToken=')[1];

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
