'use server'
import { cookies } from "next/headers";

export default async function desativaUSuario() {
    try {
        const cookiesStorage = await cookies();

        var token = cookiesStorage.get('sessionToken');

        const Response = await fetch(
            'http://localhost:3001/Usuarios/DesativarPerfil',
            {
                method: 'patch',
                mode: "cors",
                credentials: 'include',
                headers: {
                    'Content-Type' : 'application/json', 
                    'authorization' : `Bearer ${token?.value}`,
                    'accept' : 'application/json'
                }
            }
        );
        
        console.log(Response.status);

    } catch (error) {
        console.log(error)
    }
}