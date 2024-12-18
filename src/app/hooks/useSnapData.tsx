import {useEffect, useState} from "react";
import {Snap, SnapItem} from "@/app/types/SnapItem";
import {IPerson} from "@/app/types/Person";

export const useSnapData = () => {
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

    return {loading, snap, mainPerson, relatedPeople};
};
