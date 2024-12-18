import {IPhone} from "./IPhone";
import {IBaseAddress} from "./IBaseAddress";

export interface ICompanyAddress extends IBaseAddress {
    "area code"?: string;
    complemento?: string;
    "cep ou zipcode"?: string;
    endereco: string;
    numero?: string;
}

export interface ICompany {
    cnpj: string;
    vinculo: string;
    renda?: string;
    admissao?: string;
    endereco: ICompanyAddress[];
    telefone?: IPhone[];
    "razao social": string;
}

