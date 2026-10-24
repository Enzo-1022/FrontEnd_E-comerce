'use client'
import { Produto } from '@/types/Produtos.type';
import { useCatalogo } from '../../hooks/useCatalogo';

export default function CatalogoSecao () {
    const { produtos } = useCatalogo("1");

    return(
        <section>
            <ul>
                {
                    produtos.map(
                        (produto:Produto) => {
                            return <li key={produto.Id_Produto}>{produto.Nome}</li>
                        }
                    )
                }
            </ul>
        </section>
    );
}
