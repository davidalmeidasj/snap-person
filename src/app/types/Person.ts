import {IPhone} from "./IPhone";
import {IBaseAddress} from "./IBaseAddress";

export interface IPersonLocation extends IBaseAddress {
    "area code"?: string;
    logradouro: string;
    numero: string;
}

export interface IPersonAddress extends IBaseAddress {
    "cep ou zipcode": string;
    endereco?: string;
    nome?: string;
    numero: string;
    complemento?: string;
    logradouro?: string;
}

export interface IPerson {
    cpf?: string;
    "data nascimento"?: string;
    "first names": string;
    "full name": string;
    vinculo: string;
    endereco?: IPersonAddress[];
    telefone?: IPhone[];
    procon?: string;
    sexo?: "M" | "F";
    surname: string;
    "titulo de eleitor"?: string;
    bookmark?: string;
    cidade_nascimento?: string;
    ctps?: string;
    profissao?: string;
    escolaridade?: string;
    estado_nascimento?: string;
    idade?: string;
    identidade?: string;
    nacionalidade?: string;
    pais_nascimento?: string;
    "pis/pasep"?: string;
    "status receita"?: string;
    location?: IPersonLocation[];
}