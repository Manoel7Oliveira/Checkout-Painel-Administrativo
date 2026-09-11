import VariantesRepository from "../repositories/VariantesRepository";
import VariantesService from "../services/VariantesService";

export const VariantesRepositoryFactory = new VariantesRepository();
export const VariantesServiceFactory = new VariantesService(VariantesRepositoryFactory);