import { useContext } from "react";
import Usuarios from "../Services/Usuarios";
import { UserContext } from "../UI/context/userContext";
import { useRouter } from "next/navigation";
import { ErroContext } from "../UI/context/erroContext";

export function useAtivarUsuario() {

    const userContext = useContext(UserContext);
    const erroContext = useContext(ErroContext);
    const router = useRouter();

    async function ativarUsuario(){
        erroContext?.setLoading(true);
        try {

            if (!userContext?.userID) {
                throw new Error('Erro ao Encontrar Usuário');
            }

            const AtivandoUsuario = await Usuarios.AtivaUsuario(userContext.userID);

            if (AtivandoUsuario != 204) {
                throw new Error("Erro Ao Ativar Perfil do Usuário, Tente Novamente Mais Tarde!");
            }

            erroContext?.setNotify({
                Title : "Sucesso!",
                Message : "Usuário Ativado Com Sucesso"
            });

            router.replace('/Usuarios/AtivarUsuario');

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