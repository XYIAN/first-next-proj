'use client';
// import Image from 'next/image';
import styles from './page.module.css';
// import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import 'primereact/resources/themes/lara-dark-purple/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Panel } from 'primereact/panel';
import { XySidebar, XyPanel } from '@/components';

export default function Page() {
    return (
        <main>
            <XySidebar />
            <XyPanel
                header={<h1 className={styles.title}>XYIAN Example Site</h1>}
            >
                <div>
                    <h2>This is an example of a basic web app. </h2>
                </div>
                <div>maybe</div>
            </XyPanel>
        </main>
    );
}
