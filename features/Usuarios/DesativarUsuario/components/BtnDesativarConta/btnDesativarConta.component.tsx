'use client'
import { useDesativaPerfil } from "@/features/Usuarios/DesativarUsuario/hooks/useDesativaUsuario"

export default function BtnDesativarConta() {
    const { desativandoPerfil } = useDesativaPerfil()
    return (
        <button onClick={() =>  { desativandoPerfil()  }}>Desativar conta?</button>
    )
}
