
import { Variantes } from "../models/Variantes";
import { VariantesValores } from "../models/VariantesValores";

import VariantesRepository from "../repositories/VariantesRepository";
import VariantesValoresRepository from "../repositories/VariantesValoresRepository";

class VariantesService {

    constructor(
        private readonly _variantesRepository: VariantesRepository,
        private readonly _VariantesValoresRepository: VariantesValoresRepository
    ) { }

    async adicionar(dados: Variantes[]) {
        return await this._variantesRepository.adicionar(dados);
    }

    async adicionarVariantesValores(dados: VariantesValores[]) {
        return await this._VariantesValoresRepository.adicionarVarios(dados);
    }

    async buscarTodas(id_produto: string) {
        return await this._variantesRepository.buscarTodas(id_produto);
    }
}

export default VariantesService;