'use client';

import style from '@/app/UI/Styles/login.module.css';
import { useContext } from 'react';
import { ErroContext } from '../../context/erroContext';
import { Produtos } from '@/app/types/typeCadastroProdutos';
import { useRouter } from 'next/navigation';

async function cadastroProdutos({ pNome, pQuantidade, pDescricao, pPreco } : Produtos) {
    const erro = useContext(ErroContext);
    const router = useRouter();

    try 
    {
        var produto = { 
            Nome : pNome, 
            Quantidade : pQuantidade, 
            Descricao : pDescricao, 
            Preco : pPreco 
        };

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
            erro?.setErro(`${bodyResponse.Erro}`);
            erro?.setUrl('/Administrador/CadastroProduto');
            router.push('/Erro');
        }
        else if (response.status == 201)
        {
            console.log(bodyResponse.IdProduto)
            alert(`Produto cadastrado com sucesso, ${bodyResponse.IdProduto.Id_Produto}`);
        }
        else 
        {
            erro?.setErro(`${bodyResponse.Erro}`);
            erro?.setUrl('/Administrador/CadastroProduto');
            router.push('/Erro');
        }
    } 
    catch (error) 
    {
        erro?.setErro(`${bodyResponse.Erro}`);
        erro?.setUrl('/Administrador/CadastroProduto');
        router.push('/Erro');
    }
}

export default function BtnCadastroProdutos({ pNome, pQuantidade, pDescricao, pPreco } : Produtos) {
    return (
        <button className={style.botaoSubmit} onClick={ () => { cadastroProdutos({pNome, pQuantidade, pDescricao, pPreco}) } } > Cadastrar Produto</button>
    )
}
