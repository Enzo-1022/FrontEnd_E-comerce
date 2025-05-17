interface Produtos {
    NomeProduto : string,
    Id_Produto : number
}

export default async function CatalogoSecao () {
    // var token = localStorage.getItem('Token');
    // var login = localStorage.getItem('Login');

    var token = null;
    var login = null;

    try {
        var catalogo = await fetch('http://localhost:3001/Usuarios/Catalogo', {
            mode : "cors",
            method : 'get',
            headers : {
                "Auth" : token == null? "false" : token,
                "Login" : login == null? "false" : login
            }
        }).then( res => res.json() );

        // if(!catalogo.Login)
        // {
        //     new Error('Usuario não encontrado');
        // }
        // else if (catalogo.sessao == 'expirada') 
        // {
        //     new Error('Tempo de sessão expirado');
        // }

        var produtos = catalogo.Produtos;
        
        console.log(JSON.parse(JSON.stringify(catalogo)));

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