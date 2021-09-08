import 'tailwindcss/tailwind.css';
import 'styles/globals.css';

import { useRouter } from 'next/dist/client/router';
import { UserPageLayout } from 'containers/UserPageLayout';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  if (router.pathname.startsWith('/user'))
    return (
      <UserPageLayout>
        <Component {...pageProps} />
      </UserPageLayout>
    );

  return <Component {...pageProps} />;
}

export default MyApp;
