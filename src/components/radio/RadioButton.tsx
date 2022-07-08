import React, { useContext } from 'react';
import cx from 'classnames';

import { getWidth } from '../../utils';
import { getRadioState, useRadioHandler, IRadioProps } from './AbstractRadio';
import { DisabledContext } from '../disabled';
import GroupContext from './GroupContext';

export function RadioButton<Value> (
    props: IRadioProps<Value>
) {
    const { 
        className,
        style,
        children,
        value,
        width,
        onMouseEnter,
        onMouseLeave,
        ...others
    } = props
    const disabledCtx = useContext(DisabledContext)
    const groupCtx = useContext(GroupContext)
    if (!groupCtx) {
        throw new Error('Radio.Button must be nested within Radio.Group');
    }
    const onChange = useRadioHandler(groupCtx, props)
    const { checked, disabled, readOnly } = getRadioState(disabledCtx, groupCtx, props)

    const classString = cx(className, 'cjq-radio-button', {
        'cjq-radio-button--checked': !!checked,
        'cjq-radio-button--disabled': disabled || readOnly,
    })
    const widthStyle = getWidth(width)
    const wrapStyle = {
        ...style,
        ...widthStyle
    }

    return (
    <label
        className={classString}
        style={wrapStyle}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
    >
        <input
            {...others}
            type='radio'
            checked={!!checked}
            disabled={disabled}
            readOnly={readOnly}
            onChange={onChange}
         />
         <span className="cjq-radio-button__content">{children}</span>
    </label>
    )
}

export default RadioButton