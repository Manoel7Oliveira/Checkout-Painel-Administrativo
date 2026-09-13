import { Router } from "express";

import ProdutosController from "../../controllers/ProdutosController";

const routes = Router();

const produtosController = new ProdutosController();

routes.get("/produtos", produtosController.buscarTodosProdutos);

routes.post("/produtos", produtosController.adicionar);

routes.patch("/produtos/:id", produtosController.editarProduto);
routes.patch("/produtos/variantes/:id", produtosController.editarVariante);

routes.delete("/produtos/:id", produtosController.excluirProduto);
routes.delete("/produtos/variantes/:id", produtosController.desativarVariante);
routes.delete("/produtos/variantes/valores/:id", produtosController.desativarVarianteValor);


export default routes;