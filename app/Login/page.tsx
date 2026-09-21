'use client';

import style from '@/components/UI/Styles/login.module.css';
import React from 'react';
import BtnLogin from '@/features/Login/components/BtnLogin/btnLogin.component';

export default function Login () {
    const [email1, setEmail] = React.useState('');

    const [senha1, setSenha] = React.useState('');

    return(
        <section>
            <form action="" method="get" className={style.formularioLogin}>
                <div className={style.boxTitulo}>
                    <h2 className={style.titulo}>Login</h2>
                </div>

                <div className={style.containerInputs}>
                    <div className={style.boxForm}>
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="Email" id="email" value={email1} className={style.input} onChange={ (e) => {setEmail(e.target.value)} }/>
                    </div>

                    <div className={style.boxForm}>
                        <label htmlFor="senha">Senha:</label>
                        <input type="password" name="Senha" id="senha" className={style.input} value={senha1} onChange={ (e) => {setSenha(e.target.value)} }/>
                    </div>

                    <div className={style.boxBtns}>
                        <BtnLogin pEmail={email1} pSenha={senha1}/>
                        <span>Não possui conta? <a href="/Cadastro">Cadastre-se</a></span>
                    </div>
                </div>
            </form>
        </section>
    )
}

