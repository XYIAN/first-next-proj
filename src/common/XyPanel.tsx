import { Panel, PanelProps } from 'primereact/panel';
import { ReactNode } from 'react';

interface XyPanelProps extends PanelProps {
    children: ReactNode | ReactNode[];
}
export const XyPanel = ({ children, ...other }: XyPanelProps) => {
    return (
        <Panel toggleable {...other}>
            {children}
        </Panel>
    );
};
