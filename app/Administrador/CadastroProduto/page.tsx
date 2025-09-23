'use client';

import BtnCadastroProdutos from "@/app/UI/BtnCadastroProdutos/BtnCadastroProdutos";
import React from "react";
import style from '@/app/UI/login.module.css';

export default function CadastroProdutos() {

    let [ nomeProduto, setNomeProduto ] = React.useState('');
    let [ quantidadeProduto, setQuantidadeProduto ] = React.useState('');
    let [ descicaoProduto, setDescricaoProduto ] = React.useState('');
    let [ precoProduto, setPrecoProduto ] = React.useState('');

    return(
        <section>
            <form action="" className={style.formularioCadastro}>

                <div className={style.boxTitulo}>
                    <h2 className={''}>Cadastro de Produtos</h2>
                </div>

                <div className={style.containerInputs}>

                    <div className={style.boxForm}>
                        <label htmlFor="nome">Nome Do Produto:</label>
                        <input className={style.input} type="text" name="" id="nome" placeholder="Nome" onChange={ (e) => { setNomeProduto(e.target.value) }} />
                    </div>

                    <div className={style.boxForm}>
                        <label htmlFor="">Quantidade Do Produto:</label>
                        <input className={style.input} type="number" name="" id="" placeholder="Quantidade" onChange={ (e) => { setQuantidadeProduto(e.target.value) }}/>
                    </div>

                    <div className={style.boxForm}>
                        <label htmlFor="">Preço Do Produto:</label>
                        <input className={style.input} type="number" name="" id="" placeholder="Preço" onChange={ (e) => { setPrecoProduto(e.target.value) }}/>
                    </div>

                    <div className={style.boxForm}>
                        <label htmlFor="">Descrição Do Produto:</label>
                        <textarea className={style.input} name="" id="" placeholder="Descrição" onChange={ (e) => { setDescricaoProduto(e.target.value) } }></textarea>
                    </div>

                    <div className={style.boxBtns}>
                        <BtnCadastroProdutos nome={nomeProduto} quantidade={quantidadeProduto} preco={precoProduto} descricao={descicaoProduto}/>
                    </div>

                </div>

            </form>
        </section>
    )
}