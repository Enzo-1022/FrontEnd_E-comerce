'use client'

import { UserState } from "@/context/UserContext/UserState.type";
import { createContext, useMemo, useState } from "react";

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

    const tt = useMemo(() => ({
        userID,
        acessToken,
        setAcessToken,
        setUserID
    }), [userID, acessToken])

    return (
        <UserContext.Provider value = {tt}>
            {children}
        </UserContext.Provider>
    )
}
