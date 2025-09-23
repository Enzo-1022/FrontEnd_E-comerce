'use client';

import style from '@/app/UI/login.module.css';

interface Produtos {
    nome : string,
    quantidade : string,
    descricao : string,
    preco: string,
}

async function cadastroProdutos({ nome, quantidade, descricao, preco } : Produtos) {
    try 
    {
        let produto = { Nome : nome, Quantidade : quantidade, Descricao : descricao, Preco : preco };

        var resposta = await fetch(

            'http://localhost:3001/Admin/CadastroProduto',

            {
                method : 'post',
                mode : 'cors',
                body : new URLSearchParams(produto),
            }

        ).then( 
            ( res ) => { 
                return res.json() 
            } 
        );

        if(resposta.erro.status)

        {
            alert(`Um erro ocoreu!`);
        }
        else 
        {
            alert(`Produto Cadastrado com sucesso!`);
        }
    } 
    catch (error) 
    {
        alert(error);
    }
}

export default function BtnCadastroProdutos({nome, quantidade, preco, descricao} : Produtos) {
    return (
        <button className={style.botaoSubmit} onClick={ () => { cadastroProdutos({nome, quantidade, preco, descricao}) } } > Cadastrar Produto</button>
    )
}
