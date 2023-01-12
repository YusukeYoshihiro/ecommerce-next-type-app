import '../styles/globals.css'
import "@assets/main.css"
import type { AppProps } from 'next/app'
import { FC } from 'react'
import { UIProvider, useUI } from '@components/ui/context';

type CompProps = {
  children: React.ReactNode;
};

const Noop: FC<CompProps> = ({ children }) => <>{children}</>

export default function App({ Component, pageProps }: AppProps & { Component: { Layout: FC<CompProps> } }) {

  const Layout = Component.Layout ?? Noop;

  return (
    <>
      <UIProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UIProvider>
    </>
  )
}
