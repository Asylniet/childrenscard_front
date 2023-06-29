import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import { Layout } from '@/components/Layout';
import { Provider } from 'react-redux';
import { store } from '../store';
import NextNProgress from 'nextjs-progressbar';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <NextNProgress color="#F7DA3B" height={2} showOnShallow={false} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}
