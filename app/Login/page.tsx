'use client';

import style from '@/app/UI/Styles/login.module.css';
import React from 'react';
import BtnLogin from '../UI/components/BtnLogin/btnLogin';
import { ErroContext } from '../UI/context/erroContext';
import { useContext } from 'react';
import Loading from '../UI/components/Loading/Loading';

export default function Login () {
    var [email1, setEmail] = React.useState('');

    var [senha1, setSenha] = React.useState('');

    const context = useContext(ErroContext);

    return(
        <section>
            {
                !context?.loading?
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
                    </form>:
                    <Loading />
            }
        </section>
    )
}

