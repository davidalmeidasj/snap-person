import {User} from 'lucide-react';
import {IPerson} from "@/app/types/Person";
import {Card} from "@/app/components/Card";

interface PersonalInfoProps {
    person?: IPerson;
}

export function PersonalInfo({person}: PersonalInfoProps) {
    return (
        <Card title="Informações Pessoais" icon={<User className="w-5 h-5"/>}>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <p className="text-sm text-gray-600">Nome Completo</p>
                    <p className="font-medium">{person && person['full name']}</p>
                </div>
                <div>
                    <p className="text-sm text-gray-600">CPF</p>
                    <p className="font-medium">{person && person.cpf}</p>
                </div>
                <div>
                    <p className="text-sm text-gray-600">Data de Nascimento</p>
                    <p className="font-medium">{person && person['data nascimento']}</p>
                </div>
                <div>
                    <p className="text-sm text-gray-600">Idade</p>
                    <p className="font-medium">{person && person.idade} anos</p>
                </div>
                <div>
                    <p className="text-sm text-gray-600">Nacionalidade</p>
                    <p className="font-medium">{person && person.nacionalidade}</p>
                </div>
                <div>
                    <p className="text-sm text-gray-600">Naturalidade</p>
                    <p className="font-medium">{person && person.cidade_nascimento} - {person && person.estado_nascimento}</p>
                </div>
                <div>
                    <p className="text-sm text-gray-600">RG</p>
                    <p className="font-medium">{person && person.identidade}</p>
                </div>
                <div>
                    <p className="text-sm text-gray-600">Título de Eleitor</p>
                    <p className="font-medium">{person && person['titulo de eleitor']}</p>
                </div>
                <div>
                    <p className="text-sm text-gray-600">PIS/PASEP</p>
                    <p className="font-medium">{person && person['pis/pasep']}</p>
                </div>
                <div>
                    <p className="text-sm text-gray-600">CTPS</p>
                    <p className="font-medium">{person && person.ctps}</p>
                </div>
                <div>
                    <p className="text-sm text-gray-600">Profissão</p>
                    <p className="font-medium">{person && person.profissao}</p>
                </div>
                <div>
                    <p className="text-sm text-gray-600">Escolaridade</p>
                    <p className="font-medium">{person && person.escolaridade}</p>
                </div>
            </div>
        </Card>
    );
}