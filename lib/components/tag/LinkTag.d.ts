import React from 'react';
import { ITagProps } from './Tag';
export interface ILinkTagProps extends Omit<ITagProps, 'closable' | 'closeButtonStyle' | 'size' | 'theme' | 'outline'> {
    linkIconStyle?: React.CSSProperties;
}
export declare const LinkTag: React.ForwardRefExoticComponent<ILinkTagProps & React.RefAttributes<HTMLDivElement>>;
export default LinkTag;
