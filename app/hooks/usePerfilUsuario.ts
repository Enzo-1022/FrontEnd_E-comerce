'use client'
import { useContext } from "react";
import { UserContext } from "../UI/context/userContext";
import Usuarios from "../Services/Usuarios";

export function usePerfilUsuario(){
    const userContext = useContext(UserContext);

    async function hookPerfilUsuario() {
       await Usuarios.BuscaUsuario(`${userContext?.acessToken}`)         
    }

    return {hookPerfilUsuario}
}
