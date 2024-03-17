'use client';
import { XyInputText } from '@/common';
import { XySidebar, XyPanel, PhotoLinkCard } from '@/components';
import React from 'react';

export default function Page() {
    return (
        <React.Fragment>
            <div>
                <XySidebar />
                <PhotoLinkCard />
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
