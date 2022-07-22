import React, { PureComponent } from 'react';
import cx from 'classnames';

const NO_STYLE = {};

export interface IBadgeProps {
    count: number;
    maxCount: number;
    dot: boolean;
    showZero: boolean;
    offset?: [number, number];
    style?: React.CSSProperties;
    children?: React.ReactNode;
    className?: string;
}

export class Badge extends PureComponent<IBadgeProps> {
    static defaultProps = {
        count: 0,
        maxCount: 99,
        dot: false,
        showZero: false,
    }

    renderCount = () => {
        const { count, maxCount, dot, showZero, offset, style } = this.props
        const posStyle = Array.isArray(offset) && offset.length === 2 
            ? {  
                right: offset[0],
                top: offset[1],
            }
            : NO_STYLE
        const badgeStyle = style ? { ...style, ...posStyle }: posStyle
        if(dot) {
             return (<span className='cjq-badge-dot' style={badgeStyle} />)
        } else if (count >0 || (count === 0 && showZero)) {
            return (
                <span className='cjq-badge-count' style={badgeStyle}>
                    <span className='cjq-badge-count-num'>
                        {count > maxCount ? `${maxCount}+` : count}
                    </span>
                </span>
            )
        }
        return null
    }


    render() {
        const { className, children } = this.props
        const containerCls = cx('cjq-badge', {
            'cjq-badge--has-content': children,
            'cjq-badge--no-content': !children,
            // For compatibility only
            'cjq-badge-none-cont': !children,
        }, className)
        return (
            <div className={containerCls}>
                {children ? <div className='cjq-badge-content'>{children}</div> : null}
                {this.renderCount()}
            </div>
        )
    }
}

export default Badge