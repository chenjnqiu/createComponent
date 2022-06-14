import cx from 'classnames';
import { isElement, isFragment } from 'react-is';
import React, { Children, cloneElement, useCallback, useContext, useRef } from 'react';
import { DisabledContext } from '../disabled'

import Icon, { IconType } from '../icon';


export interface IButtonDirectiveChildProps {
    className?: string;
    disabled?: boolean;
    children?: React.ReactNode;
    onClick?: React.MouseEventHandler;
}

export type IButtonSize = 'medium' | 'large' | 'small'

export type IButtonType = 
    | 'default' 
    | 'primary' 
    | 'secondary' 
    | 'danger' 
    | 'warning' 
    | 'error' 
    | 'success' 
    | 'text' 
    | 'icon'

export type IButtonHtmlType = 'button' | 'submit' | 'reset'

export interface IButtonDirectiveProps <
    ChildProps extends Omit<IButtonDirectiveChildProps, 'children'>
> {
    size?: IButtonSize;
    type?: IButtonType;
    disabled?: boolean;
    loading?: boolean;
    outline?: boolean;
    bordered?: boolean;
    style?: React.CSSProperties;
    icon?: IconType;
    block?: boolean;
    children?: React.ReactElement<ChildProps>;
}

export function ButtonDirective <ChildProps extends IButtonDirectiveChildProps> (
    props: IButtonDirectiveProps<ChildProps>
) {
    const disabledContext = useContext(DisabledContext)
    const { 
        outline,
        type = 'default',
        size = 'medium',
        block,
        loading,
        disabled = disabledContext.value,
        bordered = true,
        icon,
        children
    } = props

    if(!isElement(children) || isFragment(children)) {
        throw new Error( 'Button Directive child must be a non fragment element, string | number | boolean | null is not accepted')
    }
    const disabledRef = useRef(disabled)
    disabledRef.current = disabled
    const propsRef = useRef(props)
    propsRef.current = props
    
    const childElement = children as React.ReactElement<ChildProps>
    const onClick = useCallback((e: React.MouseEvent) => {
        console.log(1)
        console.log(props)
        console.log(propsRef.current)
        const { loading, children } = propsRef.current
        const { onClick } = children.props
        const disabled = disabledRef.current
        if(loading || disabled) {
            e.preventDefault()
            return
        }
        onClick?.(e)
    }, [])

    const iconNode = icon ? <Icon type={icon} /> : null
    // icon text 或者 outline 为false 不需要outline
    const needOutline = type !== 'text' && type !=='icon' && outline
    const className = cx(
     {
        'cjq-btn-block': block,
        'cjq-btn-loading': loading,
        'cjq-btn-disabld': disabled,
        'cjq-btn-border-transparent': !bordered,
        [`cjq-btn-${size}`]: size !== 'medium',
        [`cjq-btn-${type}${needOutline ? '-outline' : ''}`]: type !== 'default'
     }, 
     'cjq-btn',
      children.props.className
    )
    const commonChildren = cloneElement<ChildProps>(
        children,
        {
            className,
            disabled: !!(disabled || loading),
            onClick,
        } as Partial<ChildProps>,
        iconNode,
        ...(Children.map(childElement.props.children, child => 
            typeof child === 'string' ? <span>{child}</span> : child
        ) || [])
    )
    return commonChildren
}


