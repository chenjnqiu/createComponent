import cx from 'classnames';
import React, { useCallback, useContext, useRef } from 'react';
import GroupContext, { ICheckboxContext } from './GroupContext';
import { DisabledContext, IDisabledContext } from '../disabled';
import { getWidth } from '../../utils'
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

function getReadOnly<Value>(
    groupCtx: ICheckboxContext<Value> | null,
    props: ICheckboxProps<Value>
) {
    if (typeof props.readOnly === 'boolean') {
        return props.readOnly
    }
    if (groupCtx) {
        return groupCtx.readOnly
    }
    return false
}

function getDisabled<Value>(
    disabledCtx: IDisabledContext,
    groupCtx: ICheckboxContext<Value> | null,
    props: ICheckboxProps<Value>
) {
    if (typeof props.disabled === 'boolean') {
        return props.disabled;
    }
    if (groupCtx) {
        return groupCtx.disabled;
    }
    return disabledCtx.value;
}

export function Checkbox<Value>(props: ICheckboxProps<Value>) {
    const disabledCtx = useContext(DisabledContext)
    const groupCtx = useContext(GroupContext)
    const propsRef = useRef(props);
    propsRef.current = props;
    // onChange的值矫正
    const ctxOnChange = groupCtx && groupCtx.onChange;
    const onChange: React.ChangeEventHandler<HTMLInputElement> = useCallback(evt => {
        const { value, onChange } = propsRef.current
        if (ctxOnChange) {
            ctxOnChange(value)
            return
        } else if (onChange) {
            const e: ICheckboxEvent<Value> = Object.create(evt);
            e.target = {
                ...propsRef.current,
                type: 'checkbox',
                checked: evt.target.checked,
            }
            onChange(e)
        }
    }, [ctxOnChange])

    const {
        className,
        style,
        children,
        indeterminate,
        width,
        value: _propsValue,
        labelStyle,
        onMouseEnter,
        onMouseLeave,
        ...others
    } = props
    // readOnly的值矫正
    const readOnly = getReadOnly(groupCtx, props)
    // disabled的值矫正
    const disabled = getDisabled(disabledCtx, groupCtx, props)
    // checked的值矫正
    let checked: boolean
    if (groupCtx) {
        const { value, isValueEqual } = groupCtx
        checked = value.findIndex(it => isValueEqual(it, _propsValue)) !== -1
    } else {
        checked = !!props.checked
    }
    return (
        <label
            className={cx('cjq-checkbox-wrap', className, {
                'cjq-checkbox-checked': !!checked,
                'cjq-checkbox-disabled': disabled || readOnly,
                'cjq-checkbox-indeterminate': indeterminate,
            })}
            style={{
                ...style,
                ...getWidth(width),
            }}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <span className='cjq-checkbox'>
                <span className='cjq-checkbox-inner' />
                <input
                    {...others}
                    type="checkbox"
                    checked={checked && !indeterminate}
                    disabled={disabled}
                    readOnly={readOnly}
                    onChange={onChange}
                />
            </span>
            {children !== undefined &&
                children !== null &&
                children !== true &&
                children !== false ? (
                <div className="cjq-checkbox-label" style={labelStyle}>
                    {children}
                </div>) : null
            }
        </label>)
}

Checkbox.Group = CheckboxGroup;

export default Checkbox