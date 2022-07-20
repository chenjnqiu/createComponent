import React, { Component } from 'react';
import { IButtonDirectiveProps, ButtonDirective } from './Directive';
export interface IButtonProps extends Omit<IButtonDirectiveProps<React.ButtonHTMLAttributes<HTMLButtonElement>>, 'children'>, React.HTMLAttributes<HTMLElement> {
    className?: string;
    style?: React.CSSProperties;
    href?: string;
    target?: string;
    htmlType?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
    download?: string;
}
export declare class Button extends Component<IButtonProps> {
    static defaultProps: {
        type: string;
        size: string;
        htmlType: string;
        bordered: boolean;
    };
    static Directive: typeof ButtonDirective;
    render(): JSX.Element;
}
export default Button;
