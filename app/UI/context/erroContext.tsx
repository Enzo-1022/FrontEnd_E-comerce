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
    const [notify, setNotify] = useState<Object>({
        Title: undefined,
        Message : undefined
    })

    return(
        <ErroContext.Provider value={{erro, setErro, url, setUrl, notify, setNotify}}>
            {children}
        </ErroContext.Provider>
    )
}
