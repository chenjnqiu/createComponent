import cx from 'classnames';
import { getWidth } from '../../utils';
import { DisabledContext } from '../disabled';
import { IRadioProps, getRadioState, useRadioHandler } from './AbstractRadio';
import React, { useContext } from 'react';
import GroupContext from './GroupContext';
import RadioGroup from './Group';
import RadioButton from './RadioButton';

function Radio<Value> (
    props: IRadioProps<Value> & { labelStyle?: React.CSSProperties }
) {
    const {
        className,
        style,
        children,
        value,
        width,
        labelStyle,
        onMouseEnter,
        onMouseLeave,
        ...others
     } = props

    const disabledCtx = useContext(DisabledContext);
    const groupCtx = useContext(GroupContext);
    const { checked, disabled, readOnly } = getRadioState(
        disabledCtx,
        groupCtx,
        props
    );
    const onChange = useRadioHandler(groupCtx, props);
    const classString = cx(className, 'cjq-radio-wrap', {
        'cjq-radio-checked': !!checked,
        'cjq-radio-disabled': disabled || readOnly,
    })

    const widthStyle = getWidth(width)
    const wrapStyle = {
        ...style,
        ...widthStyle,
    }

    return (
    <label
        className={classString}
        style={wrapStyle}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
    >
        <span className='cjq-radio'>
            <span className='cjq-radio-inner' />
            <input
                {...others} 
                type='radio'
                checked={!!checked}
                disabled={disabled}
                readOnly={readOnly}
                onChange={onChange}
            />
        </span>
        {children !== undefined && (
            <span className='cjq-radio-label' style={labelStyle}>
                {children}
            </span>
        )}
    </label>)
}

Radio.Button = RadioButton;
Radio.Group = RadioGroup;

export { Radio };

export default Radio