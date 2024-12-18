import { Phone as PhoneIcon, Mail } from 'lucide-react';
import {IPhone} from "@/app/types/IPhone";
import {Card} from "@/app/components/Card";

interface ContactInfoProps {
  phones?: IPhone[];
  emails?: Array<{ 'email address': string }>;
}

export function ContactInfo({ phones, emails }: ContactInfoProps) {
  return (
    <Card title="Contatos" icon={<PhoneIcon className="w-5 h-5" />}>
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium mb-2 flex items-center gap-2">
            <PhoneIcon className="w-4 h-4" />
            Telefones
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            {phones && phones.map((phone, index) => (
              <div key={index} className="flex items-center gap-2 bg-gray-50 p-3 rounded-md">
                <div>
                  <p className="font-medium">{phone['phone number']}</p>
                  {phone.operadora && (
                    <p className="text-sm text-gray-600">Operadora: {phone.operadora}</p>
                  )}
                  {phone.whatsapp && (
                    <p className="text-sm text-green-600">
                      WhatsApp: {phone.whatsapp === 'Sim' ? 'Sim' : 'Não'}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-2 flex items-center gap-2">
            <Mail className="w-4 h-4" />
            E-mails
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            {emails && emails.map((email, index) => (
              <div key={index} className="bg-gray-50 p-3 rounded-md">
                <p className="font-medium">{email['email address']}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}