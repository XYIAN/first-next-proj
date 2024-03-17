import { ReactNode } from 'react';
import { LabelFieldSize } from '@/components/helpers/types';
import { Helpers } from '@/components/helpers';
export interface XyLabelFieldProps {
    field: ReactNode;
    label?: string;
    labelSize?: LabelFieldSize;
    fieldSize?: LabelFieldSize;
    inline?: boolean;
    required?: boolean;
    align?: 'right' | 'left' | 'center';
}

export const XyLabelField = ({
    label,
    labelSize,
    field,
    fieldSize,
    inline,
    required,
    align,
}: XyLabelFieldProps) => {
    const { getSize } = Helpers();
    const RequiredIcon = (
        <b
            style={{
                color: 'red',
                transform: 'translateX(-10px)',
                position: 'fixed',
            }}
        >
            *
        </b>
    );
    return label ? (
        <div
            className={`flex gap-2 justify-content-center ${
                inline === true ? 'flex-row' : 'flex-column'
            } `}
        >
            <div
                style={{ width: getSize(labelSize) }}
                className={`${align ? 'text-' + align : undefined} text-right`}
            >
                {required && RequiredIcon}
                {label}:
            </div>
            <div style={{ width: getSize(fieldSize) }}>{field}</div>
        </div>
    ) : (
        <div style={{ width: getSize(fieldSize) }}>
            {required && RequiredIcon}
            {field}
        </div>
    );
};
