import React, { forwardRef } from 'react';
import Icon from '../icon';
import Tag, { ITagProps } from './Tag';

export interface ILinkTagProps
    extends Omit<
    ITagProps,
    'closable' | 'closeButtonStyle' | 'size' | 'theme' | 'outline'
    > {
    linkIconStyle?: React.CSSProperties;
}

export const LinkTag = forwardRef<HTMLDivElement, ILinkTagProps>(({
    className,
    children,
    linkIconStyle,
    ...rest
}, ref) => {
    return (
        <Tag
            className={`cjq-link-tag ${className}`}
            ref={ref}
            outline
            {...rest}
        >
            <div className="cjq-link-tag-content">{children}</div>
            <Icon
                type="arrow-right"
                className="cjq-link-tag-right-icon"
                style={linkIconStyle}
            />
        </Tag>
    )
})


LinkTag.displayName = 'LinkTag';

export default LinkTag;