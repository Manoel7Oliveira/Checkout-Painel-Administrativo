import { IAdicionarAtributo } from "../controllers/schemas/AtributosSchema";
import AtributosRepository from "../repositories/AtributosRepository";
import ValoresAtributosRepository from "../repositories/ValoresAtributosRepository";

class AtributosService {

    constructor(
        private readonly _atributosRepository: AtributosRepository,
        private readonly _valoresAtributosRepository: ValoresAtributosRepository
    ) { }

    async adicionar(dados: IAdicionarAtributo) {
        const atributoAdicionado = await this._atributosRepository.adicionar(dados.nome);

        const retorno = {
            atributo: atributoAdicionado,
            valores: dados.valores
        }

        if (dados.valores) {

            const updateValoresAtributos: any = dados.valores.map(valor => ({
                ...valor,
                id_atributo: atributoAdicionado.id
            }));


            const contagemValoresAdicionados = await this._valoresAtributosRepository.adicionar(updateValoresAtributos);

            const valoresAtributosAdicionados = await this._valoresAtributosRepository.buscarValoresPorIdAtributo(atributoAdicionado.id);

            retorno.valores = valoresAtributosAdicionados;
        }

        return retorno;

    }
}

export default AtributosService;