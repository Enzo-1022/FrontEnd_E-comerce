interface Produtos {
    NomeProduto : string,
    Id_Produto : number
}

export default async function CatalogoSecao () {
    try {
        var response = await fetch(
            'http://localhost:3001/Usuarios/Catalogo', 
            
            {
                mode : "cors",
                method : 'get',
                credentials: 'include',
            }
        );
        console.log(response);

        var catalogo = await response.json();

        var produtos = catalogo.Produtos;

    } catch (error) {
        return (
            <div>
                <h1>{`${error}`}</h1>
                <a href="/Login">Volte e faça novamente o seu login</a>
            </div>
        )
    }
   
    return(
        <ul>
            {
                produtos.map(
                    (produto:Produtos) => {
                        return <li key={produto.Id_Produto}>{produto.NomeProduto}</li>
                    }
                )
            }
        </ul>
    )
}