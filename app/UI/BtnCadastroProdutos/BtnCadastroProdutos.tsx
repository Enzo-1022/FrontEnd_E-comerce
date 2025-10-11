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
        var produto = { Nome : nome, Quantidade : quantidade, Descricao : descricao, Preco : preco };

        var response = await fetch(

            'http://localhost:3001/Admin/CadastroProduto',

            {
                method : 'post',
                mode : 'cors',
                body : new URLSearchParams(produto),
            }
        );

        var bodyResponse = await response.json();

        if (response.status == 400) 
        {
            alert(`Má requisição, ${bodyResponse.Erro}`);
        }
        else if (response.status == 500)
        {
            alert(`${bodyResponse.Erro}`);
        }
        else if (response.status == 201)
        {
            console.log(bodyResponse.IdProduto)
            alert(`Produto cadastrado com sucesso, ${bodyResponse.IdProduto.Id_Produto}`);
        }
        else 
        {
            alert(`Erro desconhecido!!!`);
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
