import React, { PureComponent } from 'react';
export interface IBadgeProps {
    count: number;
    maxCount: number;
    dot: boolean;
    showZero: boolean;
    offset?: [number, number];
    style?: React.CSSProperties;
    children?: React.ReactNode;
    className?: string;
}
export declare class Badge extends PureComponent<IBadgeProps> {
    static defaultProps: {
        count: number;
        maxCount: number;
        dot: boolean;
        showZero: boolean;
    };
    renderCount: () => JSX.Element;
    render(): JSX.Element;
}
export default Badge;
