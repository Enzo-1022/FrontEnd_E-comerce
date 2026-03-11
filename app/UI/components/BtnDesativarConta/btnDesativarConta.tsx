'use client'
import { useRouter } from "next/navigation";

export default function BtnDesativarConta() {
    
    async function teste() {
        try {
            // const router = useRouter();
            var cookies = document.cookie;
            var token = cookies.split('sessionToken=')[1]
            // var token = cookies

            const Response = await fetch(
                'http://localhost:3001/Usuarios/DesativarPerfil',
                {
                    method : 'PATCH',
                    mode : "cors",
                    credentials : 'include',
                    headers : {
                        'Content-Type' : 'application/json', 
                        'authorization' : `Bearer ${token}`,
                        'accept' : 'application/json'
                    }
                }
            );

            // switch (Response.status) {
            //     case 204:
            //         router.push('/');
            //         break;
            
            //     default:
            //         console.log(Response.status, Response.statusText);
            //         break;
            // }
        } catch (error) {
            console.log(error)
        }
    }
        

    return (
        <button onClick={() => { teste(), console.log('foi') }} type="submit">Desativar conta?</button>
    )
}
