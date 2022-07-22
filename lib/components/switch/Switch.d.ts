import React, { Component } from 'react';
export interface ISwitchProps {
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    disabled?: boolean;
    checkedText?: string;
    uncheckedText?: string;
    loading?: boolean;
    size?: 'default' | 'small' | 'large';
    className?: string;
}
export declare class Switch extends Component<ISwitchProps> {
    static defaultProps: {
        size: string;
    };
    static contextType: React.Context<import("../disabled").IDisabledContext>;
    toggle: () => void;
    render(): JSX.Element;
}
export default Switch;
