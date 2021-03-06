import React, { ReactNode } from 'react';
import { IRadioEvent } from './AbstractRadio';
export interface IRadioGroupProps<Value> {
    value?: Value;
    disabled?: boolean;
    readOnly?: boolean;
    onChange?: (e: IRadioEvent<Value>) => void;
    isValueEqual?: (value1: Value, value2: Value) => boolean;
    className?: string;
    style?: React.CSSProperties;
    children?: ReactNode;
}
export declare function RadioGroup<Value>(props: IRadioGroupProps<Value>): JSX.Element;
export default RadioGroup;
