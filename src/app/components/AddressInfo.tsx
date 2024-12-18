import React from "react";
import { MapPin } from 'lucide-react';
import {ISnapAddress} from "../types/ISnapAddress";
import {Card} from "@/app/components/Card";

interface AddressInfoProps {
  addresses?: ISnapAddress[];
}

export function AddressInfo({ addresses }: AddressInfoProps) {
    return (
    <Card title="Endereços" icon={(<MapPin className="w-5 h-5" />)}>
      <div className="grid gap-4">
        {addresses && addresses.map((address, index) => (
          <div key={index} className=" p-4 rounded-md">
            <div className="grid gap-2">
              <div>
                <p className="font-medium">
                  {address.logradouro}
                  {address.complemento && `, ${address.complemento}`}
                </p>
                {address.complemento && (
                  <p className="text-gray-600">{address.complemento}</p>
                )}
              </div>
              <p className="text-gray-600">
                {address.bairro} - {address.city} - {address.area}
              </p>
              {address['area code'] && (
                <p className="text-gray-600">CEP: {address['area code']}</p>
              )}
              {address['telefone relacionado'] && (
                <p className="text-gray-600">
                  Telefone: {address['telefone relacionado']}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}