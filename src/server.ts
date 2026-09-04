import Express from 'express';
import dotenv from "dotenv"

import rotasProdutos from './routes/produtos';
import rotasAtributos from "./routes/atributos"

dotenv.config()

const server = Express();

server.use(Express.json()); 

server.use(rotasProdutos);
server.use(rotasAtributos);

server.listen(process.env.PORT);
console.log(`Rodando na porta ${process.env.PORT}`);