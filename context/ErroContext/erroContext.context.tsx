'use client'

import { ErroState } from '@/context/ErroContext/ErroState.type';
import { createContext, useMemo, useState } from 'react';

export const ErroContext = createContext<ErroState | undefined>(undefined);

export const ErroProvider = (
    {
        children
    } : {
        children : React.ReactNode
    }
) => {
    const [erro, setErro] = useState<string>('');
    const [url, setUrl] = useState<string>('')
    const [notify, setNotify] = useState<Object>({
        Title: undefined,   
        Message : undefined
    })
    const [loading, setLoading] = useState<boolean>(false)

    const memorizeData = useMemo( () => (
        {erro, setErro, url, setUrl, notify, setNotify, loading, setLoading}
    ), [erro, url, notify, loading]);
    
    return(
        <ErroContext.Provider value={memorizeData}>
            {children}
        </ErroContext.Provider>
    )
}
