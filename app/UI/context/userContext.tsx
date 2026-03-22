'use client';

import { UserState } from "@/app/types/typeUsuerState";
import { createContext, useState } from "react";

export const UserContext = createContext<UserState | undefined>(undefined)

export const userProvide = (
    {
        children
    } : {
        children : React.ReactNode
    }
) => {
    const [userID, setUserID] = useState<number | undefined >(0);

    return (
        <UserContext.Provider value = {{userID, setUserID}}>
            {children}
        </UserContext.Provider>
    )
}