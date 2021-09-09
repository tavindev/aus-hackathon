import React from 'react';
import Head from 'next/head';
import { GridItem } from 'components/UserPage/GridItem';
import { ExamCard } from 'components/UserPage/ExamCard';

// import { Container } from './styles';

const Records: React.FC = () => {
  return (
    <>
      <Head>
        <title>AUS - Histórico Clínico</title>
      </Head>
      <div className="flex flex-col px-10 pt-10 min-h-full">
        <div className="h-auto">
          <h1 className="text-2xl">Histórico Clínico</h1>
        </div>
        <div className="grid-container mt-12 h-full">
          <div className="grid grid-rows-4 grid-cols-5 gap-4 w-full min-h-full pb-6">
            <GridItem>
              <div className="flex flex-col h-full w-full">
                <div className="pl-4 pt-4 h-12 overflow-hidden">
                  <h2 className="text-xl font-bold">Seus Exames</h2>
                </div>
                <div className="max-h-full mt-4 pt-2 px-6">
                  <ExamCard label="Exame de Sangue" date="20 Set 2045" />
                  <ExamCard label="Exame de Sangue" date="20 Set 2045" />
                  <ExamCard label="Exame de Sangue" date="20 Set 2045" />
                  <ExamCard label="Exame de Sangue" date="20 Set 2045" />
                  <ExamCard label="Exame de Sangue" date="20 Set 2045" />
                </div>
              </div>
            </GridItem>
            <GridItem>
              <div className="flex flex-col h-full w-full">
                <div className="pl-4 pt-4 h-12 overflow-hidden">
                  <h2 className="text-xl font-bold">Vacinas Covid 52</h2>
                </div>
                <div className="flex gap-3 mt-4 pt-2 px-6">
                  <div className="vaccine-card flex flex-col items-center rounded w-1/3 p-1 bg-blue-200">
                    <h3 className="font-semibold mb-2">1ª Dose</h3>
                    <p className="text-sm">Aplicada</p>
                  </div>
                  <div className="vaccine-card flex flex-col items-center rounded w-1/3 p-1 bg-red-200">
                    <h3 className="font-semibold mb-2">2ª Dose</h3>
                    <p className="text-sm">Pendente</p>
                  </div>
                  <div className="vaccine-card flex flex-col items-center rounded w-1/3 p-1 bg-gray-200">
                    <h3 className="font-semibold mb-2">3ª Dose</h3>
                    <p className="text-sm">Indisponível</p>
                  </div>
                </div>
              </div>
            </GridItem>
            <GridItem></GridItem>
            <GridItem width={2} height={4}></GridItem>
            <GridItem></GridItem>
            <GridItem></GridItem>
            <GridItem></GridItem>
          </div>
        </div>
      </div>
    </>
  );
};

export default Records;
