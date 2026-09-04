import AtributosRepository from "../repositories/AtributosRepository";
import AtributosService from "../services/AtributosService";
import { ValoresAtributosRepositoryFactory } from "./ValoresAtributosFactory";

export const AtributosRepositoryFactory = new AtributosRepository();

export const AtributosServiceFactory = new AtributosService(
    AtributosRepositoryFactory,
    ValoresAtributosRepositoryFactory
);

