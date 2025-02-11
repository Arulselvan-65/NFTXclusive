import "./globals.css";
import '@rainbow-me/rainbowkit/styles.css';
import { Providers } from './providers';
import { GlobalModalProvider } from '@/components/mintTransactionHandler';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <div className="bg-black text-white font-sans relative">
                    <GlobalModalProvider>
                        <Providers>
                            <main className="min-h-screen">
                                {children}
                            </main>
                            <ToastContainer
                                limit={3}
                                position="top-right"
                                className="toastContainer"
                            />
                        </Providers>
                    </GlobalModalProvider>
                </div>
            </body>
        </html>
    );
}

export default RootLayout;
