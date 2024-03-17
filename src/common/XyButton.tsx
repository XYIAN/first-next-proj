import { Button, ButtonProps } from 'primereact/button';

interface XyButtonProps extends ButtonProps {}
export const XyButton = ({ ...other }: XyButtonProps) => {
    return <Button {...other} />;
};
