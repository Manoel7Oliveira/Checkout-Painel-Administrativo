import ProdutosService from "../services/ProdutosService";
import ProdutosRepository from "../repositories/ProdutosRepository";
import { VariantesServiceFactory } from "./VariantesFactory";

export const ProdutosRepositoryFactory = new ProdutosRepository();

export const ProdutosServiceFactory = new ProdutosService(
    ProdutosRepositoryFactory,
    VariantesServiceFactory
);
