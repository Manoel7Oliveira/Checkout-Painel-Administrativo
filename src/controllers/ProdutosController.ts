import { Request, Response } from "express";

import { AdicionarProduto } from "./schemas/ProdutosSchema";
import { ProdutosServiceFactory } from "../factories/ProdutosFactory";

class ProdutosController {

    async adicionar(req: Request, res: Response) {
        try {
            await AdicionarProduto.validate(req.body);

            const retorno = await ProdutosServiceFactory.adicionar(req.body);

            res.status(201).json(retorno);
        } catch (err: any) {
            res.status(400).json({ error: err.message });
        }
    }

    
}

export default ProdutosController;