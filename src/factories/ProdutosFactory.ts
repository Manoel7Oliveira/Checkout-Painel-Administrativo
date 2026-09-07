import ProdutosService from "../services/ProdutosService";
import ProdutosRepository from "../repositories/ProdutosRepository";

export const ProdutosRepositoryFactory = new ProdutosRepository();
export const ProdutosServiceFactory = new ProdutosService(ProdutosRepositoryFactory);
