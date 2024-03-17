import { Sidebar, SidebarProps } from 'primereact/sidebar';
import { useState } from 'react';
import { XyButton } from '../../common/XyButton';
import React from 'react';
type ButtonMenuModel = {
    href: string;
    label: string;
    key: number;
};
const ButtonMenu = [
    { href: '/', label: 'Home', key: 1 },
    { href: '/contact', label: 'Contact Me', key: 2 },
    { href: '/portfolio', label: 'Portfolio', key: 3 },
];
interface XySidebarProps extends Partial<SidebarProps> {}
export const XySidebar = ({ ...other }: XySidebarProps) => {
    const [visible, setVisible] = useState(false);
    return (
        <React.Fragment>
            <div
                className='w-full flex justify-content-end fixed top-0 right-0 p-3'
                style={{ zIndex: 1000 }}
            >
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
                    <div>
                        <div className='flex p-1 fixed top-0'>
                            <XyButton
                                onClick={() => setVisible(false)}
                                icon='pi pi-arrow-left'
                                className=''
                            />
                        </div>
                        <h3
                            className='flex justify-content-center underline'
                            style={{ padding: '1rem 0 1rem 0' }}
                        >
                            Menu
                        </h3>
                        <div className='flex flex-column gap-4 align-content-center'>
                            {ButtonMenu.map((item) => {
                                return (
                                    <div
                                        className='flex justify-content-center text-center'
                                        key={item.key}
                                    >
                                        <a
                                            href={item.href}
                                            className='p-button font-bold flex justify-content-center'
                                            style={{ width: '50%' }}
                                        >
                                            {item.label}
                                        </a>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                }
            />
        </React.Fragment>
    );
};
