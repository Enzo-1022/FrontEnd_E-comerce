'use client'
import { useDesativaPerfil } from "@/features/Usuarios/DesativarUsuario/hooks/useDesativaUsuario";
import style from "@/components/UI/Styles/formPerfil.module.css";

export default function BtnDesativarConta() {
    const { desativandoPerfil } = useDesativaPerfil()
    return (
        <button className={style.btnDesativarConta} onClick={() =>  { desativandoPerfil()  }}>Desativar conta?</button>
    )
}
