import React, { ReactNode } from 'react';
import { IRadioContext } from './GroupContext';
import { IDisabledContext } from '../disabled';
export interface IRadioEvent<Value> extends Omit<React.ChangeEvent<HTMLInputElement>, 'target'> {
    target: {
        type: 'radio';
        checked: boolean;
    } & IRadioProps<Value>;
}
export interface IRadioProps<Value> {
    value?: Value;
    disabled?: boolean;
    readOnly?: boolean;
    width?: number | string;
    className?: string;
    checked?: boolean;
    onChange?: (e: IRadioEvent<Value>) => void;
    style?: React.CSSProperties;
    children?: ReactNode;
    onMouseEnter?: React.MouseEventHandler<HTMLElement>;
    onMouseLeave?: React.MouseEventHandler<HTMLElement>;
}
export declare function makeEvent<Value>(event: React.ChangeEvent<HTMLInputElement>, props: IRadioProps<Value>): IRadioEvent<Value>;
export declare function useRadioHandler<Value>(ctx: IRadioContext<Value> | null, props: IRadioProps<Value>): (event: any) => void;
export declare function getDisabled<Value>(disabledCtx: IDisabledContext, groupCtx: IRadioContext<Value> | null, props: IRadioProps<Value>): boolean;
export declare function getReadOnly<Value>(groupCtx: IRadioContext<Value> | null, props: IRadioProps<Value>): boolean;
export declare function getRadioState<Value>(disabledCtx: IDisabledContext, groupCtx: IRadioContext<Value> | null, props: IRadioProps<Value>): {
    disabled: boolean;
    readOnly: boolean;
    checked: boolean;
};
