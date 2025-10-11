'use client'
import { useContext } from "react";
import { ErroContext } from "../UI/context/erroContext";

export default function Erro() 
{
    const erro = useContext(ErroContext);

    return (
        <>
            <h2>
                {erro?.erro}
            </h2>
            <a href="/">Voltar ao inicio?</a>
        </>
    )
}
