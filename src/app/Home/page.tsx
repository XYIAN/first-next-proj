'use client';
import Image from 'next/image';
import styles from '../page.module.css';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import 'primereact/resources/themes/lara-dark-purple/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Panel } from 'primereact/panel';
import { Sidebar } from 'primereact/sidebar';
import { useState } from 'react';
import { Button } from 'primereact/button';

export default function Home() {
    const [visible, setVisible] = useState(false);
    return (
        <PrimeReactProvider>
            <main>
                <Sidebar
                    visible={visible}
                    onHide={() => setVisible(false)}
                    position='left'
                    content={
                        <>
                            <h2>Sidebar</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.
                            </p>
                        </>
                    }
                />
                <Button
                    icon='pi pi-arrow-right'
                    onClick={() => setVisible(true)}
                />
                <Panel
                    toggleable
                    header={<h1 className={styles.title}>Home Page</h1>}
                >
                    <div>
                        <h2>This is an example of a basic web app. </h2>
                    </div>
                    <div>maybe</div>
                </Panel>
            </main>
        </PrimeReactProvider>
    );
}
