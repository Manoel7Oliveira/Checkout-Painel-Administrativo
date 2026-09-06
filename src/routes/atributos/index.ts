import { Router } from "express";

import AtributosController from "../../controllers/AtributosController";

const routes = Router();

const atributosController = new AtributosController();

routes.get("/atributos/", atributosController.buscarTodosAtributos);

routes.post("/atributos", atributosController.adicionar);
routes.post("/atributos/valor/:id", atributosController.adicionarValorAtributo);

routes.patch("/atributos/:id", atributosController.editarAtributo);
routes.patch("/atributos/valor/:id", atributosController.editarValorAtributo);


export default routes;