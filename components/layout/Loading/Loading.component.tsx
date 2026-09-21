'use client';

import style from '@/components/UI/Styles/loading.module.css';

import { ErroContext } from '@/context/ErroContext/erroContext.context';
import { useContext } from 'react';

export default function Loading(
    {
        children
    }: 
    { 
        children : React.ReactNode 
    }
) {

    const erroContext = useContext(ErroContext);

    return (
        <>
            {
                erroContext?.loading && (
                    <div className={style.boxLoading}>
                        <span className={style.spanCarregando}>Carregando...</span>
                    </div>
                )
            }
            { children }
            
        </>
        
    )
}
