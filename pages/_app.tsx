import "styles/styles.css";

import { useRouter } from "next/dist/client/router";
import { UserPageLayout } from "containers/UserPageLayout";
import React, { useEffect } from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
    const router = useRouter();

    if (router.pathname.startsWith("/user")) {
        // useEffect(() => {
        //     function processRequest(e) {
        //         if (xhr.readyState == 4 && xhr.status == 200) {
        //             var response = JSON.parse(xhr.responseText);
        //             document.getElementById("webchat").src =
        //                 "https://webchat.botframework.com/embed/080f3b3c-12c4-4779-a121-a8713e33ed59?t=" +
        //                 response;
        //         }
        //     }

        //     var xhr = new XMLHttpRequest();

        //     xhr.open(
        //         "GET",
        //         "https://webchat.botframework.com/api/tokens",
        //         true
        //     );
        //     xhr.setRequestHeader(
        //         "Authorization",
        //         "BotConnector " +
        //             "zbyGHH8LwDY.pBL5c133rkUuAvBcAL6Ih7UVeav46O-tOrXCZyXHzaE"
        //     );
        //     xhr.send();

        //     xhr.onreadystatechange = processRequest;
        // }, []);

        return (
            <>
                <Head>
                    <meta name="viewport" content="viewport-fit=cover" />
                </Head>
                <UserPageLayout>
                    <div className="absolute bottom-0 right-0">
                        {/* <iframe
                            id="webchat"
                            src="https://webchat.botframework.com/embed/080f3b3c-12c4-4779-a121-a8713e33ed59?t=zbyGHH8LwDY.pBL5c133rkUuAvBcAL6Ih7UVeav46O-tOrXCZyXHzaE"
                        ></iframe> */}
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
