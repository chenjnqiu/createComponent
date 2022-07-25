import cx from 'classnames';
import React, { forwardRef } from 'react';
import Tag, { ITagProps } from './Tag';

export interface ISelectTagProps
    extends Omit<
    ITagProps,
    'closable' | 'closeButtonStyle' | 'onChange' | 'size' | 'theme' | 'outline'
    > {
    selected?: boolean;
    onChange?: (selected: boolean) => void;
}

export const SelectTag = forwardRef<HTMLDivElement, ISelectTagProps>(({
    className,
    children,
    selected,
    onChange,
    ...rest
}, ref) => {
    const handleClick = (_e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        onChange?.(!selected)
    }
    const classNames = cx(
        'cjq-select-tag',
        className,
        {
            'cjq-select-tag-selected': selected,
        }
    )
    return (
        <Tag
            className={classNames}
            ref={ref}
            onClick={handleClick}
            outline
            {...rest}
        >
            {children}
        </Tag>
    )
})

SelectTag.displayName = 'SelectTag'

export default SelectTag