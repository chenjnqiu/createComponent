import React from 'react';
import { ITagProps } from './Tag';
export interface ISelectTagProps extends Omit<ITagProps, 'closable' | 'closeButtonStyle' | 'onChange' | 'size' | 'theme' | 'outline'> {
    selected?: boolean;
    onChange?: (selected: boolean) => void;
}
export declare const SelectTag: React.ForwardRefExoticComponent<ISelectTagProps & React.RefAttributes<HTMLDivElement>>;
export default SelectTag;
