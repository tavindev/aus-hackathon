import React from "react";
import Head from "next/head";
import Image from "next/image";
import { YoutubeEmbed } from "components/UserPage/YoutubeEmbed";

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
                <div className="flex flex-grow justify-center rounded-xl shadow bg-white mt-12 p-8">
                    <div className="flex flex-grow flex-col items-center max-w-4xl text-justify">
                        <div className="relative w-48 h-36">
                            <Image src="/brain_aus.png" layout="fill" />
                        </div>
                        <div className="flex flex-col items-center text-2xl mt-8">
                            <h2>Como você está?</h2>
                            <h2>Como está sua saúde mental?</h2>
                        </div>
                        <div className="mt-8">
                            A maior parte das pessoas, quando ouve falar em
                            “Saúde Mental”, pensa em “Doença Mental”. Mas, a
                            saúde mental implica muito mais que a ausência de
                            doenças mentais.
                        </div>
                        <div className="mt-8">
                            Pessoas mentalmente saudáveis compreendem que
                            ninguém é perfeito, que todos possuem limites e que
                            não se pode ser tudo para todos. Elas vivenciam
                            diariamente uma série de emoções como alegria, amor,
                            satisfação, tristeza, raiva e frustração. São
                            capazes de enfrentar os desafios e as mudanças da
                            vida cotidiana com equilíbrio e sabem procurar ajuda
                            quando têm dificuldade em lidar com conflitos,
                            perturbações, traumas ou transições importantes nos
                            diferentes ciclos da vida.
                        </div>
                        <div className="mt-8">
                            A Saúde Mental de uma pessoa está relacionada à
                            forma como ela reage às exigências da vida e ao modo
                            como harmoniza seus desejos, capacidades, ambições,
                            ideias e emoções.
                        </div>
                        <div className="mt-8">
                            Ter saúde mental é:
                            <ul className="mt-4">
                                <li>Estar bem consigo mesmo e com os outros</li>
                                <li>Aceitar as exigências da vida</li>
                                <li>
                                    Saber lidar com as boas emoções e também com
                                    aquelas desagradáveis, mas que fazem parte
                                    da vida
                                </li>
                                <li>
                                    Reconhecer seus limites e buscar ajuda
                                    quando necessário
                                </li>
                            </ul>
                        </div>
                        <YoutubeEmbed embedId="C-UXvNq7-PI" />
                        <div className="mt-8 text-lg">Como obter ajuda?</div>
                        <div className="mt-4">
                            Você pode acessar o nosso doutor virtual e agendar
                            uma visita
                        </div>
                        <div className="text-sm font-bold mt-12">
                            Fonte: Secretaría de Saúde do Paraná
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MHealth;
