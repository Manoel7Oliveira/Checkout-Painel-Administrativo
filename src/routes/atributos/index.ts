import { Router } from "express";

import AtributosController from "../../controllers/AtributosController";

const routes = Router();

const atributosController = new AtributosController();

routes.post("/atributos", atributosController.adicionar);
routes.post("/atributos/valor/:id", atributosController.adicionarValorAtributo);
routes.patch("/atributos/:id", atributosController.editarAtributo);


export default routes;