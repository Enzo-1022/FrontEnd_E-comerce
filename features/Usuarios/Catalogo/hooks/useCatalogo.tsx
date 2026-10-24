import { Produto } from "@/types/Produtos.type";
import { useState, useContext, useEffect } from "react";
import { ErroContext } from "@/context/ErroContext/erroContext.context";
import { useRouter } from "next/navigation";
import Produtos from "@/services/produtos.service";

export function useCatalogo(numPag : string) {
    const [ produtos, setProdutos ] = useState<Produto[]>(
        [
            {
                Id_Produto : 0,
                Nome : "",
                Descricao : "",
                Quantidade : 0,
                Preco : 0.0
            }
        ]
    );

    const router = useRouter();

    const erroContext = useContext(ErroContext);

    async function getCatalogo(pagina : string) {

        erroContext?.setLoading(true);

        try {
            const dadosProdutos = (await Produtos.BuscaProdutos(pagina)).produtos;

            setProdutos(dadosProdutos);

        } catch (error) {

            erroContext?.setErro(`${error}`);
            erroContext?.setUrl("/Login");
            router.replace("/Erro");

        } finally {
            erroContext?.setLoading(false)
        }
    }

    useEffect(
        () => {
            getCatalogo(numPag);
        }, 
        [
            numPag // colocando o parametro de pagina aqui, toda vez que esse parametro mudar o useEffect vai refazer a função de fetch que irá atualizar o usestate que logo irá nos retornar os novos dados buscados
        ]
    );

    return { produtos, setProdutos }
}
