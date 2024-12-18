import {CircleUser, User} from 'lucide-react';
import {IPerson} from "@/app/types/Person";
import React from "react";
import {Card} from "@/app/components/Card";

interface PersonalInfoProps {
    person?: IPerson;
}


export function PersonalInfo({person}: PersonalInfoProps) {
    return (
        <div className="text-left">
            <div className="flex justify-center mb-8">
                <CircleUser width={120} height={120}/>
            </div>

            <h1 className="font-normal text-gray-900 text-4xl md:text-3xl leading-none mb-8 flex justify-center">
                {person && person['full name']}</h1>

            <Card title={'Informações pessoais'} icon={<User className="w-5 h-5"/>}>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <p className="text-sm text-gray-600">CPF</p>
                        <p className="font-normal text-gray-600 md:text-xl">{person && person.cpf}</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-600">Data de Nascimento</p>
                        <p className="font-normal text-gray-600 md:text-xl">{person && person['data nascimento']}</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-600">Idade</p>
                        <p className="font-normal text-gray-600 md:text-xl">{person && person.idade} anos</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-600">Nacionalidade</p>
                        <p className="font-normal text-gray-600 md:text-xl">{person && person.nacionalidade}</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-600">Naturalidade</p>
                        <p className="font-normal text-gray-600 md:text-xl">{person && person.cidade_nascimento} - {person && person.estado_nascimento}</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-600">RG</p>
                        <p className="font-normal text-gray-600 md:text-xl">{person && person.identidade}</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-600">Título de Eleitor</p>
                        <p className="font-normal text-gray-600 md:text-xl">{person && person['titulo de eleitor']}</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-600">PIS/PASEP</p>
                        <p className="font-normal text-gray-600 md:text-xl">{person && person['pis/pasep']}</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-600">CTPS</p>
                        <p className="font-normal text-gray-600 md:text-xl">{person && person.ctps}</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-600">Profissão</p>
                        <p className="font-normal text-gray-600 md:text-xl">{person && person.profissao}</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-600">Escolaridade</p>
                        <p className="font-normal text-gray-600 md:text-xl">{person && person.escolaridade}</p>
                    </div>
                </div>
            </Card>
        </div>
    )
        ;
}