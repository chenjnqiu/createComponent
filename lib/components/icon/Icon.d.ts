import React from 'react';
export declare type IconType = 'subtract-circle-o' | 'close-circle-o' | 'check-circle-o' | 'search' | 'bell-o' | 'customer-o' | 'down' | 'up' | 'settings-o' | 'plus-circle-o' | 'reverse' | 'forward' | 'closed' | 'lock' | 'delete' | 'menu' | 'position';
export interface IconProps extends React.HTMLAttributes<HTMLElement> {
    /** 图标类型包括'subtract-circle-o'|'close-circle-o' |'check-circle-o|'search'|'bell-o'|'customer-o'|'down'|'up'
     * |'settings-o'|'plus-circle-o'|'reverse'|'forward'|'closed'|'lock'|delete'|'menu'|'position' */
    type: IconType;
    spin?: boolean;
    className?: string;
}
declare const Icon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<HTMLElement>>;
export { Icon };
export default Icon;
