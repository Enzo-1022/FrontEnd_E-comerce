import { cookies } from 'next/headers';
import { Produtos } from '@/types/Produtos.type';

export default async function CatalogoSecao () {
    try {
        const cookieStore = await cookies();

        var cookieHeader = cookieStore.toString(); // Pegando o conteudo do cookie sessioToken, que por sua vez é o token de sessão.

        var response = await fetch( // Fazendo a requisição ao endpoint de catalogo(Pagina index do app)
            'http://localhost:3001/Produtos/Catalogo', // Url do endpoint
            
            { // Configurações da requisição.
                mode : "cors", // Usando o método cors para segurança das requisições
                method : 'post', // Método da Requisição
                credentials: 'include', // Credentials isso significa que permite o uso de cookies e localstorage, include significa que vai incluso na requisição?
                body : new URLSearchParams({'Pagina' : '1'}), // Depois pensar na lógica para a paginação do lado do frontend
                headers: { // Headers são os cabeçalhos da requisição
                    "Cookie" : cookieHeader,
                } 
            }
        );
        
        if (response.status == 200) // Se o status da resposta for 200 ok
        {
            const catalogo = await response.json(); // Convertendo a requisição para Json, basicamente extraindo o conteudo do body da requisiçã

            const produtos = catalogo.produtos; // Pegando a propriedade produtos do Body json da requisição
            
            return(
                <section>
                    <ul>
                        {
                            produtos.map(
                                (produto:Produtos) => {
                                    return <li key={produto.Id_Produto}>{produto.Nome}</li>
                                }
                            )
                        }
                    </ul>
                </section>
            );
        }
        else // qualquer outro status que não seja 200 ok, gerará um novo erro que será tratado pelo try catch
        {
            throw new Error(response.statusText) // Aqui podemos ver outro método para tratarmos essas exeções, se status da requisição for 401 ou 500 gerará um novo erro e esse erro irá automaticamente para o catch e no catch existe um tratamento geral dos erros/exeções
        }
    } catch (error) {
        console.error(error);
        return (
            <div>
                <h1>{`${error}`}</h1>
                <a href="/Login">Volte e faça novamente o seu login</a>
            </div>
        )
    }
}

// Refatorado para os padrões de segurança aceitaveis 26/09/2025 
