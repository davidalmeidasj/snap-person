import {ISnapAddress} from "./ISnapAddress";
import {IPerson} from "./Person";
import {IPhone} from "./IPhone";
import {IEmail} from "./IEmail";
import {ICompany} from "./ICompany";

export interface SnapItem {
    email: IEmail[];
    empresa: ICompany[];
    telefone: IPhone[];
    pessoa: IPerson[];
    endereco: ISnapAddress[];
}

export interface Snap {
    SNAP: SnapItem[];
}
