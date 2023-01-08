import '../styles/global.css';

import type { AppProps } from 'next/app';

import { AuthProvider } from '@/ctx';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}
