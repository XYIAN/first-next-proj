import { Sidebar, SidebarProps } from 'primereact/sidebar';
import { useState } from 'react';
import { XyButton } from '../XyButton';
import React from 'react';

interface XySidebarProps extends Partial<SidebarProps> {}
export const XySidebar = ({ ...other }: XySidebarProps) => {
    const [visible, setVisible] = useState(false);
    return (
        <React.Fragment>
            <div className='w-full justify-content-end'>
                <XyButton
                    icon='pi pi-bars'
                    onClick={() => {
                        setVisible(true);
                    }}
                />
            </div>
            <Sidebar
                {...other}
                visible={visible}
                onHide={() => {
                    setVisible(false);
                }}
                position='right'
                content={
                    <React.Fragment>
                        <h2>Sidebar</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                        </p>
                    </React.Fragment>
                }
            />
        </React.Fragment>
    );
};
