import {Building2} from 'lucide-react';
import {ICompany} from "@/app/types/ICompany";
import {Card} from "@/app/components/Card";

interface CompanyInfoProps {
    companies?: ICompany[];
}

export function CompanyInfo({companies}: CompanyInfoProps) {
    return (
        <Card title="Vínculos Empresariais" icon={<Building2 className="w-5 h-5"/>}>
            <div className="grid gap-4 grid-cols-2">
                {companies && companies.map((company, index) => (
                    <div key={index} className=" p-4 rounded-md">
                        <h3 className="font-medium text-lg mb-2">{company['razao social']}</h3>
                        <div className="grid gap-2">
                            <p className="text-gray-600">CNPJ: {company.cnpj}</p>
                            <p className="text-gray-600">Vínculo: {company.vinculo}</p>
                            {company.renda && (
                                <p className="text-gray-600">Renda: R$ {company.renda}</p>
                            )}
                            {company.admissao && (
                                <p className="text-gray-600">Data de Admissão: {company.admissao}</p>
                            )}

                            {company.endereco.map((address, addressIndex) => (
                                <div key={addressIndex} className="mt-2">
                                    <p className="text-sm font-medium text-gray-700">Endereço:</p>
                                    <p className="text-gray-600">
                                        {address.endereco}
                                        {address.numero && `, ${address.numero}`}
                                    </p>
                                    <p className="text-gray-600">
                                        {address.bairro} - {address.city} - {address.area}
                                    </p>
                                    {address['area code'] && (
                                        <p className="text-gray-600">CEP: {address['area code']}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    );
}