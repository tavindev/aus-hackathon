import React from "react";
import Head from "next/head";
import useSWR from "swr";
import moment from "moment";
import Image from "next/image";
import { UserProfile } from "pages/api/user";
import { fetchProfile } from "utils/fetchProfile";
import { Loader } from "components/Loader";
import { ProfilePicture } from "components/UserPage/ProfilePicture";
import Calendar from "react-calendar";

import "react-calendar/dist/Calendar.css";
import { ListedEvents } from "components/UserPage/ListedEvents";
import { AnimateSharedLayout } from "framer-motion";
import { EventsResposne } from "pages/api/user/events";
import { MedicationList } from "components/UserPage/MedicationList";
import { Medicines } from "pages/api/user/medicines";
import { fetchMedicines } from "utils/fetchMedicines";
import { ExamsResponse } from "pages/api/user/exams";
import { fetchExams } from "utils/fetchExams";
import { MedicalRecord } from "components/UserPage/MedicalRecord";
import { ServiceCard } from "components/UserPage/ServiceCard";

import { FaHospitalAlt, FaHospital, FaBaby } from "react-icons/fa";
import { BiHealth } from "react-icons/bi";

const fetchEvents = async () => {
    const response = await fetch("/api/user/events");
    return await response.json();
};

const Dashboard: React.FC = () => {
    const { data: profile } = useSWR<UserProfile>("/api/user", fetchProfile);

    const { data: exams } = useSWR<ExamsResponse>(
        "/api/user/exams",
        fetchExams
    );

    const { data: events } = useSWR<EventsResposne>(
        "/api/user/events",
        fetchEvents
    );

    const { data: medicines } = useSWR<Medicines>(
        "/api/user/medicines",
        fetchMedicines
    );

    if (!profile || !events || !medicines) return <Loader />;

    return (
        <>
            <Head>
                <title>AUS - Área do Usuário</title>
            </Head>
            <div className="flex flex-grow flex-col p-10 overflow-hidden overflow-y-auto">
                <div className="h-auto">
                    <h1 className="text-2xl">Área do Usuário</h1>
                </div>
                <div className="flex gap-4 mt-12 h-full w-full">
                    <div className="w-full 2xl:w-1/2">
                        <p>
                            Seja bem-vindo(a),{" "}
                            <span className="font-bold">
                                {profile.name.toUpperCase()}
                            </span>
                        </p>
                        <div className="profile-card flex p-4 mt-10 rounded bg-white shadow w-full">
                            <div>
                                <ProfilePicture />
                            </div>
                            <div className="flex flex-grow justify-between items-center">
                                <div className="ml-4 p-4 text-sm">
                                    <div>
                                        <p className="font-bold">
                                            Nome: {profile.name}
                                        </p>
                                    </div>
                                    <div>
                                        <p>Idade: {profile.age}</p>
                                    </div>
                                    <div className="mt-4">
                                        <div>
                                            <p className="font-bold">
                                                Sexo: {profile.sex}
                                            </p>
                                        </div>
                                        <div>
                                            <p>
                                                Nascimento:{" "}
                                                {moment(
                                                    profile.birthDate
                                                ).format("D MMM, YYYY")}
                                            </p>
                                        </div>
                                        <div className="mt-4">
                                            <p className="font-bold">
                                                Endereço: {profile.address}
                                            </p>
                                        </div>
                                        <div>
                                            <p>CEP: {profile.cep}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="emergency-button flex justify-center items-center rounded shadow bg-red-800 w-52 h-24 uppercase font-extrabold text-lg text-white mt-4 cursor-pointer">
                                    <p>Emergência</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-rows-3 grid-cols-4 gap-2 mt-8 h-auto">
                    <div className="medical-record row-span-2 col-span-2 bg-white rounded shadow">
                        <MedicalRecord />
                    </div>
                    <div className="medications row-span-1 col-span-2 bg-white rounded shadow h-full overflow-hidden overflow-y-auto">
                        <MedicationList medicines={medicines} />
                    </div>
                    <div className="services flex flex-col row-span-1 col-span-2 bg-white rounded shadow">
                        <div className="pl-4 pt-4 h-12 overflow-hidden">
                            <h2 className="text-xl font-bold">Serviços</h2>
                        </div>
                        <div className="flex flex-grow items-center">
                            <div className="flex overflow-hidden overflow-x-auto">
                                <ServiceCard
                                    name="Hospital"
                                    Icon={FaHospitalAlt}
                                />
                                <ServiceCard
                                    name="Posto de Saúde"
                                    Icon={FaHospital}
                                />
                                <ServiceCard
                                    name="Emergência"
                                    Icon={BiHealth}
                                />
                                <ServiceCard name="Maternidade" Icon={FaBaby} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
