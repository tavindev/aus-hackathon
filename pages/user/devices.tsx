import React from 'react';
import Head from 'next/head';
import { DeviceCard } from 'components/UserPage/DeviceCard';
import { BsWatch } from 'react-icons/bs';
import { SiFitbit } from 'react-icons/si';
import { FaBrain } from 'react-icons/fa';
import { AiOutlinePlus } from 'react-icons/ai';

const Devices: React.FC = () => {
  return (
    <>
      <Head>
        <title>AUS - Dispositivos</title>
      </Head>
      <div className="flex flex-col px-10 pt-10 min-h-full">
        <div className="h-auto">
          <h1 className="text-2xl">Dispositivos</h1>
        </div>
        <div className="flex gap-4 mt-12">
          <DeviceCard label="SmartWatch" Icon={BsWatch} />
          <DeviceCard label="FitBit" Icon={SiFitbit} />
          <DeviceCard label="NeuroLink" Icon={FaBrain} />
          <div className="flex flex-col w-56 h-56 bg-white rounded-lg border-4 border-blue-700">
            <div className="flex justify-center items-center w-full h-full">
              <AiOutlinePlus color="rgba(29, 78, 216)" size={96} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Devices;
