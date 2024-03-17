import { InputText } from 'primereact/inputtext';
import { classNames } from 'primereact/utils';
import {
    Controller,
    FieldErrors,
    FieldValues,
    RegisterOptions,
} from 'react-hook-form';
import { LabelFieldSize } from '@/components/helpers/types';
import { FormHelpers } from '../FormHelpers';
import { XyLabelField } from '..';
interface XyInputTextProps {
    control: any;
    name: string;
    errors: FieldErrors<any>;
    label?: string;
    required?: boolean;
    inline?: boolean;
    rules?:
        | Omit<
              RegisterOptions<FieldValues, string>,
              'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
          >
        | undefined;
    labelSize?: LabelFieldSize;
}

export const XyInputText = ({
    control,
    name,
    errors,
    rules,
    label,
    inline,
    required,
    labelSize,
}: XyInputTextProps) => {
    const { getFormErrorMessage } = FormHelpers();
    return (
        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({ field, fieldState }) => (
                <>
                    <XyLabelField
                        label={label}
                        required={required}
                        align='right'
                        labelSize={labelSize}
                        field={
                            <InputText
                                {...field}
                                id={field.name}
                                value={field.value || ''}
                                className={classNames({
                                    'p-invalid': fieldState.error,
                                })}
                                onChange={(e) => field.onChange(e.target.value)}
                            />
                        }
                        inline={inline}
                    />
                    {getFormErrorMessage(field.name, errors)}
                </>
            )}
        />
    );
};
