import React, { Component } from 'react';
import cx from 'classnames';
import GroupContext from './GroupContext';
import { DisabledContext } from '../disabled';
import memoize from '../../utils/memorize-one';

const GroupContextProvider = GroupContext.Provider;

export interface ICheckboxGroupProps<Value> {
    value: Value[];
    isValueEqual?: (value1: Value, value2: Value) => boolean;
    disabled?: boolean;
    readOnly?: boolean;
    onChange?: (value: Value[]) => void;
    className?: string;
    style?: React.CSSProperties;
}

export class CheckboxGroup<Value> extends Component<
    ICheckboxGroupProps<Value>
> {
    static defaultProps = {
        isValueEqual: Object.is,
        value: [],
    };

    static contextType = DisabledContext;

    getGroupContext = memoize((
        maybeValue: Value[] | unknown,
        disabled: boolean,
        readOnly: boolean,
        isValueEqual: (value1: Value, value2: Value) => boolean
    ) => {
        let value: Value[];
        if (Array.isArray(maybeValue)) {
            value = maybeValue;
        } else {
            value = [];
        }
        return {
            value,
            disabled,
            readOnly,
            isValueEqual,
            onChange: this.onCheckboxChange,
        };
    })

    onCheckboxChange = (child: Value) => {
        const { isValueEqual, onChange, value: prevValue } = this.props;
        if (!onChange) {
            return;
        }
        const value = prevValue ? prevValue.slice() : [];
        const index = value.findIndex(it => isValueEqual(it, child));
        if (index !== -1) {
            value.splice(index, 1);
        } else {
            value.push(child);
        }
        onChange(value);
    }

    render() {
        const {
            className,
            style,
            children,
            value,
            disabled = this.context.value,
            readOnly = false,
            isValueEqual,
        } = this.props
        const classString = cx('cjq-checkbox-group', className);
        return (<GroupContextProvider
            value={this.getGroupContext(value, disabled, readOnly, isValueEqual)}
        >
            <div className={classString} style={style}>
                {children}
            </div>
        </GroupContextProvider>)
    }
}

export default CheckboxGroup