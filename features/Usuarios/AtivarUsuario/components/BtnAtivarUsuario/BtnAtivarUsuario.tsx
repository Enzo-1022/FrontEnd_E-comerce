'use client';

import {useAtivarUsuario} from "@/app/hooks/useAtivarUsario";

export default function BtnAtivarUsuario() {

    const { ativarUsuario } = useAtivarUsuario()
    return(
        <button onClick={() => {
            ativarUsuario();
        }}>Ativar Conta?</button>
    );
}