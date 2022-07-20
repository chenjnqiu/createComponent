import { IRadioProps } from './AbstractRadio';
import React from 'react';
import RadioGroup from './Group';
import RadioButton from './RadioButton';
declare function Radio<Value>(props: IRadioProps<Value> & {
    labelStyle?: React.CSSProperties;
}): JSX.Element;
declare namespace Radio {
    var Button: typeof RadioButton;
    var Group: typeof RadioGroup;
}
export { Radio };
export default Radio;
