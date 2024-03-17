'use client';
import { ContactMe, XySidebar } from '@/components';
import { ContactModel } from '@/types/forms';
import { useForm } from 'react-hook-form';

export default function Contact() {
    const {
        control,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm<ContactModel>();

    const onSubmit = (data: ContactModel) => {
        console.log(data);
    };
    return (
        <main>
            <XySidebar />
            <div className='flex flex-column justify-content-center w-full align-items-center'>
                <h1>Contact Me</h1>
                <ContactMe
                    handleSubmit={handleSubmit}
                    control={control}
                    reset={reset}
                    errors={errors}
                    onSubmit={onSubmit}
                />
            </div>
        </main>
    );
}
