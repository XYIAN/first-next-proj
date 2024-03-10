'use client';
import Image from 'next/image';
import styles from '../page.module.css';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import 'primereact/resources/themes/lara-dark-purple/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Panel } from 'primereact/panel';

export default function Home() {
    return (
        <PrimeReactProvider>
            <main>
                <Panel
                    toggleable
                    header={<h1 className={styles.title}>Home Page</h1>}
                >
                    <div>
                        <h2>This is an example of a basic web app. </h2>
                    </div>
                    <div>maybe</div>
                </Panel>
                <h1>test</h1>
            </main>
        </PrimeReactProvider>
    );
}
