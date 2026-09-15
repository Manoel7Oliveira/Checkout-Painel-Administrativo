import CategoriasRepository from "../repositories/CategoriasRepository";
import CategoriasService from "../services/CategoriasService";

export const CategoriasRepositoryFactory = new CategoriasRepository();
export const CategoriasServiceFactory = new CategoriasService(CategoriasRepositoryFactory);