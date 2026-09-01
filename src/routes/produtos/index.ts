import { Router } from "express";

import ProdutosController from "../../controllers/ProdutosController";

const routes = Router();

const produtosController = new ProdutosController();

routes.post("/produtos", produtosController.adicionar);


export default routes;