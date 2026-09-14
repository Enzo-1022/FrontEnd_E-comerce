import { pino } from "pino";

const logger = pino({
    // level : process.env.NODE_ENV === 'development' ? 'debug' : 'info', // Aqui estamos verificando se a aplicação está sendo exceutada em modo de produção ou em modo de desenvolvimento, caso seja em modo de produção o pino irá capturar apenas os logs mais importantes como os de erro, caso seja em modo de desenvolvimento o pino irá capturar logs mais genericos e que podem ser uteis para o desenvolvimento 

    // transport : process.env.NODE_ENV === 'development' ? {target : 'pino-pretty', options: {colorize: true}} : undefined // Aqui também estamos verificando se a aplicação está sendo executada em modo de produção ou desenvolvimento, para modo de desenvolvimento os logs são imprimidos com uma formatação mais bonita com corres e etc..., ja em produção ele traz esse log sem uma formatação bonita.

    level : 'debug',
    // transport : {target : 'pino-pretty', options : {colorize: true} }
});

export default logger;
