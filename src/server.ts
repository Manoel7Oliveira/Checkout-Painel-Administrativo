import Expresss from 'express';
import dotenv from "dotenv"

dotenv.config()

const server = Expresss();

server.listen(process.env.PORT);
console.log(`Rodando na porta ${process.env.PORT}`);