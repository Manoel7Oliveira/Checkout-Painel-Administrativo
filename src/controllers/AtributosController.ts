import { Request, Response } from "express";
import { Adicionar, AdicionarValor, EditarAtributo, EditarValorAtributo } from "./schemas/AtributosSchema";

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

    async adicionarValorAtributo(req: Request, res: Response) {
        try {

            await AdicionarValor.validate(req.body);

            const id = req.params.id;

            if (!id || Array.isArray(id)) {
                throw new Error("Por favor, selecione um atributo para adicionar um valor!");
            }

            const atributos = await AtributosServiceFactory.adicionarValorAtributo(req.body, id);

            res.status(201).json(atributos);

        } catch (err: any) {
            res.status(400).json({ error: err.message });
        }
    }

    async editarAtributo(req: Request, res: Response) {
        try {

            await EditarAtributo.validate(req.body);

            const id = req.params.id

            if (!id || Array.isArray(id)) {
                throw new Error("Por favor, selecione um atributo para editar!");
            }

            const atributoEditado = await AtributosServiceFactory.editarAtributo(req.body, id);

            res.json({ atributoEditado });


        } catch (err: any) {
            res.status(400).json({ error: err.message });
        }
    }

    async editarValorAtributo(req: Request, res: Response) {
        try {

            await EditarValorAtributo.validate(req.body);

            const id = req.params.id

            if (!id || Array.isArray(id)) {
                throw new Error("Por favor, selecione um valor de atributo para editar!");
            }

            const valorAtributoEditado = await AtributosServiceFactory.editarValorAtributo(req.body, id);

            res.json(valorAtributoEditado);

        } catch (err: any) {
            res.status(400).json({ error: err.message });
        }
    }

    async buscarTodosAtributos(req: Request, res: Response) {

        try {

            const retorno = await AtributosServiceFactory.buscarTodos();
            res.json(retorno);

        } catch (err: any) {
            res.status(400).json({ error: err.mesage });
        }
    }

    async excluirAtributo(req: Request, res: Response) {
        try {
            const id = req.params.id;

            if (!id || Array.isArray(id)) {
                throw new Error("Por favor, selecione um atributo para excluir!");
            }

            const retorno = await AtributosServiceFactory.excluir(id);
            res.status(200).json(retorno);

        } catch (err: any) {
            res.status(400).json({ error: err.message })
        }
    }

    async excluirValorAtributo(req: Request, res: Response) {
        try {
            const id = req.params.id;

            if (!id || Array.isArray(id)) {
                throw new Error("Por favor, selecione um valor do atributo para excluir!");
            }

            const retorno = await AtributosServiceFactory.excluirValor(id);
            res.status(200).json(retorno);

        } catch (err: any) {
            res.status(400).json({ error: err.message });
        }
    }
}

export default AtributosController;