'use client'
import BtnDesativarConta from "@/features/Usuarios/DesativarUsuario/components/BtnDesativarConta/btnDesativarConta.component";
import { usePerfilUsuario } from "@/features/Usuarios/Perfil/hooks/usePerfilUsuario.hook";
import Usuario from "@/features/Usuarios/interfaces/Usuario.interface";
import Usuarios from "@/features/Usuarios/Services/Usuarios.service";

export default function Perfil () {

    const { dados } = usePerfilUsuario();

    // const dados : Usuario = await Usuarios.BuscaUsuario();

    try {
        return <>
            {console.log(dados)}
            {/* <p>{dados?.Cpf}</p> */}
            <BtnDesativarConta/>
            <p>{dados?.Cpf}</p>
        </> 
        
    } catch (error) {
        console.log(error)
        return <>
            <h1>Deu RED</h1>
        </>
    }
}
