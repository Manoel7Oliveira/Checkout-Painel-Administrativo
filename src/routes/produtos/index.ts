import { Router } from "express";

import ProdutosController from "../../controllers/ProdutosController";

const routes = Router();

const produtosController = new ProdutosController();

routes.get("/produtos", produtosController.buscarTodosProdutos);

routes.post("/produtos", produtosController.adicionar);

routes.patch("/produtos/:id", produtosController.editarProduto);

routes.delete("/produtos/:id", produtosController.excluirProduto);


export default routes;