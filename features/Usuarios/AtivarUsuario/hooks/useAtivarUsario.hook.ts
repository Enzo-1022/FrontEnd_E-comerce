import { useContext } from "react";
import Usuarios from "@/features/Usuarios/Services/Usuarios.service";
import { useRouter } from "next/navigation";
import { ErroContext } from "@/context/ErroContext/erroContext.context";

export function useAtivarUsuario() {

    const erroContext = useContext(ErroContext);
    const router = useRouter();

    async function ativarUsuario(){
        erroContext?.setLoading(true);
        try {

            const AtivandoUsuario = await Usuarios.AtivaUsuario();

            if (AtivandoUsuario != 204) {
                throw new Error("Erro Ao Ativar Perfil do Usuário, Tente Novamente Mais Tarde!");
            }

            erroContext?.setNotify({
                Title : "Sucesso!",
                Message : "Usuário Ativado Com Sucesso, logue novamente!"
            });

            router.replace('/Usuarios/Perfil');

        } catch (error) {

            erroContext?.setErro(`${error}`)
            erroContext?.setUrl('/');
            router.replace('/Erro');

        } finally {
            erroContext?.setLoading(false);
        }
    }

    return {ativarUsuario};
}