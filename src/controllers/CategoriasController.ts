import { Request, Response } from "express";

import { CategoriasServiceFactory } from "../factories/CategoriasFactory";

class CategoriasController {
    
    async buscarTodas(req: Request, res: Response) {
        try {

            const retorno = await CategoriasServiceFactory.buscarTodas();
            res.json(retorno);

        } catch (err: any) {
            res.status(400).json({ error: err.message });
        }
    }
}

export default CategoriasController;