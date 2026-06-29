export type UserState = {
    userID : number | undefined
    setUserID : (id:number | undefined) => void
    acessToken : string
    setAcessToken : (token:string) => void
}