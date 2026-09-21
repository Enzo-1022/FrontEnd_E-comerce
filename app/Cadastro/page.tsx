'use client';

import style from '@/components/UI/Styles/login.module.css';

import React from 'react';

import BtnCadastro from '@/features/Cadastro/components/BtnCadastro/btnCadastro.component';

export default function Cadastro() {

    const [ nome, setNome ] = React.useState('');
    const [ dataNascimento, setDataNascimento ] = React.useState('');
    const [ cpf, setCpf ] = React.useState('');
    const [ email, setEmail ] = React.useState('');
    const [ senha, setSenha ] = React.useState('');
    const [ confirmarSenha, setConfirmarSenha ] = React.useState('');

    return(
        <section className={style.section}>
            {
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
                </form>
            }
        </section>
    )
}
