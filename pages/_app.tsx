import '@/styles/globals.css';
import { development, LensConfig, LensProvider } from '@lens-protocol/react-web';
import { bindings as wagmiBindings } from '@lens-protocol/wagmi';
import type { AppProps } from 'next/app';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { polygon, polygonMumbai } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import { Navbar } from '@/components/Navigation/Navbar';

const { provider, webSocketProvider } = configureChains([polygon, polygonMumbai], [publicProvider()]);

const client = createClient({
  autoConnect: true,
  provider,
  webSocketProvider,
});

const lensConfig: LensConfig = {
  bindings: wagmiBindings(),
  environment: development,
};

export default function App({ Component, pageProps }: AppProps) {
  return <WagmiConfig client={client}>
    <LensProvider config={lensConfig}>
      <Navbar />
      <Component {...pageProps} />
    </LensProvider>
  </WagmiConfig>
}
