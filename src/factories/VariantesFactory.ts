import VariantesRepository from "../repositories/VariantesRepository";
import VariantesValoresRepository from "../repositories/VariantesValoresRepository";
import VariantesService from "../services/VariantesService";

export const VariantesRepositoryFactory = new VariantesRepository();
export const VariantesValoresRepositoryFactory = new VariantesValoresRepository();

export const VariantesServiceFactory = new VariantesService(
    VariantesRepositoryFactory,
    VariantesValoresRepositoryFactory
);