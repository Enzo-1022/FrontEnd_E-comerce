'use client'
import { useDesativaPerfil } from "@/app/hooks/useDesativaUsuario"

export default function BtnDesativarConta() {
    const { desativandoPerfil } = useDesativaPerfil()
    return (
        <button onClick={() =>  { desativandoPerfil()  }} type="submit">Desativar conta?</button>
    )
}
