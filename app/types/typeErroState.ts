export type ErroState = {
    erro : string;
    setErro : (valor:string) => void;
    url : string;
    setUrl: (valor:string) => void;
    notify : { Title? : string | undefined, Messege? : string | undefined },
    setNotify : (valor:object) => void;
}