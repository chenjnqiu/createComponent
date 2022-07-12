import React from 'react';
import { IconType } from '../icon';
export interface IButtonDirectiveChildProps {
    className?: string;
    disabled?: boolean;
    children?: React.ReactNode;
    onClick?: React.MouseEventHandler;
}
export declare type IButtonSize = 'medium' | 'large' | 'small';
export declare type IButtonType = 'default' | 'primary' | 'secondary' | 'danger' | 'warning' | 'error' | 'success' | 'text' | 'icon';
export declare type IButtonHtmlType = 'button' | 'submit' | 'reset';
export interface IButtonDirectiveProps<ChildProps extends Omit<IButtonDirectiveChildProps, 'children'>> {
    size?: IButtonSize;
    type?: IButtonType;
    disabled?: boolean;
    loading?: boolean;
    outline?: boolean;
    bordered?: boolean;
    style?: React.CSSProperties;
    icon?: IconType;
    block?: boolean;
    children?: React.ReactElement<ChildProps>;
}
export declare function ButtonDirective<ChildProps extends IButtonDirectiveChildProps>(props: IButtonDirectiveProps<ChildProps>): React.ReactElement<ChildProps, string | React.JSXElementConstructor<any>>;
