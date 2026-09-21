'use client';

import {useAtivarUsuario} from "@/features/Usuarios/AtivarUsuario/hooks/useAtivarUsario.hook";

export default function BtnAtivarUsuario() {

    const { ativarUsuario } = useAtivarUsuario()
    return(
        <button onClick={() => {
            ativarUsuario();
        }}>Ativar Conta?</button>
    );
}