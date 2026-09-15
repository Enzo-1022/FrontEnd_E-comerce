'use client'
import BtnDesativarConta from "@/features/Usuarios/DesativarUsuario/components/BtnDesativarConta/btnDesativarConta";

import { usePerfilUsuario } from "@/features/Usuarios/Perfil/hooks/usePerfilUsuario";

export default function Perfil () {

    const { dados } = usePerfilUsuario();

    try {
        console.log(dados)
        return <>
            <BtnDesativarConta/>
        </> 
        
    } catch (error) {
        console.log(error)
        return <>
            <h1>Deu RED</h1>
        </>
    }
}
