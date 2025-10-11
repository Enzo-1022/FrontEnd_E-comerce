'use client'

import { createContext, useState, ReactNode } from 'react';

type ErroState = {
    erro : string;
    setErro : (valor:string) => void;
}

export const ErroContext = createContext<ErroState | undefined>(undefined);

export const ErroProvider = (
    {
        children
    } : {
        children: React.ReactNode
    }
) => {
    const [erro, setErro] = useState<string>('');

    return(
        <ErroContext.Provider value={{erro, setErro}}>
            {children}
        </ErroContext.Provider>
    )
}
