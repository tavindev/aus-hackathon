import 'styles/styles.css';

import { useRouter } from 'next/dist/client/router';
import { UserPageLayout } from 'containers/UserPageLayout';
import React from 'react';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  if (router.pathname.startsWith('/user'))
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
