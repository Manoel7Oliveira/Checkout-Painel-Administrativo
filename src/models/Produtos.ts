export interface Produtos {
    id?: string;
    id_categoria: string;
    nome: string;
    descricao?: string | null;
    ativo: boolean;
    created_at?: any;
    updated_at?: any;
}  