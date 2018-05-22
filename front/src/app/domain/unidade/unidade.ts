import { Instituicao } from "../instituicao/instituicao";

export class Unidade {
    id: number;
    instituicao: Instituicao;
    nome: string;
    codigo: string;
    bairro: string;
    logradouro: string;
    numero: number;
    caixaPostal: number;
    pais: string;
    numeroFiscal: number;
    provincia: string;
    municipio: string;
}
