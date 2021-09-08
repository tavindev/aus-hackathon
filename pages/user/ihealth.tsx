import React from 'react';
import Head from 'next/head';
import { WeightChart } from 'components/UserPage/WeightChart';
import { GridItem } from 'components/UserPage/GridItem';

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
        <div className="grid-container mt-12 h-screen">
          <div className="grid grid-rows-16 grid-cols-4 2xl:grid-cols-6 gap-4 w-full min-h-full pb-6">
            <GridItem height={2}>
              <div className="flex flex-col h-full w-full">
                <div className="pl-4 pt-4 h-10 overflow-hidden">
                  <h2 className="text-xl">Peso</h2>
                </div>
                <div className="chart-container flex flex-grow justify-center mt-4 bg-red-600 overflow-hidden">
                  Peso
                </div>
              </div>
            </GridItem>
            <GridItem height={2} />
            <GridItem height={2} />
            <GridItem height={2} />
            <GridItem height={2} width={2} />
            <GridItem height={4} width={4} />
            <GridItem height={2} width={2} />
            <GridItem height={2} width={2} />
          </div>
        </div>
      </div>
    </>
  );
};

export default IHealth;
