'use client'
import BtnDesativarConta from "@/app/UI/components/BtnDesativarConta/btnDesativarConta";

import { usePerfilUsuario } from "@/app/hooks/usePerfilUsuario";

export default function Perfil () {

    const { dados } = usePerfilUsuario();

    try {
        console.log(dados)
        return <>
            <BtnDesativarConta/>
        </> 
        
    } catch (error) {
        return <>
            <h1>Deu RED</h1>
        </>
    }
}
