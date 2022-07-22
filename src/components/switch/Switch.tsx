import React, { Component } from 'react';
import cx from 'classnames';
import { DisabledContext } from '../disabled';

export interface ISwitchProps {
    checked?: boolean;
    onChange?: (checked:boolean) => void;
    disabled?: boolean;
    checkedText?: string;
    uncheckedText?: string;
    loading?: boolean;
    size?: 'default' | 'small'| 'large';
    className?: string;
}

export class Switch extends Component<ISwitchProps> {
    static defaultProps = {
        size: 'default',
    }
    static contextType = DisabledContext
    
    // 处理点击事件，直接执行外部onChange方法
    toggle = () => { 
        const { onChange, checked } = this.props
        onChange && onChange(!checked)
    }

    render() {
        const { 
            className,
            size,
            disabled = this.context.value,
            loading,
            checked,
        } = this.props
        const switchDisabled = disabled || loading
        const classNames = cx(
            {
                [`cjq-switch-${size}`]: size !== 'default',
                'cjq-switch-disabled': switchDisabled,
                'cjq-switch-loading': loading,
                'cjq-switch-checked': checked,
            }, 
            'cjq-switch', 
            className
        )

        return (
            <div
                className={classNames}
                onClick={switchDisabled ? undefined : this.toggle}
            />
        )
    }
}

export default Switch
