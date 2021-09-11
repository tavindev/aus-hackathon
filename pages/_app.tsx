import "styles/styles.css";

import { useRouter } from "next/dist/client/router";
import { UserPageLayout } from "containers/UserPageLayout";
import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { FaCross, FaOpencart, FaPlug, FaPlus } from "react-icons/fa";
import { BiChat } from "react-icons/bi";

function MyApp({ Component, pageProps }) {
    const [chatSrc, setChatSrc] = useState("");
    const [isChatOpen, setIsChatOpen] = useState(false);
    const router = useRouter();

    const chatRef = useRef<HTMLIFrameElement>();

    const toggleChatOpen = () => setIsChatOpen(!isChatOpen);

    if (router.pathname.startsWith("/user")) {
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

            xhr.open(
                "GET",
                "https://webchat.botframework.com/api/tokens",
                true
            );
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
                    <meta name="viewport" content="viewport-fit=cover" />
                </Head>
                <UserPageLayout>
                    <div className="absolute z-50 flex flex-col items-end right-0 bottom-0 pb-8 pr-8">
                        <div
                            className={`relative border border-blue-600 shadow-2xl rounded-lg ${
                                isChatOpen ? "block" : "hidden"
                            } mb-4`}
                        >
                            <iframe
                                ref={chatRef}
                                height="600"
                                width="400"
                                id="chat"
                                src={chatSrc}
                            ></iframe>
                        </div>
                        <div className="flex relative justify-end items-center bottom-0 w-16 h-16">
                            <div
                                className="flex items-center justify-center absolute bottom-0 right-0 h-16 w-16 rounded-full bg-blue-600"
                                onClick={toggleChatOpen}
                            >
                                <BiChat color="white" />
                            </div>
                        </div>
                    </div>
                    <Component {...pageProps} />
                </UserPageLayout>
            </>
        );
    }
    return (
        <>
            <Head>
                <meta name="viewport" content="viewport-fit=cover" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
