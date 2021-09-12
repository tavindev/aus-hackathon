import { useEffect, useState } from "react";

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
                <div className="text-2xl font-bold">
                    Assistente Virtual do AUS
                </div>
                <div className="px-2 pt-8 max-w-2xl text-justify">
                    <div className="">
                        O Assistente Virtual do AUS lhe permite fazer uma breve
                        consulta diretamente do seu computador ou celular
                        (Telegram).
                    </div>
                    <div className="mt-8">
                        Com o atendimento virtual, você obtém um rápido
                        diagnóstico e uma recomendação precisa de como tratar o
                        seu problema
                    </div>
                    <div className="mt-8">
                        Para começar, digite seus sintomas na barra de mensagem,
                        localizada na parte inferior da caixa de dialogo à
                        esquerda
                    </div>
                </div>
            </div>
        </div>
    );
};

export default User;
