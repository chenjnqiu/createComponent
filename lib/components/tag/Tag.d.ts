import React from 'react';
declare const PRESET_COLOR: {
    red: boolean;
    green: boolean;
    yellow: boolean;
    blue: boolean;
    grey: boolean;
};
export interface ITagProps extends React.HTMLAttributes<HTMLDivElement> {
    theme?: keyof typeof PRESET_COLOR;
    outline?: boolean;
    rounded?: Boolean;
    closable?: boolean;
    onClose?: React.MouseEventHandler<HTMLElement>;
    style?: React.CSSProperties;
    closeButtonStyle?: React.CSSProperties;
    visible?: boolean;
    size?: 'small' | 'medium' | 'large';
}
export declare const Tag: React.ForwardRefExoticComponent<ITagProps & React.RefAttributes<HTMLDivElement>>;
export default Tag;
