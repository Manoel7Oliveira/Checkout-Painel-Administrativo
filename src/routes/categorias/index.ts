import { Router } from "express";

import CategoriasController from "../../controllers/CategoriasController";

const routes = Router();

const categoriasController = new CategoriasController();

routes.get("/categorias", categoriasController.buscarTodas);

export default routes;