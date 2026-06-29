'use client';

import { UserState } from "@/app/types/typeUsuerState";
import { createContext, useState } from "react";

export const UserContext = createContext<UserState | undefined>(undefined)

export const UserProvider = (
    {
        children
    } : {
        children : React.ReactNode
    }
) => {
    const [userID, setUserID] = useState<number | undefined>();
    const [acessToken, setAcessToken] = useState<string>('');

    return (
        <UserContext.Provider value = {{userID, setUserID, acessToken, setAcessToken}}>
            {children}
        </UserContext.Provider>
    )
}