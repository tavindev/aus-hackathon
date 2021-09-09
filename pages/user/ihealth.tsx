import React from 'react';
import Head from 'next/head';
import { GridItem } from 'components/UserPage/GridItem';
import { AUSChart } from 'components/UserPage/AUSChart';
import { MedicationList } from 'components/UserPage/MedicationList';
import { Nutrition } from 'components/UserPage/Nutrition';

const IHealth: React.FC = () => {
  return (
    <>
      <Head>
        <title>AUS - Saúde Interativa</title>
      </Head>
      <div className="flex flex-col px-10 pt-10 min-h-full">
        <div className="h-auto">
          <h1 className="text-2xl">Saúde Interativa</h1>
        </div>
        <div className="grid-container mt-12 h-full">
          <div className="grid grid-rows-2 grid-cols-4 2xl:grid-rows-6 2xl:grid-cols-6 gap-4 w-full h-full pb-6">
            <GridItem className="row-span-2 col-span-1">
              <div className="flex flex-col h-full w-full">
                <div className="pl-4 pt-4 h-12 overflow-hidden">
                  <h2 className="text-xl font-bold">Peso</h2>
                </div>
                <div className="chart-container flex flex-grow justify-center mt-4 relative overflow-hidden">
                  <AUSChart
                    numberOfSets={10}
                    color="#fa5f5f"
                    dataRange={[60, 69]}
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
                    numberOfSets={20}
                    color="#a073f5"
                    dataRange={[100, 180]}
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
                    numberOfSets={10}
                    color="#58aad6"
                    dataRange={[1, 4]}
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
                    numberOfSets={10}
                    color="#78e072"
                    dataRange={[6, 9]}
                    measurement="hours"
                    offset={100}
                  />
                </div>
              </div>
            </GridItem>
            <GridItem className="row-span-2 col-span-4 2xl:col-span-2">
              <div className="flex justify-between p-8 box-border h-80 w-full">
                <div className="flex flex-col flex-wrap">
                  <div className="mb-4">
                    <p className="text-sm font-bold">Nome: Fulano da Silva</p>
                    <p className="text-sm">Idade: 17 anos</p>
                    <p className="text-sm">Sexo: Masculino</p>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm font-bold">Altura Atual: 1,72m</p>
                    <p className="text-sm">Peso Atual: 61.80kg</p>
                    <p className="text-sm">Gordura Corporal Atual: 13,4%</p>
                  </div>
                  <div>
                    <p className="text-sm">
                      Endereço: Rua Senador Vergueiro, Flamengo
                    </p>
                    <p className="text-sm">CEP: 22230-001</p>
                  </div>
                </div>
                <div>
                  <div className="bg-red-600 rounded-full w-28 aspect-w-1 aspect-h-1"></div>
                </div>
              </div>
            </GridItem>
            <GridItem className="col-span-4 row-span-4">
              {/** h4 w4 */}
              <div className="flex flex-col h-full w-full">
                <div className="pl-4 pt-4 h-12 overflow-hidden">
                  <h2 className="text-xl font-bold">Medicina Preventiva</h2>
                </div>
              </div>
            </GridItem>
            <GridItem className="row-span-2 col-span-2">
              <MedicationList />
            </GridItem>
            <GridItem className="row-span-2 col-span-2">
              <Nutrition />
            </GridItem>
          </div>
        </div>
      </div>
    </>
  );
};

export default IHealth;
