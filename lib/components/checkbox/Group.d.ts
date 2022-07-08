import React, { Component } from 'react';
import { IDisabledContext } from '../disabled';
export interface ICheckboxGroupProps<Value> {
    value: Value[];
    isValueEqual?: (value1: Value, value2: Value) => boolean;
    disabled?: boolean;
    readOnly?: boolean;
    onChange?: (value: Value[]) => void;
    className?: string;
    style?: React.CSSProperties;
}
export declare class CheckboxGroup<Value> extends Component<ICheckboxGroupProps<Value>> {
    static defaultProps: {
        isValueEqual: (value1: any, value2: any) => boolean;
        value: any[];
    };
    static contextType: React.Context<IDisabledContext>;
    getGroupContext: (maybeValue: Value[] | unknown, disabled: boolean, readOnly: boolean, isValueEqual: (value1: Value, value2: Value) => boolean) => {
        value: Value[];
        disabled: boolean;
        readOnly: boolean;
        isValueEqual: (value1: Value, value2: Value) => boolean;
        onChange: (child: Value) => void;
    };
    onCheckboxChange: (child: Value) => void;
    render(): JSX.Element;
}
export default CheckboxGroup;
