import { Request, Response } from "express";

import { AdicionarProduto, EditarProduto, EditarVariante } from "./schemas/ProdutosSchema";
import { ProdutosServiceFactory } from "../factories/ProdutosFactory";
import { ValidarUUIDSchema } from "./schemas/GlobalSchema";
import { VariantesServiceFactory } from "../factories/VariantesFactory";
class ProdutosController {

    async buscarTodosProdutos(req: Request, res: Response) {
        try {

            const retorno = await ProdutosServiceFactory.buscarTodosProdutos();
            res.json(retorno);

        } catch (err: any) {
            res.status(400).json({ error: err.message });
        }
    }

    async adicionar(req: Request, res: Response) {
        try {
            await AdicionarProduto.validate(req.body);

            const retorno = await ProdutosServiceFactory.adicionar(req.body);

            res.status(201).json(retorno);
        } catch (err: any) {
            res.status(400).json({ error: err.message });
        }
    }

    async editarProduto(req: Request, res: Response) {
        try {

            await EditarProduto.validate(req.body);

            const id = req.params.id

            await ValidarUUIDSchema.validate(id);

            if (!id || Array.isArray(id)) {
                throw new Error("Por favor, selecione o produto para editar!");
            }

            const retorno = await ProdutosServiceFactory.editarProduto(req.body, id);
            res.json(retorno);

        } catch (err: any) {
            res.status(400).json({ error: err.message });
        }
    }

    async editarVariante(req: Request, res: Response) {
        try {

            const id = req.params.id
            await ValidarUUIDSchema.validate(id);
            await EditarVariante.validate(req.body);

            if (!id || Array.isArray(id)) {
                throw new Error("Por favor, selecione a variante para editar!");
            }

            const retorno = await ProdutosServiceFactory.editarVariante(req.body, id);
            res.json(retorno);

        } catch (err: any) {
            res.status(400).json({ error: err.message });
        }
    }

    async excluirProduto(req: Request, res: Response) {
        try {

            const id = req.params.id

            await ValidarUUIDSchema.validate(id);

            if (!id || Array.isArray(id)) {
                throw new Error("Por favor, selecione o produto para editar!");
            }

            const retorno = await ProdutosServiceFactory.excluirProduto(id);
            res.json(retorno);

        } catch (err: any) {
            res.status(400).json({ error: err.message });
        }
    }

    async desativarVariante(req: Request, res: Response) {
        try {

            const id = req.params.id

            await ValidarUUIDSchema.validate(id);

            if (!id || Array.isArray(id)) {
                throw new Error("Por favor, selecione a variante para excluir!");
            }

            const retorno = await ProdutosServiceFactory.excluirVariante(id);
            return res.json(retorno);

        } catch (err: any) {
            res.status(400).json({ error: err.message });
        }
    }

    async desativarVarianteValor(req: Request, res: Response) {
        try {

            const id = req.params.id;

            await ValidarUUIDSchema.validate(id);

            if (!id || Array.isArray(id)) {
                throw new Error("Por favor, selecione o valor da variante para excluir!");
            }

            const retorno = await VariantesServiceFactory.desativarVarianteValor(id);
            res.json(retorno);

        } catch (err: any) {
            res.status(400).json({ error: err.message });
        }
    }

}

export default ProdutosController; 