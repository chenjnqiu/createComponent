import cx from 'classnames';
import React, { forwardRef } from 'react';

export type IconType = 
'subtract-circle-o'
|'close-circle-o' 
|'check-circle-o'
|'search'
|'bell-o'
|'customer-o'
|'down'
|'up'
|'settings-o'
|'plus-circle-o'
|'reverse'
|'forward'
|'closed'
|'lock'
|'delete'
|'menu'
|'position'

export interface IconProps extends React.HTMLAttributes<HTMLElement> {
     /** 图标类型包括'subtract-circle-o'|'close-circle-o' |'check-circle-o|'search'|'bell-o'|'customer-o'|'down'|'up'
      * |'settings-o'|'plus-circle-o'|'reverse'|'forward'|'closed'|'lock'|delete'|'menu'|'position' */
    type: IconType;
    spin?: boolean;
    className?: string;
}

const Icon = forwardRef<HTMLElement, IconProps> (
    ({ className, type, spin, ...otherProps }, ref) => (
        <i
            ref={ref}
            className={cx('cjqicon', `cjqicon-${type}`, className, { 'cjqicon-loading': spin })}
            {...otherProps}
        />
    )
)

export { Icon };

export default Icon;