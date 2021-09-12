import "styles/styles.css";

import { useRouter } from "next/dist/client/router";
import { UserPageLayout } from "containers/UserPageLayout";
import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { FaCross, FaOpencart, FaPlug, FaPlus } from "react-icons/fa";
import { BiChat } from "react-icons/bi";

function MyApp({ Component, pageProps }) {
    const [isChatOpen, setIsChatOpen] = useState(false);
    const router = useRouter();

    if (router.pathname.startsWith("/user")) {
        return (
            <>
                <Head>
                    <meta name="viewport" content="viewport-fit=cover" />
                </Head>
                <UserPageLayout>
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
