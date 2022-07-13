import React from 'react';
export interface ILinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    disabled?: boolean;
    weak?: boolean;
}
export declare const Link: React.ForwardRefExoticComponent<ILinkProps & React.RefAttributes<HTMLAnchorElement>>;
export default Link;
