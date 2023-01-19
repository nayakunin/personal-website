import '../styles/global.css';

import type { AppProps } from 'next/app';

import { AuthProvider } from '@/ctx';
import { trpc } from '@/utils/trpc';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default trpc.withTRPC(App);
