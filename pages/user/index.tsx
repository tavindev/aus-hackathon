import React from 'react';
import Head from 'next/head';
import useSWR from 'swr';
import moment from 'moment';
import Image from 'next/image';
import { UserProfile } from 'pages/api/user';
import { fetchProfile } from 'utils/fetchProfile';
import { Loader } from 'components/Loader';
import { ProfilePicture } from 'components/UserPage/ProfilePicture';
import Calendar from 'react-calendar';

import 'react-calendar/dist/Calendar.css';
import { ListedEvents } from 'components/UserPage/ListedEvents';
import { AnimateSharedLayout } from 'framer-motion';
import { EventsResposne } from 'pages/api/user/events';
import { MedicationList } from 'components/UserPage/MedicationList';
import { Medicines } from 'pages/api/user/medicines';
import { fetchMedicines } from 'utils/fetchMedicines';

const fetchEvents = async () => {
  const response = await fetch('/api/user/events');
  return await response.json();
};

const User: React.FC = () => {
  const { data: profile } = useSWR<UserProfile>('/api/user', fetchProfile);

  const { data: events } = useSWR<EventsResposne>(
    '/api/user/events',
    fetchEvents
  );

  const { data: medicines } = useSWR<Medicines>(
    '/api/user/medicines',
    fetchMedicines
  );

  if (!profile || !events || !medicines) return <Loader />;

  return (
    <>
      <Head>
        <title>AUS - Área do Usuário</title>
      </Head>
      <div className="flex flex-col p-10 min-h-full w-full overflow-hidden overflow-y-auto">
        <div className="h-auto">
          <h1 className="text-2xl">Área do Usuário</h1>
        </div>
        <div className="flex gap-4 mt-12 h-full w-full">
          <div className="w-full 2xl:w-1/2">
            <p>
              Seja bem-vindo(a),{' '}
              <span className="font-bold">{profile.name.toUpperCase()}</span>
            </p>
            <div className="profile-card flex p-4 mt-10 rounded bg-white shadow w-full">
              <div>
                <ProfilePicture />
              </div>
              <div className="flex flex-grow justify-between items-center pr-8">
                <div className="ml-4 p-4 text-sm">
                  <div>
                    <p className="font-bold">Nome: {profile.name}</p>
                  </div>
                  <div>
                    <p>Idade: {profile.age}</p>
                  </div>
                  <div className="mt-4">
                    <div>
                      <p className="font-bold">Sexo: {profile.sex}</p>
                    </div>
                    <div>
                      <p>
                        Nascimento:{' '}
                        {moment(profile.birthDate).format('D MMM, YYYY')}
                      </p>
                    </div>
                    <div className="mt-4">
                      <p className="font-bold">Endereço: {profile.address}</p>
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
        <div className="grid grid-rows-2 grid-cols-2 2xl:grid-rows-1 gap-2 mt-8 h-auto">
          <div className="calendar row-span-1 col-span-2 2xl:col-span-1 w-full h-full shadow rounded max-h-96">
            <div className="flex bg-white h-full min-h-full max-h-full">
              <Calendar locale="pt-BR" />
              <div className="flex-grow py-4 h-full min-h-full max-h-full overflow-hidden overflow-y-auto">
                <AnimateSharedLayout>
                  {events.events.map(({ name, description, date }, i) => {
                    return (
                      <ListedEvents
                        key={i}
                        name={name}
                        description={description}
                        date={date}
                        i={i}
                      />
                    );
                  })}
                </AnimateSharedLayout>
              </div>
            </div>
          </div>
          <div className="notifications row-span-1 col-span-2 2xl:col-span-1 flex flex-col p-8 w-full max-h-96 shadow rounded bg-white">
            <h3 className="text-lg">Notificações</h3>
            <div className="flex flex-grow flex-col justify-between items-center w-full">
              <div className="relative h-56 w-full">
                <Image src="/undraw_void.svg" layout="fill" />
              </div>
              <p className="mt-4">Tudo quieto por aqui...</p>
            </div>
          </div>
        </div>
        <div className="flex h-96 mt-4">
          <div className="bg-white rounded shadow w-1/2 2xl:w-1/3 h-full overflow-hidden overflow-y-auto">
            <MedicationList medicines={medicines} />
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
