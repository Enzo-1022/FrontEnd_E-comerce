export default class Auth {
    /**
    * name
    */
   public static async renovaAcessToken() : Promise<string> {
        try {
            const renovando = await fetch(
                'http://localhost:3001/Authorization/AttAcessToken', 
                {
                    mode:'cors',
                    method: 'get',
                    credentials: 'include',
                }
            );

            switch (renovando.status) {
                case 204:
                    return "ok";
            
                default:
                    const bodyRes = await renovando.json()
                    throw new Error(bodyRes.Titulo, { cause : bodyRes });
                    
            }

        } catch (error) {
            throw new Error("Falha ao Renovar Acess Token", { cause : error });
        }
   }
}