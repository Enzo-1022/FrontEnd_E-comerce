'use client'
import BtnDesativarConta from "@/features/Usuarios/DesativarUsuario/components/BtnDesativarConta/btnDesativarConta";

import { usePerfilUsuario } from "@/features/Usuarios/Perfil/hooks/usePerfilUsuario";

export default function Perfil () {

    const { dados } = usePerfilUsuario();

    try {
        return <>
            {console.log(dados)}
            <BtnDesativarConta/>
        </> 
        
    } catch (error) {
        console.log(error)
        return <>
            <h1>Deu RED</h1>
        </>
    }
}
