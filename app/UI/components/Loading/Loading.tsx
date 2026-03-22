'use client'
import style from '@/app/UI/Styles/loading.module.css';

import { ErroContext } from '../../context/erroContext';
import { useContext } from 'react';

export default function Loading({children}: { children : React.ReactNode}) {

    const erroContext = useContext(ErroContext);

    return (

        !erroContext?.loading? 
            children : 
            <div className={style.boxLoading}>
                <span className={style.spanCarregando}>Carregando...</span>
            </div>
    )
}
