import cx from 'classnames'
import React, { forwardRef } from 'react'
import Icon from '../icon'

const PRESET_COLOR = {
    red: true,
    green: true,
    yellow: true,
    blue: true,
    grey: true,
}

export interface ITagProps extends React.HTMLAttributes<HTMLDivElement> {
    theme?: keyof typeof PRESET_COLOR;
    outline?: boolean;
    rounded?: Boolean;
    closable?: boolean;
    onClose?: React.MouseEventHandler<HTMLElement>;
    style?: React.CSSProperties;
    closeButtonStyle?: React.CSSProperties;
    visible?: boolean;
    size?: 'small' | 'medium' | 'large';
}

export const Tag = forwardRef < HTMLDivElement, ITagProps> (
    ({
        size = 'small',
        theme = 'grey',
        outline,
        rounded = true,
        closable,
        children,
        className,
        onClose,
        closeButtonStyle,
        visible = true,
        ...rest
    }, ref) => {
        if(!visible) {
            return null
        }
        const colorPart = PRESET_COLOR[theme] ? `-${theme}` : ''
        const outlinePart = outline ? '-outline' : ''
        const classnames = cx(
            'cjq-tag',
            `cjq-tag-style${colorPart}${outlinePart}`,
            `cjq-tag-size-${size}`,
            className,
            {
                'cjq-tag-rounded' : rounded,
                'cjq-tag-closable' : closable,
            }
        )
        return (
            <div
                ref={ref}
                className={classnames}
                {...rest}
            >
                <div className='cjq-tag-content'>{children}</div>
                {closable ? (
                 <Icon
                    type="closed"
                    className="cjq-tag-close-btn"
                    onClick={onClose}
                    style={closeButtonStyle}
                  />
                 ) : null}
            </div>
        )
    }
)

Tag.displayName = 'Tag';

export default Tag