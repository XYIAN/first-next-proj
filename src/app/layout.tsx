import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Head from 'next/head';
import 'primereact/resources/themes/lara-dark-purple/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { PrimeReactProvider } from 'primereact/api';
import '/node_modules/primeflex/primeflex.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Kyles Test App',
    description: 'Example Web app using nextjs and typescript',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <body className={inter.className}>
                <PrimeReactProvider>{children}</PrimeReactProvider>
            </body>
        </html>
    );
}
