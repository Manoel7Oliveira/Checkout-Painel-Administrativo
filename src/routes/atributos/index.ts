import { Router } from "express";

import AtributosController from "../../controllers/AtributosController";

const routes = Router();

const atributosController = new AtributosController();

routes.get("/atributos/", atributosController.buscarTodosAtributos);

routes.post("/atributos", atributosController.adicionar);
routes.post("/atributos/valor/:id", atributosController.adicionarValorAtributo);

routes.patch("/atributos/:id", atributosController.editarAtributo);
routes.patch("/atributos/valor/:id", atributosController.editarValorAtributo);

routes.delete("/atributos/:id", atributosController.excluirAtributo);
routes.delete("/atributos/valor/:id", atributosController.excluirValorAtributo);



export default routes;