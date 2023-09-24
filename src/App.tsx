import { AudioManager } from "./components/AudioManager";
import Transcript from "./components/Transcript";
import { useTranscriber } from "./hooks/useTranscriber";
import { MetaMaskProvider } from "@metamask/sdk-react";

function App() {
    const transcriber = useTranscriber();

    return (
        <MetaMaskProvider
            debug={false}
            sdkOptions={{
                logging: {
                    developerMode: false,
                },
                // communicationServerUrl: process.env.REACT_APP_COMM_SERVER_URL,
                checkInstallationImmediately: true, // This will automatically connect to MetaMask on page load
                dappMetadata: {
                    name: "Defi Assistant App",
                    url: window.location.host,
                },
            }}
        >
            <div className='flex justify-center items-center min-h-screen'>
                <div className='container flex flex-col justify-center items-center'>
                    <h1 className='text-5xl font-extrabold tracking-tight text-slate-900 sm:text-7xl text-center'>
                        DeFi Assistant 🛎️
                    </h1>
                    <h2 className='mt-3 mb-5 px-4 text-center text-1xl font-semibold tracking-tight text-slate-900 sm:text-2xl'>
                        Speech AI-powered wallet for DeFi
                    </h2>
                    <AudioManager transcriber={transcriber} />
                    <Transcript transcribedData={transcriber.output} />
                </div>
            </div>
        </MetaMaskProvider>
    );
}

export default App;
