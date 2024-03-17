import { LabelFieldSize } from '@/components/helpers/types';
import { FieldErrors } from 'react-hook-form';

export const Helpers = () => {
    const getFormErrorMessage = (name: string, errors: FieldErrors<any>) => {
        return errors[name] ? (
            <small className='p-error'>
                {errors[name]?.message?.toString()}
            </small>
        ) : (
            <small className='p-error'>&nbsp;</small>
        );
    };
    const getSize = (size: LabelFieldSize) => {
        switch (size) {
            case 'full':
                return '100%';
            case 'lg':
                return '250px';
            case 'med':
                return '150px';
            case 'sm':
                return '100px';
            default:
                return '200px';
        }
    };
    return { getFormErrorMessage, getSize };
};
