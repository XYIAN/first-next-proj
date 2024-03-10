import { Sidebar, SidebarProps } from 'primereact/sidebar';
import { useState } from 'react';
import { XyButton } from '../XyButton';

interface XySidebarProps extends SidebarProps {
    filler: string;
}
export const XySidebar = ({ filler, ...other }: XySidebarProps) => {
    const [visible, setVisible] = useState(false);
    return (
        <>
            <XyButton
                icon='pi pi-arrow-right'
                onClick={() => {
                    console.log('sidebar clicked ');
                    setVisible(true);
                }}
            />
            <Sidebar
                visible={visible}
                onHide={() => setVisible(false)}
                position='left'
                content={
                    <>
                        <h2>Sidebar</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                        </p>
                    </>
                }
            />
        </>
    );
};
