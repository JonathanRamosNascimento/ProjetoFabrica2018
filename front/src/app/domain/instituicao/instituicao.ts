import { Mantenedora } from './../mantenedora/mantenedora';
export class Instituicao {
    id: number;
    mantededora: Mantenedora;
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
