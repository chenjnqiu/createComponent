import cx from 'classnames';
import React, { forwardRef, useContext } from 'react';

import { DisabledContext } from '../disabled';

export interface ILinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    disabled?: boolean;
    weak?: boolean;
}

// 阻止默认事件
function preventOpenLink (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
    event.stopPropagation();
}

export  const Link = forwardRef<HTMLAnchorElement, ILinkProps>((props, ref) => {
    const disabledContext = useContext(DisabledContext)
    const { 
        className,
        disabled = disabledContext.value,
        weak = false,
        onClick,
        ...rest
     } = props
     
    return (
        <a
        {...rest}
        className={cx(className, 'cjq-link', {
          'cjq-link--disabled': disabled,
          'cjq-link--weak': weak,
        })}
        ref={ref}
        onClick={disabled ? preventOpenLink : onClick}
        />
    )
})

export default Link

Link.displayName = 'Link';