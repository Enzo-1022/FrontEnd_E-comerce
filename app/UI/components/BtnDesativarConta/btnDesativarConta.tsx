import desativaUSuario from "./tt"

export default async function BtnDesativarConta() {
    return (
    
    <form action={desativaUSuario}>
        <button type="submit">Desativar Conta?</button>
    </form>
 )
}
