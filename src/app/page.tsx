"use client"
import React, {useEffect, useState} from "react";
import {Snap, SnapItem} from "@/app/types/SnapItem";
import {IPerson} from "@/app/types/Person";
import {PersonalInfo} from "@/app/components/PersonalInfo";
import {ContactInfo} from "@/app/components/ContactInfo";
import {AddressInfo} from "@/app/components/AddressInfo";
import {CompanyInfo} from "@/app/components/CompanyInfo";
import {RelatedPeople} from "@/app/components/RelatedPeople";
import Loader from "@/app/components/Loader";

export default function Home() {

  const [loading, setLoading] = useState<boolean>(true);
  const [snap, setSnap] = useState<SnapItem>();
  const [mainPerson, setMainPerson] = useState<IPerson>();
  const [relatedPeople, setRelatedPeople] = useState<IPerson[]>([]);


  useEffect(() => {
    setLoading(true);
    fetch("/json/snap.json")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Erro ao carregar o JSON");
          }
          return response.json();
        })
        .then((data: Snap) => {
          const {SNAP} = data;
            setSnap(SNAP[0]);
          const main = SNAP[0].pessoa.find((person: IPerson) => person?.bookmark === "true") as IPerson;
          setMainPerson(main);
          const related = SNAP[0].pessoa.filter((person: IPerson) => person?.bookmark !== "true");
          setRelatedPeople(related);
        })
        .catch((error) => {
          console.error("Erro ao carregar os dados:", error);
        })
        .finally(() => {
            setLoading(false);
        });
  }, []);


  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
            <Loader show={loading}>
                <>
                    <header className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-gray-900">Relatório SNAP</h1>
                        <p className="text-gray-600 mt-2">CPF: {mainPerson?.cpf}</p>
                    </header>

                    <PersonalInfo person={mainPerson}/>

                    <div className="grid md:grid-cols-2 gap-6">
                        <ContactInfo phones={snap?.telefone} emails={snap?.email}/>
                        <AddressInfo addresses={snap?.endereco}/>
                    </div>

                    <CompanyInfo companies={snap?.empresa}/>
                    <RelatedPeople people={relatedPeople}/>
                </>
            </Loader>
        </main>
    </div>
  );
}
