'use client';

import { XySidebar } from '@/components';
import { ContactMe } from '@/components/forms/contact/ContactMe';

export default function Contact() {
    return (
        <main>
            <XySidebar />

            <div className='flex flex-column justify-content-center w-full align-items-center'>
                <h1>Contact Me</h1>
                <ContactMe />
            </div>
        </main>
    );
}
