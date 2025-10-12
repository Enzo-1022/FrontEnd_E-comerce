'use client'
import { useContext } from "react";
import { ErroContext } from "../UI/context/erroContext";
import style from "../UI/styles/erro.module.css";

export default function Erro()
{
    const erro = useContext(ErroContext);

    return (
        <section className={style.sectionErro}>
            <h1 className={style.titleErro}>Erro</h1>
            <h4 className={style.subTitle}>
                {
                    erro?.erro
                }
            </h4>
            <a href={
                erro?.url.length == 0? "/" : erro?.url 
            } className={style.linkVoltar}>Voltar de onde parou?</a>
        </section>
    )
}
