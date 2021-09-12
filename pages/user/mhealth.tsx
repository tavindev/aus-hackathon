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
                        <div className="text-sm font-bold mt-4">
                            Fonte: Secretaria de Saúde do Paraná
                        </div>
                        <div className="mt-12 text-lg">
                            Por que eu deveria me preocupar?
                        </div>
                        <YoutubeEmbed embedId="C-UXvNq7-PI" />
                        <div className="text-sm font-bold mt-4">
                            Fonte: Hospital Albert Einstein
                        </div>
                        <div className="mt-8 text-lg">Como obter ajuda?</div>
                        <div className="mt-4">
                            A atenção em saúde mental é oferecida no Sistema
                            Único de Saúde (SUS), através de financiamento
                            tripartite e de ações municipalizadas e organizadas
                            por níveis de complexidade. A Rede de Cuidados em
                            Saúde Mental, Crack, Álcool e outras Drogas foi
                            pactuada em julho de 2011, como parte das discussões
                            de implantação do Decreto nº 7508, de 28 de junho de
                            2011, e prevê, a partir da Política Nacional de
                            Saúde Mental, os Centros de Atenção Psicossocial
                            (CAPs), os Serviços Residenciais Terapêuticos, os
                            Centros de Convivência e Cultura, as Unidades de
                            Acolhimento e os leitos de atenção integral em
                            Hospitais Gerais.
                        </div>
                        <div className="mt-4">
                            Além de atender pessoas com transtornos mentais,
                            estes espaços acolhem usuários de álcool, crack e
                            outras drogas e estão espalhados pelo país,
                            modificando a estrutura da assistência à saúde
                            mental. E vêm substituindo progressivamente o modelo
                            hospitalocêntrico e manicomial, de características
                            excludentes, opressivas e reducionistas (leia mais
                            no artigo Desafios da reforma psiquiátrica no
                            Brasil, de Benilton Bezarra Jr.), na tentativa de
                            construir um sistema de assistência orientado pelos
                            princípios fundamentais do SUS (universalidade,
                            equidade e integralidade).
                        </div>
                        <div className="text-sm font-bold mt-4">
                            Fonte: Fiocruz
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MHealth;
