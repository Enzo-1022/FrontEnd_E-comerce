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

        let res = await fetch(
            'http://localhost:3001/Administrador/CadastroProdutos',
            {
                method : 'post',
                mode : 'cors',
                body : new URLSearchParams(JSON.stringify(produto)),
            }
        ).catch( res => res.json() );

        if(res.status == 'sucesso')
        {
            return 'sucesso'
        }
        else 
        {
            return res.erro
        }
    } 
    catch (error) 
    {
        return error
    }
}

export default function BtnCadastroProdutos({nome, quantidade, preco, descricao} : Produtos) {
    return (
        <button className={style.botaoSubmit} onClick={ () => { cadastroProdutos({nome, quantidade, preco, descricao}) } } > Cadastrar Produto</button>
    )
}
