import React from 'react';
import Head from 'next/head';

const MHealth: React.FC = () => {
  return (
    <>
      <Head>
        <title>AUS - Saúde Mental</title>
      </Head>
      <div className="flex flex-col px-10 pt-10 min-h-full">
        <div className="h-auto">
          <h1 className="text-2xl">Saúde Mental</h1>
        </div>
      </div>
    </>
  );
};

export default MHealth;
