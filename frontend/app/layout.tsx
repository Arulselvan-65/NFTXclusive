import "./globals.css";
import '@rainbow-me/rainbowkit/styles.css';
import { Providers } from './providers';

function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body>
        <div className="bg-black text-white font-sans relative">
            <Providers>
                <main className="min-h-screen">
                    {children}
                </main>
            </Providers>
        </div>
        </body>
        </html>
    );
}

export default RootLayout;
