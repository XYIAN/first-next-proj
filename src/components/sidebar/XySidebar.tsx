import { Sidebar, SidebarProps } from 'primereact/sidebar';
import { useState } from 'react';
import { XyButton } from '../XyButton';

interface XySidebarProps extends Partial<SidebarProps> {
    onClick?: () => void;
}
export const XySidebar = ({ onClick, ...other }: XySidebarProps) => {
    const [visible, setVisible] = useState(false);
    return (
        <>
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
                    if (onClick) onClick();
                }}
                position='right'
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
