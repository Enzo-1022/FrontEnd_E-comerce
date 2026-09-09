import { useContext, useEffect, useState } from "react";
import { UserContext } from "../UI/context/userContext";
import Usuarios from "../Services/Usuarios";

export function usePerfilUsuario(){
    const userContext = useContext(UserContext);

    const [dados, setDados] = useState<undefined|String>();

    useEffect(
        () => {

            const token = userContext?.acessToken;

            if(token) {
                Usuarios.BuscaUsuario(`${token}`).then(res => setDados(res.toString()));
            }

        },
        [ userContext?.acessToken ]
    );

    return { dados, setDados }
}
