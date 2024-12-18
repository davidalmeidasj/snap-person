"use client"
import React from "react";
import {PersonalInfo} from "@/app/components/PersonalInfo";
import {ContactInfo} from "@/app/components/ContactInfo";
import {AddressInfo} from "@/app/components/AddressInfo";
import {CompanyInfo} from "@/app/components/CompanyInfo";
import {RelatedPeople} from "@/app/components/RelatedPeople";
import Loader from "@/app/components/Loader";
import {useSnapData} from "@/app/hooks/useSnapData";

export default function Home() {

    const {loading, snap, mainPerson, relatedPeople} = useSnapData();


    return (
        <div className="bg-gray-100">
            <Loader show={loading}>
                <section className="py-10 md:py-16">
                    <div className="container max-w-screen-xl mx-auto px-4">
                        <header className="flex items-center justify-between mb-[40px]">
                            <img src="assets/image/navbar-logo.png" alt="Logo"/>

                            <button
                                className="px-7 py-3 md:px-9 md:py-4 bg-white font-medium md:font-semibold text-gray-700 text-md rounded-md hover:bg-gray-700 hover:text-white transition ease-linear duration-500">
                                Download Relatório
                            </button>
                        </header>

                        <PersonalInfo person={mainPerson}/>

                        <div className="grid md:grid-cols-2 gap-6">
                            <ContactInfo phones={snap?.telefone} emails={snap?.email}/>
                            <AddressInfo addresses={snap?.endereco}/>
                        </div>

                        <CompanyInfo companies={snap?.empresa}/>
                        <RelatedPeople people={relatedPeople}/>
                    </div>

                </section>
            </Loader>
        </div>
    );
}
