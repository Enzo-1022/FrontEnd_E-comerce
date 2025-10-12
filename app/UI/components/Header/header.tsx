'use client'
import {anton} from "@/app/UI/Fonts/font";
import { useRouter } from "next/navigation";


export default function Header() {
    const router = useRouter();
    return(
        <header>
            <h1 className={`${anton.className} anton-regular`} onClick={ ()=> { router.push('/') } }>
                Simas Turbo
            </h1>
        </header>
    )
}
