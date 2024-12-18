import {IBaseAddress} from "./IBaseAddress";

export interface ISnapAddress extends IBaseAddress {
    "area code"?: string;
    complemento?: string;
    logradouro: string;
    nome?: string;
    "telefone relacionado"?: string;
}