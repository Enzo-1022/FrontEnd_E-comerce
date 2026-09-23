'use client';

import style from '@/components/UI/Styles/login.module.css';
import { useContext } from 'react';
import { ErroContext } from '@/context/ErroContext/erroContext.context';
import { Produtos } from '@/features/Administrador/CadastroProduto/types/CadastroProdutos.type';
import { useRouter } from 'next/navigation';

export default function BtnCadastroProdutos({ pNome, pQuantidade, pDescricao, pPreco } : Produtos) {

    async function cadastroProdutos(pNome : string, pQuantidade : string, pDescricao : string, pPreco : string) {
        // const erro = useContext(ErroContext);
        // const router = useRouter();

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
                    credentials : 'include',
                    body : new URLSearchParams(produto)
                }
            );

            var bodyResponse = await response.json();

            if (response.status == 201)
            {
                console.log(bodyResponse.IdProduto)
                alert(`Produto cadastrado com sucesso, ${bodyResponse.IdProduto.Id_Produto}`);
            }
            else 
            {
                throw new Error(response.statusText, {cause : bodyResponse})
            }
        } 
        catch (error) 
        {
            // erro?.setErro(`${error}`);
            // erro?.setUrl('/Administrador/CadastroProduto');
            // router.push('/Erro');
            console.error(error)
        }
    }

    return (
        <button className={style.botaoSubmit} onClick={ () => { cadastroProdutos(pNome, pQuantidade, pDescricao, pPreco) } } > Cadastrar Produto</button>
    )
}
