import React from 'react';
import CheckboxGroup from './Group';
export interface ICheckboxEventTarget<Value> extends ICheckboxProps<Value> {
    type: 'checkbox';
    checked: boolean;
}
export interface ICheckboxEvent<Value> {
    target: ICheckboxEventTarget<Value>;
    preventDefault(): void;
    stopPropagation(): void;
}
export interface ICheckboxProps<Value> {
    checked?: boolean;
    value?: Value;
    disabled?: boolean;
    readOnly?: boolean;
    indeterminate?: boolean;
    onChange?: (e: ICheckboxEvent<Value>) => void;
    className?: string;
    style?: React.CSSProperties;
    labelStyle?: React.CSSProperties;
    width?: number;
    children?: React.ReactNode;
    onMouseEnter?: React.MouseEventHandler<HTMLElement>;
    onMouseLeave?: React.MouseEventHandler<HTMLElement>;
}
export declare function Checkbox<Value>(props: ICheckboxProps<Value>): JSX.Element;
export declare namespace Checkbox {
    var Group: typeof CheckboxGroup;
}
export default Checkbox;
