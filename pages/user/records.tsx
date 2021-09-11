import React from "react";
import Head from "next/head";
import { GridItem } from "components/UserPage/GridItem";
import { ExamCard } from "components/UserPage/ExamCard";
import useSWR from "swr";
import { ExamsResponse } from "pages/api/user/exams";
import { Loader } from "components/Loader";
import { fetchExams } from "utils/fetchExams";
import { VacineCard } from "components/UserPage/VacineCard";
import { VaccinesResponse } from "pages/api/user/vaccines";
import { BloodDonationResponse } from "pages/api/user/blood-donation";
import { BloodDonationCard } from "components/UserPage/BloodDonationCard";
import { MedicalRecord } from "components/UserPage/MedicalRecord";

const fetchVaccines = async () => {
    const response = await fetch("/api/user/vaccines");
    return await response.json();
};

const fetchBloodDonations = async () => {
    const response = await fetch("/api/user/blood-donation");
    return await response.json();
};

const Records: React.FC = () => {
    const { data: exams } = useSWR<ExamsResponse>(
        "/api/user/exams",
        fetchExams
    );

    const { data: vaccines } = useSWR<VaccinesResponse>(
        "/api/user/vaccines",
        fetchVaccines
    );

    const { data: bloodDonation } = useSWR<BloodDonationResponse>(
        "/api/user/blood-donation",
        fetchBloodDonations
    );

    if (!exams || !vaccines || !bloodDonation) return <Loader />;

    return (
        <>
            <Head>
                <title>AUS - Histórico Clínico</title>
            </Head>
            <div className="flex flex-col px-10 py-10 min-h-full">
                <div className="h-auto">
                    <h1 className="text-2xl">Histórico Clínico</h1>
                </div>
                <div className="grid-container mt-12 h-full">
                    <div className="grid grid-cols-2 grid-rows-3 2xl:grid-rows-2 2xl:grid-cols-4 gap-4 w-full h-full pb-6">
                        <GridItem>
                            <div className="flex flex-col h-full w-full">
                                <div className="pl-4 pt-4 h-12 overflow-hidden">
                                    <h2 className="text-xl font-bold">
                                        Seus Exames
                                    </h2>
                                </div>
                                <div className="flex-grow max-h-full mt-4 pt-2 px-6">
                                    {exams.exams.map(
                                        ({ label, date, status }, i) => {
                                            return (
                                                <ExamCard
                                                    key={i}
                                                    i={i}
                                                    label={label}
                                                    date={date}
                                                    status={status}
                                                />
                                            );
                                        }
                                    )}
                                </div>
                                <div className="flex justify-center items-center pb-4 h-20">
                                    <div className="flex justify-center items-center text-white font-bold bg-blue-500 rounded shadow h-full w-52 cursor-pointer">
                                        Histórico Completo
                                    </div>
                                </div>
                            </div>
                        </GridItem>
                        <GridItem>
                            <div className="flex flex-col h-full w-full">
                                <div className="pl-4 pt-4 h-12 overflow-hidden">
                                    <h2 className="text-xl font-bold">
                                        Suas Vacinas
                                    </h2>
                                </div>
                                <div className="flex-grow mt-4 pt-2 px-6">
                                    {vaccines.vaccines.map(({ name }, i) => {
                                        return <VacineCard name={name} i={i} />;
                                    })}
                                </div>
                                <div className="flex justify-center items-center pb-4 h-20">
                                    <div className="flex justify-center items-center text-white font-bold bg-blue-500 rounded shadow h-full w-52 cursor-pointer">
                                        Histórico Completo
                                    </div>
                                </div>
                            </div>
                        </GridItem>
                        <GridItem>
                            <div className="flex flex-col h-full w-full text-black">
                                <div className="pl-4 pt-4 h-12 overflow-hidden">
                                    <h2 className="text-xl font-bold">
                                        Doação de Sangue
                                    </h2>
                                </div>
                                <div className="flex-grow mt-4 pt-2 px-6">
                                    {bloodDonation.donations.map(
                                        ({ place, date }, i) => {
                                            return (
                                                <BloodDonationCard
                                                    place={place}
                                                    date={date}
                                                    i={i}
                                                />
                                            );
                                        }
                                    )}
                                </div>
                                <div className="flex justify-center items-center pb-4 h-20">
                                    <div className="flex justify-center items-center text-white font-bold bg-blue-500 rounded shadow h-full w-52 cursor-pointer">
                                        Agendar doação
                                    </div>
                                </div>
                            </div>
                        </GridItem>
                        <GridItem>
                            <div className="flex flex-col h-full w-full text-black">
                                <div className="pl-4 pt-4 h-12 overflow-hidden">
                                    <h2 className="text-xl font-bold">
                                        Atendimentos
                                    </h2>
                                </div>
                                <div className="flex flex-grow justify-center items-center max-h-full mt-4 pt-2 px-6 font-bold text-lg">
                                    <div>
                                        Você não possui nenhum atendimento
                                    </div>
                                </div>
                                <div className="flex justify-center items-center pb-4 h-20">
                                    <div className="flex justify-center items-center text-white font-bold bg-blue-500 rounded shadow h-full w-52 cursor-pointer">
                                        Agendar atendimento
                                    </div>
                                </div>
                            </div>
                        </GridItem>
                        <GridItem>
                            <div className="flex flex-col h-full w-full text-black">
                                <div className="pl-4 pt-4 h-12 overflow-hidden">
                                    <h2 className="text-xl font-bold">
                                        Transplantes
                                    </h2>
                                </div>
                                <div className="flex flex-grow justify-center items-center max-h-full mt-4 pt-2 px-6 font-bold text-lg">
                                    <div>
                                        Você não possui/fez nenhum transplante
                                    </div>
                                </div>
                                <div className="flex justify-center items-center pb-4 h-20">
                                    <div className="flex justify-center items-center text-white font-bold bg-blue-500 rounded shadow h-full w-52 cursor-pointer">
                                        Seja um doador
                                    </div>
                                </div>
                            </div>
                        </GridItem>
                        <GridItem>
                            <div className="flex flex-col h-full w-full">
                                <div className="pl-4 pt-4 h-12 overflow-hidden">
                                    <h2 className="text-xl font-bold">
                                        Medicamentos
                                    </h2>
                                </div>
                                <div className="flex-grow max-h-full mt-4 pt-2 px-6">
                                    <div className="flex justify-between items-center mb-4 p-2 bg-gray-50">
                                        <h3 className="text-md font-bold">
                                            Insulina
                                        </h3>
                                    </div>
                                </div>
                                <div className="flex justify-center items-center pb-4 h-20">
                                    <div className="flex justify-center items-center text-white font-bold bg-blue-500 rounded shadow h-full w-52 cursor-pointer">
                                        Histórico Completo
                                    </div>
                                </div>
                            </div>
                        </GridItem>
                        <GridItem className="hidden 2xl:block row-span-2 col-span-2">
                            <MedicalRecord />
                        </GridItem>
                    </div>
                </div>
                <div className="block 2xl:hidden rounded-xl shadow bg-white">
                    <MedicalRecord />
                </div>
            </div>
        </>
    );
};

export default Records;
