'use client';
import { XySidebar, XyPanel, PhotoLinkCard } from '@/components';
import React from 'react';

export default function Page() {
    return (
        <React.Fragment>
            <XySidebar />
            <div>
                <PhotoLinkCard />
            </div>
        </React.Fragment>
    );
}
