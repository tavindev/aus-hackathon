import React from 'react';
import Head from 'next/head';
import { GridItem } from 'components/UserPage/GridItem';
import { AUSChart } from 'components/UserPage/AUSChart';
import { MedicationList } from 'components/UserPage/MedicationList';
import { Nutrition } from 'components/UserPage/Nutrition';
import { UserMetrics } from 'pages/api/user/metrics';
import { PreventiveMedicine } from 'components/UserPage/PreventiveMedicine';
import useSWR from 'swr';
import { motion } from 'framer-motion';
import { Loader } from 'components/Loader';
import { UserProfile } from 'pages/api/user';
import { GiMedicines } from 'react-icons/gi';
import { Medicines } from 'pages/api/user/medicines';
import { ProfilePicture } from 'components/UserPage/ProfilePicture';
import { fetchProfile } from 'utils/fetchProfile';
import { fetchMedicines } from 'utils/fetchMedicines';

const fetchMetrics = async () => {
  const response = await fetch('/api/user/metrics');

  return await response.json();
};

const IHealth: React.FC = () => {
  const { data: metrics } = useSWR<UserMetrics>(
    '/api/user/metrics',
    fetchMetrics
  );

  const { data: profile } = useSWR<UserProfile>('/api/user', fetchProfile);

  const { data: medicines } = useSWR<Medicines>(
    '/api/user/medicines',
    fetchMedicines
  );

  if (!metrics || !profile || !medicines) return <Loader />;

  return (
    <>
      <Head>
        <title>AUS - Saúde Interativa</title>
      </Head>
      <div className="flex flex-col p-10 min-h-full">
        <div className="h-auto">
          <h1 className="text-2xl">Saúde Interativa</h1>
        </div>
        <div className="grid-container mt-12 h-full">
          <div className="grid grid-rows-6 grid-cols-4 2xl:grid-rows-6 2xl:grid-cols-6 gap-4 w-full h-full pb-6">
            <GridItem className="row-span-2 col-span-1">
              <div className="flex flex-col h-full w-full">
                <div className="pl-4 pt-4 h-12 overflow-hidden">
                  <h2 className="text-xl font-bold">Peso</h2>
                </div>
                <div className="chart-container flex flex-grow justify-center mt-4 relative overflow-hidden">
                  <AUSChart
                    dataset={metrics.weight}
                    color="#fa5f5f"
                    measurement="kg"
                  />
                </div>
              </div>
            </GridItem>
            <GridItem className="row-span-2 col-span-1">
              <div className="flex flex-col h-full w-full">
                <div className="pl-4 pt-4 h-12 overflow-hidden">
                  <h2 className="text-xl font-bold">BPM</h2>
                </div>
                <div className="chart-container flex flex-grow justify-center mt-4 relative overflow-hidden">
                  <AUSChart
                    dataset={metrics.bpm}
                    color="#a073f5"
                    measurement="bpm"
                    noTension
                  />
                </div>
              </div>
            </GridItem>
            <GridItem className="row-span-2 col-span-1">
              <div className="flex flex-col h-full w-full">
                <div className="pl-4 pt-4 h-12 overflow-hidden">
                  <h2 className="text-xl font-bold">Exercícios</h2>
                </div>
                <div className="chart-container flex flex-grow justify-center mt-4 relative overflow-hidden">
                  <AUSChart
                    dataset={metrics.exercices}
                    color="#58aad6"
                    measurement="hora(s)"
                    offset={50}
                  />
                </div>
              </div>
            </GridItem>
            <GridItem className="row-span-2 col-span-1">
              <div className="flex flex-col h-full w-full">
                <div className="pl-4 pt-4 h-12 overflow-hidden">
                  <h2 className="text-xl font-bold">Sono</h2>
                </div>
                <div className="chart-container flex flex-grow justify-center mt-4 relative overflow-hidden">
                  <AUSChart
                    dataset={metrics.sleep}
                    color="#78e072"
                    measurement="hora(s)"
                    offset={100}
                  />
                </div>
              </div>
            </GridItem>
            <GridItem className="row-span-2 col-span-4 2xl:col-span-2">
              <div className="flex justify-between p-8 box-border h-80 w-full">
                <div className="flex flex-col flex-wrap">
                  <div className="mb-4 text-sm">
                    <p className="text-sm font-bold">Nome: {profile.name}</p>
                    <p className="text-sm">Idade: {profile.age} anos</p>
                    <p className="text-sm">Sexo: {profile.sex}</p>
                  </div>
                  <div className="mb-4 text-sm">
                    <p className=" font-bold">
                      Altura Atual: {profile.age.toString().replace('.', ',')}m
                    </p>
                    <p>
                      Peso Atual:{' '}
                      {metrics.weight[metrics.weight.length - 1].value}kg
                    </p>
                    <p>
                      Gordura Corporal Atual:{' '}
                      {(profile.currentBodyFat * 100)
                        .toString()
                        .replace('.', ',')}
                      %
                    </p>
                  </div>
                  <div className="text-sm">
                    <p>Tipo Sanguíneo: {profile.bloodType}</p>
                  </div>
                </div>
                <div>
                  <ProfilePicture />
                </div>
              </div>
            </GridItem>
            <GridItem className="hidden 2xl:block col-span-4 row-span-4">
              <PreventiveMedicine />
            </GridItem>
            <GridItem className="row-span-2 col-span-2">
              <MedicationList medicines={medicines} />
            </GridItem>
            <GridItem className="row-span-2 col-span-2">
              <Nutrition diet={metrics.diet} />
            </GridItem>
          </div>
        </div>
        <div className="block 2xl:hidden bg-white rounded-xl w-full shadow">
          <PreventiveMedicine />
        </div>
      </div>
    </>
  );
};

export default IHealth;
