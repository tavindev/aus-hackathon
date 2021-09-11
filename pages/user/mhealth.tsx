import React from "react";
import Head from "next/head";
import Image from "next/image";

const MHealth: React.FC = () => {
    return (
        <>
            <Head>
                <title>AUS - Saúde Mental</title>
            </Head>
            <div className="flex flex-col px-10 py-10 min-h-full">
                <div className="h-auto">
                    <h1 className="text-2xl">Saúde Mental</h1>
                </div>
                <div className="flex flex-grow rounded-xl shadow bg-white mt-12 p-4">
                    <div className="relative w-48 h-36">
                        <Image src="/brain_aus.png" layout="fill" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default MHealth;
