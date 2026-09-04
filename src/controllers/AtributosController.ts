import { Request, Response } from "express";
import { Adicionar } from "./schemas/AtributosSchema";

import { AtributosServiceFactory } from "../factories/AtributosFactory";

class AtributosController {

    async adicionar(req: Request, res: Response) {
        try {
            await Adicionar.validate(req.body);

            const retorno = await AtributosServiceFactory.adicionar(req.body);

            res.status(201).json(retorno);
        } catch (err: any) {
            res.status(400).json({ error: err.message });
        }
    }

}

export default AtributosController;