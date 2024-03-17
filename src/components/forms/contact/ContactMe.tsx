'use client';
import { Panel } from 'primereact/panel';
import { XyInputText } from '@/common/Inputs/XyInputText';
import {
    Control,
    FieldErrors,
    UseFormHandleSubmit,
    UseFormReset,
    useForm,
} from 'react-hook-form';
import { XyButton } from '@/common/XyButton';
import { ContactModel } from '@/types/forms';

interface ContactMeProps {
    handleSubmit: UseFormHandleSubmit<ContactModel>;
    onSubmit: (data: ContactModel) => void;
    errors: FieldErrors<ContactModel>;
    reset: UseFormReset<ContactModel>;
    control: Control<ContactModel>;
}
export const ContactMe = ({
    handleSubmit,
    onSubmit,
    errors,
    reset,
    control,
}: ContactMeProps) => {
    return (
        <Panel
            header='Contact Form'
            className='w-full justify-content-center'
            toggleable
        >
            <form onSubmit={handleSubmit(onSubmit)} id='contact-form'>
                <div className='flex w-full flex-column align-content-center justify-content-center'>
                    <XyInputText
                        control={control}
                        errors={errors}
                        name='firstName'
                        label='First Name'
                        inline
                    />
                    <XyInputText
                        control={control}
                        errors={errors}
                        name='lastName'
                        label='Last Name'
                        inline
                    />
                    <div className='flex w-full justify-content-center'>
                        <XyButton
                            label='Reset Form'
                            onClick={() => reset()}
                            className='flex flex-1'
                        />
                        <XyButton
                            type='submit'
                            label='Submit'
                            className='flex flex-1'
                        />
                    </div>
                </div>
            </form>
        </Panel>
    );
};
