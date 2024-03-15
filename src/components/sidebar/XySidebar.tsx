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
                        <h3>Menu</h3>
                        <div className='flex flex-column gap-4 align-content-center'>
                            <a href='/contact' className='p-button font-bold'>
                                Contact Me
                            </a>
                            <a href='/portfolio' className='p-button font-bold'>
                                Portfolio
                            </a>
                        </div>
                    </React.Fragment>
                }
            />
        </React.Fragment>
    );
};
