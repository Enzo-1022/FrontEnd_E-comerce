'use client';

import style from '@/app/UI/styles/login.module.css';

import React, { useContext } from 'react';

import BtnCadastro from '@/app/UI/components/BtnCadastro/btnCadastro';

import Loading from '../UI/components/Loading/Loading';

import { ErroContext } from '../UI/context/erroContext';

export default function Cadastro() {

    var [ nome, setNome ] = React.useState('');
    var [ dataNascimento, setDataNascimento ] = React.useState('');
    var [ cpf, setCpf ] = React.useState('');
    var [ email, setEmail ] = React.useState('');
    var [ senha, setSenha ] = React.useState('');
    var [ confirmarSenha, setConfirmarSenha ] = React.useState('');

    const context = useContext(ErroContext)

    return(
        <section className={style.section}>
            {
                !context?.loading? 
                    <form action="" method="post" className={style.formularioCadastro}>
                        <div className={style.boxTitulo}>
                            <h2 className={style.titulo}>Cadastro</h2>
                        </div>

                        <div className={style.containerInputs}>

                            <div className={style.boxForm}>
                                <label htmlFor="nome">Nome:</label>
                                <input type="text" name="nome" id="nome" placeholder="Nome" required className={style.input} value={nome} onChange={ (e) => { setNome( e.target.value ) } }/>
                            </div>

                            <div className={style.boxForm}>
                                <label htmlFor="dt_Nascimento">Data de Nascimento:</label>
                                <input type="date" name="dt_Nascimento" id="dt_Nascimento" required className={style.input} value={dataNascimento} onChange={ (e) => { setDataNascimento( e.target.value ) } }/>
                            </div>

                            <div className={style.boxForm}>
                                <label htmlFor="cpf">CPF:</label>
                                <input type="text" name="cpf" id="cpf" placeholder="*********-**" required className={style.input} value={cpf} onChange={ (e) => { setCpf( e.target.value ) } }/>
                            </div>

                            <div className={style.boxForm}>
                                <label htmlFor="email">Email:</label>
                                <input type="email" name="email" id="email" placeholder="email@exemplo.com" required className={style.input} value={email} onChange={ (e) => { setEmail( e.target.value )} }/>
                            </div>

                            <div className={style.boxForm}>
                                <label htmlFor="senha">Senha:</label>
                                <input type="password" name="senha" id="senha" placeholder="XXXXX" required className={style.input} value={senha} onChange={ (e) => { setSenha( e.target.value ) } }/>
                            </div>

                            <div className={style.boxForm}>
                                <label htmlFor="confiSenha">Confirmar Senha:</label>
                                <input type="password" name="confiSenha" id="confiSenha" placeholder="XXXXX" required className={style.input} value={confirmarSenha} onChange={ (e) => { setConfirmarSenha(e.target.value) } }/>
                            </div>

                            <div className={style.boxBtns}>
                                <BtnCadastro pNome={nome} pDtNascimento={dataNascimento} pCpf={cpf} pEmail={email} pSenha={senha} pConfSenha={confirmarSenha}/>
                                <span>Ja possui uma conta? <a href="/Login">Faça seu login!</a></span>
                            </div>
                        </div>
                    </form> : <Loading />
            }
        </section>
    )
}
