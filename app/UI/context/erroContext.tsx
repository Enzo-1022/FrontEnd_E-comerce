'use client'

import { ErroState } from '@/app/types/typeErroState';
import { createContext, useState } from 'react';

export const ErroContext = createContext<ErroState | undefined>(undefined);

export const ErroProvider = (
    {
        children
    } : {
        children: React.ReactNode
    }
) => {
    const [erro, setErro] = useState<string>('');
    const [url, setUrl] = useState<string>('')

    return(
        <ErroContext.Provider value={{erro, setErro, url, setUrl}}>
            {children}
        </ErroContext.Provider>
    )
}
