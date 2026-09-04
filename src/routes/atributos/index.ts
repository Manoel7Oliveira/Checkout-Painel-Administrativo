import { Router } from "express";

import AtributosController from "../../controllers/AtributosController";

const routes = Router();

const atributosController = new AtributosController();

routes.post("/atributos", atributosController.adicionar);

export default routes;