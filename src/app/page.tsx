'use client';
import styles from './page.module.css';
import { XySidebar, XyPanel } from '@/components';
import React from 'react';
import { Button } from 'primereact/button';

export default function Page() {
    return (
        <React.Fragment>
            <div>
                <XySidebar />
                {/* <XyPanel
                header={<h1 className={styles.title}>XYIAN Example Site</h1>}
            >
                <div>
                    <h2>This is an example of a basic web app. </h2>
                </div>
                <div>maybe</div>
            </XyPanel> */}
            </div>
        </React.Fragment>
    );
}
