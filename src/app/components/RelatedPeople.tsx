import {Users} from 'lucide-react';
import {Card} from "@/app/components/Card";
import {IPerson} from "@/app/types/Person";

interface RelatedPeopleProps {
    people: IPerson[];
}

export function RelatedPeople({people}: RelatedPeopleProps) {
    return (
        <Card title="Pessoas Relacionadas" icon={<Users className="w-5 h-5"/>}>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 ">
                {people.map((person, index) => (
                    <div key={index} className=" p-4 rounded-md">
                        <div className="grid gap-2">
                            <div>
                                <p className="font-medium">{person['full name']}</p>
                                <p className="text-gray-600">Vínculo: {person.vinculo}</p>
                            </div>
                            {<p className="text-gray-600">CPF: {person.cpf || '-'}</p>}
                            <p className="text-gray-600">
                                Data de Nascimento: {person['data nascimento'] || '-'}
                            </p>
                            {(person.telefone && person.telefone.length > 0) ? (
                                <div>
                                    <p className="text-sm font-medium text-gray-700">Telefones:</p>
                                    {person.telefone.map((phone, phoneIndex) => (
                                        <div key={phoneIndex}>
                                            <p className="text-gray-600">{phone['phone number']}</p>
                                            {phone.operadora && (
                                                <p className="text-gray-600 text-sm">
                                                    Operadora: {phone.operadora}
                                                </p>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className={'flex items-center justify-start'}>
                                    <p className="text-sm font-medium text-gray-700 pr-2">Telefones:</p>
                                    <div>
                                        <p className="text-gray-600">-</p>
                                    </div>
                                </div>
                            )}
                            {(person.endereco && person.endereco.length > 0) ? (
                                <div>
                                    <p className="text-sm font-medium text-gray-700">Endereço:</p>
                                    {person.endereco.map((address, addressIndex) => (
                                        <div key={addressIndex}>
                                            <p className="text-gray-600">
                                                {address.logradouro || address.endereco}
                                                {address.numero && `, ${address.numero}`}
                                            </p>
                                            <p className="text-gray-600">
                                                {address.bairro} - {address.city} - {address.area}
                                            </p>
                                            <p className="text-gray-600">
                                                CEP: {address['cep ou zipcode'] || '-'}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className={'flex items-center justify-start'}>
                                    <p className="text-sm font-medium text-gray-700 pr-2">Endereços:</p>
                                    <div>
                                        <p className="text-gray-600">-</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    );
}