import Head from "next/head";
import React, { useEffect, useState } from "react";

const User: React.FC = () => {
    const [chatSrc, setChatSrc] = useState("");

    useEffect(() => {
        function processRequest(e) {
            if (xhr.readyState == 4 && xhr.status == 200) {
                const response = JSON.parse(xhr.responseText);

                setChatSrc(
                    "https://webchat.botframework.com/embed/doutor-virtual-aus-y4olfff?t=" +
                        response
                );
            }
        }

        const xhr = new XMLHttpRequest();

        xhr.open("GET", "https://webchat.botframework.com/api/tokens", true);
        xhr.setRequestHeader(
            "Authorization",
            "BotConnector " +
                "zbyGHH8LwDY.pBL5c133rkUuAvBcAL6Ih7UVeav46O-tOrXCZyXHzaE"
        );

        xhr.send();

        xhr.onreadystatechange = processRequest;
    }, []);

    return (
        <>
            <Head>
                <title>AUS - Assistente Virtual</title>
            </Head>
            <div className="flex w-full h-screen overflow-hidden">
                <div className="relative h-full w-1/2 mb-4 p-4">
                    <iframe
                        className="border-2 border-blue-600 rounded-lg shadow-xl"
                        height="100%"
                        width="100%"
                        id="chat"
                        src={chatSrc}
                    ></iframe>
                </div>
                <div className="h-full w-1/2 p-8">
                    <div className="text-4xl font-bold text-blue-800 mt-10">
                        Seja bem-vindo à Assistente Virtual do AUS: SUSana
                    </div>
                    <div className="px-8 pt-10 max-w-3xl text-justify">
                        <div className="text-2xl">O que é?</div>
                        <div className="pl-6 mt-8">
                            SUSana é a Assistente Virtual do AUS lhe permite
                            fazer uma breve consulta diretamente do seu
                            computador ou celular (Telegram).
                        </div>
                        <div className="text-2xl mt-8">Qual é o objetivo?</div>
                        <div className="pl-6 mt-8">
                            Com o atendimento virtual, você obtém uma
                            recomendação precisa de como tratar o seu problema e
                            é encaminhado ao centro de saúde mais adequado
                        </div>
                        <div className="text-2xl mt-8">Como usar</div>
                        <div className="pl-6 mt-8">
                            Para começar, digite seus sintomas na barra de
                            mensagem, localizada na parte inferior da caixa de
                            dialogo à esquerda
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default User;
