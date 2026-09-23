'use client';

import BtnDesativarConta from "@/features/Usuarios/DesativarUsuario/components/BtnDesativarConta/btnDesativarConta.component";
import { usePerfilUsuario } from "@/features/Usuarios/Perfil/hooks/usePerfilUsuario.hook";
import style from "@/components/UI/Styles/formPerfil.module.css"

export default function FormPerfil() {

    const { dados } = usePerfilUsuario()

    return (
        <form className={style.containnnerForm}>

            <div className={style.boxTitulo}>
                <h2 className={style.titulo}>Perfil</h2>
            </div>

            <div className={style.boxDados}>
                <label htmlFor="nome" className={style.labels}>Nome</label>
                <input type="text" value={dados?.Nome} name="nome" className={style.inputs} disabled/>
            </div>
            <div className={style.boxDados}>
                <label htmlFor="data_nascimento" className={style.labels}>Data Nacimento</label>
                <input type="text" value={dados?.Data_Nascimento} name="data_nascimento" className={style.inputs} disabled/>
            </div>
            <div className={style.boxDados}>
                <label htmlFor="cpf" className={style.labels}>CPF</label>
                <input type="number" value={dados?.Cpf} name="cpf" className={style.inputs} disabled/>
            </div>

            <BtnDesativarConta/>
        </form>
    )
}
