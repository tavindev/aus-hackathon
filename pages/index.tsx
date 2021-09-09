import { MiniCard } from 'components/MiniCard';
import Head from 'next/head';
import Image from 'next/image';
import { Header } from '../components/Header';

const AUS_WIDTH = 100;
const AUS_HEIGHT = AUS_WIDTH / 2.2;

// 716 x 507

export default function Home() {
  return (
    <>
      <Head>
        <title>AUS</title>
      </Head>
      <main className="flex flex-col items-center w-screen min-h-screen overflow-x-hidden">
        <section className="hero flex justify-center w-full">
          <div className="container flex flex-col">
            <Header />
            <div className="flex h-full">
              <div className="flex flex-grow justify-between items-center   overflow-hidden">
                <div>
                  <div className="aus-wrapper mb-4">
                    <Image
                      src="/aus.svg"
                      width={AUS_WIDTH}
                      height={AUS_HEIGHT}
                    />
                  </div>
                  <p className="flex-wrap text-xl">
                    O novo Assistente Universal de Saúde integrado com o SUS
                  </p>
                </div>
                <div className="flex justify-end relative w-1/2 h-1/2 aspect-w-16 aspect-h-9">
                  <Image src="/medicine.svg" layout="fill" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container cards-section w-full box-border">
          <div className="grid grid-rows-3 grid-cols-2 2xl:grid-rows-2 2xl:grid-cols-3 gap-5 justify-center items-center w-full h-full box-border py-10 2xl:py-5">
            <MiniCard
              title="Doutor Virtual"
              description="Está se sentindo mal? Faça uma breve consulta com o nosso doutor virtual"
            />
            <MiniCard
              title="Histórico Clínico"
              description="Tenha acesso a exames antigos e a todo o seu histórico médico"
              img="/data_icon.svg"
            />
            <MiniCard
              title="Integração com dispositivos inteligentes"
              description="Conecte seus dispositivos inteligentes e obtenha todas as informações disponíveis em tempo real"
              img="/smart_devices.svg"
            />
            <MiniCard
              title="Saúde Mental"
              description="Acione nossa rede de profissionais para buscar apoio"
              img="/mental_health.svg"
            />
            <MiniCard
              title="Medicina Preventiva"
              description="Informe-se sobre hábitos para previnir doenças às quais você seja predisposto"
              img="/preventive_medicine.svg"
            />
            <MiniCard
              title="Saúde Interativa"
              description="Atualize em tempo real e monitore seus dados de saúde"
              img="/interactive_medicine.svg"
            />
          </div>
        </section>
        <section className="about flex justify-center items-center w-screen py-6">
          <div className="container flex justify-center items-center h-full">
            <div className="relative h-full w-full mr-24">
              <Image src="/data_report.svg" layout="fill" />
            </div>
            <div className="flex flex-col">
              <h2 className="text-2xl">O que é o AUS?</h2>
              <p className="text-start mt-11 flex-wrap">
                O Assistente Universal de Saúde é um aplicativo do governo que
                integrará os dados sanitários de todos os habitantes de
                Technópolis para dinamizar o acompanhamento, o tratamento e a
                prevenção de doenças. Por meio de sua interface interativa e
                integração com o Sistema Único de Saúde, o AUS centralizará
                todas as informações clínicas de pacientes do país inteiro,
                facilitando o monitorameto da saúde de cada um e o
                compartilhamento de informações essenciais em casos de
                emergência médica. Além de atuar como forma de dinamização e
                universalização dos sistemas públicos de saúde, o AUS será um
                grande agente de educação e conscientização, colocando o usuário
                no centro do processo medicinal a partir da plataforma de Saúde
                Interativa e das informações personalizadas sobre Medicina
                Preventiva e Saúde Mental.
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer></footer>
    </>
  );
}
