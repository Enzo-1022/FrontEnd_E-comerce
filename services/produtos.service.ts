import { Produto } from "@/types/Produtos.type";
import Auth from "./auth.service";

type res = {
    produtos : Produto[],
    QtdPaginas : string,
    paginaEnviada : string
}

export default class Produtos {

    /**
     * name
     */
    public static async BuscaProdutos (pagina : string) : Promise<res> {
        try {
            const res = await fetch(
                'http://localhost:3001/Produtos/Catalogo',
                    { // Configurações da requisição.
                    mode : "cors", // Usando o método cors para segurança das requisições
                    method : 'post', // Método da Requisição
                    credentials: 'include', // Credentials isso significa que permite o uso de cookies e localstorage, include significa que vai incluso na requisição?
                    body : new URLSearchParams({'Pagina' : pagina}), // Depois pensar na lógica para a paginação do lado do frontend
                    // headers: { // Headers são os cabeçalhos da requisição
                    //     "Cookie" : cookiesHeader
                    // }
                }
            );
    
            const bodyRes : res = await res.json();
    
            switch (res.status) {
                case 200:
                    break;
            
                case 401:
                    // Função que fará a re-altenticação para conseguir o novo acess token
                    const renovandoAcessToken = await Auth.renovaAcessToken();

                    if (renovandoAcessToken == "ok") {
                        return await this.BuscaProdutos(pagina);
                    }

                    break;
    
                default:
                    throw new Error("Erro ao Buscar Catalogo", { cause : bodyRes });
            }
        
            return bodyRes;
        } catch (error) {
            throw new Error("Erro ao Buscar Produtos", { cause : error });
        }
    }
}