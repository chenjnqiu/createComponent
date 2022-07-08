import React, { createContext, forwardRef, useContext, useRef, useCallback, cloneElement, Children, Component, useMemo } from 'react';
import { isElement, isFragment } from 'react-is';

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var classnames = createCommonjsModule(function (module) {
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if (module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
});

const DisabledContext = createContext({
    value: false
});
DisabledContext.displayName = 'DisabledContext';

const Icon = forwardRef(({ className, type, spin, ...otherProps }, ref) => (React.createElement("i", { ref: ref, className: classnames('cjqicon', `cjqicon-${type}`, className, { 'cjqicon-loading': spin }), ...otherProps })));

function ButtonDirective(props) {
    const disabledContext = useContext(DisabledContext);
    const { outline, type = 'default', size = 'medium', block, loading, disabled = disabledContext.value, bordered = true, icon, children } = props;
    if (!isElement(children) || isFragment(children)) {
        throw new Error('Button Directive child must be a non fragment element, string | number | boolean | null is not accepted');
    }
    const disabledRef = useRef(disabled);
    disabledRef.current = disabled;
    const propsRef = useRef(props);
    propsRef.current = props;
    const childElement = children;
    const onClick = useCallback((e) => {
        const { loading, children } = propsRef.current;
        const { onClick } = children.props;
        const disabled = disabledRef.current;
        if (loading || disabled) {
            e.preventDefault();
            return;
        }
        onClick?.(e);
    }, []);
    const iconNode = icon ? React.createElement(Icon, { type: icon }) : null;
    // icon text 或者 outline 为false 不需要outline
    const needOutline = type !== 'text' && type !== 'icon' && outline;
    const className = classnames({
        'cjq-btn-block': block,
        'cjq-btn-loading': loading,
        'cjq-btn-disabld': disabled,
        'cjq-btn-border-transparent': !bordered,
        [`cjq-btn-${size}`]: size !== 'medium',
        [`cjq-btn-${type}${needOutline ? '-outline' : ''}`]: type !== 'default'
    }, 'cjq-btn', children.props.className);
    const commonChildren = cloneElement(children, {
        className,
        disabled: !!(disabled || loading),
        onClick,
    }, iconNode, ...(Children.map(childElement.props.children, child => typeof child === 'string' ? React.createElement("span", null, child) : child) || []));
    return commonChildren;
}

class Button extends Component {
    static defaultProps = {
        type: 'default',
        size: 'medium',
        htmlType: 'button',
        bordered: true,
    };
    static Directive = ButtonDirective;
    render() {
        const { href, target, htmlType, type, size, block, disabled, loading, outline, bordered, icon, children, download, ...props } = this.props;
        return (React.createElement(ButtonDirective, { type: type, size: size, block: block, disabled: disabled, loading: loading, outline: outline, bordered: bordered, icon: icon }, href || target ? (React.createElement("a", { href: href || '', target: target, download: download, ...props }, children)) : (React.createElement("button", { type: htmlType, ...props }, children))));
    }
}

var GroupContext = createContext(null);

// 获取宽度
function getWidth(width) {
    if (typeof width === 'string' || typeof width === 'number') {
        return { width };
    }
    return {};
}

const shallowEqual = (newValue, oldValue) => newValue === oldValue;
const simpleIsEqual = (newArgs, lastArgs) => (newArgs.length === lastArgs.length &&
    newArgs.every((newArg, index) => shallowEqual(newArg, lastArgs[index])));
function memoize (resultFn, isEqual = simpleIsEqual) {
    let lastThis;
    let lastArgs = [];
    let lastResult;
    let calledOnce = false;
    const result = function (...newArgs) {
        if (calledOnce && lastThis === this && isEqual(newArgs, lastArgs)) {
            return lastResult;
        }
        lastResult = resultFn.apply(this, newArgs);
        calledOnce = true;
        lastThis = this;
        lastArgs = newArgs;
        return lastResult;
    };
    return result;
}

const GroupContextProvider = GroupContext.Provider;
class CheckboxGroup extends Component {
    static defaultProps = {
        isValueEqual: Object.is,
        value: [],
    };
    static contextType = DisabledContext;
    getGroupContext = memoize((maybeValue, disabled, readOnly, isValueEqual) => {
        let value;
        if (Array.isArray(maybeValue)) {
            value = maybeValue;
        }
        else {
            value = [];
        }
        return {
            value,
            disabled,
            readOnly,
            isValueEqual,
            onChange: this.onCheckboxChange,
        };
    });
    onCheckboxChange = (child) => {
        const { isValueEqual, onChange, value: prevValue } = this.props;
        if (!onChange) {
            return;
        }
        const value = prevValue ? prevValue.slice() : [];
        const index = value.findIndex(it => isValueEqual(it, child));
        if (index !== -1) {
            value.splice(index, 1);
        }
        else {
            value.push(child);
        }
        onChange(value);
    };
    render() {
        const { className, style, children, value, disabled = this.context.value, readOnly = false, isValueEqual, } = this.props;
        const classString = classnames('cjq-checkbox-group', className);
        return (React.createElement(GroupContextProvider, { value: this.getGroupContext(value, disabled, readOnly, isValueEqual) },
            React.createElement("div", { className: classString, style: style }, children)));
    }
}

function getReadOnly$1(groupCtx, props) {
    if (typeof props.readOnly === 'boolean') {
        return props.readOnly;
    }
    if (groupCtx) {
        return groupCtx.readOnly;
    }
    return false;
}
function getDisabled$1(disabledCtx, groupCtx, props) {
    if (typeof props.disabled === 'boolean') {
        return props.disabled;
    }
    if (groupCtx) {
        return groupCtx.disabled;
    }
    return disabledCtx.value;
}
function Checkbox(props) {
    const disabledCtx = useContext(DisabledContext);
    const groupCtx = useContext(GroupContext);
    const propsRef = useRef(props);
    propsRef.current = props;
    // onChange的值矫正
    const ctxOnChange = groupCtx && groupCtx.onChange;
    const onChange = useCallback(evt => {
        const { value, onChange } = propsRef.current;
        if (ctxOnChange) {
            ctxOnChange(value);
            return;
        }
        else if (onChange) {
            const e = Object.create(evt);
            e.target = {
                ...propsRef.current,
                type: 'checkbox',
                checked: evt.target.checked,
            };
            onChange(e);
        }
    }, [ctxOnChange]);
    const { className, style, children, indeterminate, width, value: _propsValue, labelStyle, onMouseEnter, onMouseLeave, ...others } = props;
    // readOnly的值矫正
    const readOnly = getReadOnly$1(groupCtx, props);
    // disabled的值矫正
    const disabled = getDisabled$1(disabledCtx, groupCtx, props);
    // checked的值矫正
    let checked;
    if (groupCtx) {
        const { value, isValueEqual } = groupCtx;
        checked = value.findIndex(it => isValueEqual(it, _propsValue)) !== -1;
    }
    else {
        checked = !!props.checked;
    }
    return (React.createElement("label", { className: classnames('cjq-checkbox-wrap', className, {
            'cjq-checkbox-checked': !!checked,
            'cjq-checkbox-disabled': disabled || readOnly,
            'cjq-checkbox-indeterminate': indeterminate,
        }), style: {
            ...style,
            ...getWidth(width),
        }, onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave },
        React.createElement("span", { className: 'cjq-checkbox' },
            React.createElement("span", { className: 'cjq-checkbox-inner' }),
            React.createElement("input", { ...others, type: "checkbox", checked: checked && !indeterminate, disabled: disabled, readOnly: readOnly, onChange: onChange })),
        children !== undefined &&
            children !== null &&
            children !== true &&
            children !== false ? (React.createElement("div", { className: "cjq-checkbox-label", style: labelStyle }, children)) : null));
}
Checkbox.Group = CheckboxGroup;

function makeEvent(event, props) {
    const e = Object.create(event);
    e.target = {
        ...props,
        type: 'radio',
        checked: event.target.checked
    };
    return e;
}
function useRadioHandler(ctx, props) {
    const propsRef = useRef(props);
    propsRef.current = props;
    const cxOnChange = ctx && ctx.onRadioChange;
    return useCallback((event) => {
        const e = makeEvent(event, propsRef.current);
        if (cxOnChange) {
            cxOnChange(e);
        }
        else {
            const { onChange } = propsRef.current;
            onChange && onChange(e);
        }
    }, [cxOnChange]);
}
function getDisabled(disabledCtx, groupCtx, props) {
    if (typeof props.disabled === 'boolean') {
        return props.disabled;
    }
    if (groupCtx && typeof groupCtx.disabled === 'boolean') {
        return groupCtx.disabled;
    }
    return disabledCtx.value;
}
function getReadOnly(groupCtx, props) {
    if (typeof props.readOnly === 'boolean') {
        return props.readOnly;
    }
    if (groupCtx) {
        return groupCtx.readOnly;
    }
    return false;
}
function getRadioState(disabledCtx, groupCtx, props) {
    const disabled = getDisabled(disabledCtx, groupCtx, props);
    const readOnly = getReadOnly(groupCtx, props);
    let checked;
    if (groupCtx) {
        checked = groupCtx.isValueEqual(groupCtx.value, props.value);
    }
    else {
        checked = !!props.checked;
    }
    return {
        disabled,
        readOnly,
        checked,
    };
}

const context = createContext(null);
context.displayName = 'RadioGroupContext';

function RadioGroup(props) {
    const disabledCtx = useContext(DisabledContext);
    const { value, disabled = disabledCtx.value, readOnly = false, isValueEqual = Object.is, className, style, children, onChange, } = props;
    const ctx = useMemo(() => ({
        value,
        disabled,
        readOnly,
        isValueEqual,
        onRadioChange: onChange
    }), [value, disabled, readOnly, isValueEqual, onChange]);
    return (React.createElement(context.Provider, { value: ctx },
        React.createElement("div", { className: classnames('cjq-radio-group', className), style: style }, children)));
}

function RadioButton(props) {
    const { className, style, children, value, width, onMouseEnter, onMouseLeave, ...others } = props;
    const disabledCtx = useContext(DisabledContext);
    const groupCtx = useContext(context);
    if (!groupCtx) {
        throw new Error('Radio.Button must be nested within Radio.Group');
    }
    const onChange = useRadioHandler(groupCtx, props);
    const { checked, disabled, readOnly } = getRadioState(disabledCtx, groupCtx, props);
    const classString = classnames(className, 'cjq-radio-button', {
        'cjq-radio-button--checked': !!checked,
        'cjq-radio-button--disabled': disabled || readOnly,
    });
    const widthStyle = getWidth(width);
    const wrapStyle = {
        ...style,
        ...widthStyle
    };
    return (React.createElement("label", { className: classString, style: wrapStyle, onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave },
        React.createElement("input", { ...others, type: 'radio', checked: !!checked, disabled: disabled, readOnly: readOnly, onChange: onChange }),
        React.createElement("span", { className: "cjq-radio-button__content" }, children)));
}

function Radio(props) {
    const { className, style, children, value, width, labelStyle, onMouseEnter, onMouseLeave, ...others } = props;
    const disabledCtx = useContext(DisabledContext);
    const groupCtx = useContext(context);
    const { checked, disabled, readOnly } = getRadioState(disabledCtx, groupCtx, props);
    const onChange = useRadioHandler(groupCtx, props);
    const classString = classnames(className, 'cjq-radio-wrap', {
        'cjq-radio-checked': !!checked,
        'cjq-radio-disabled': disabled || readOnly,
    });
    const widthStyle = getWidth(width);
    const wrapStyle = {
        ...style,
        ...widthStyle,
    };
    return (React.createElement("label", { className: classString, style: wrapStyle, onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave },
        React.createElement("span", { className: 'cjq-radio' },
            React.createElement("span", { className: 'cjq-radio-inner' }),
            React.createElement("input", { ...others, type: 'radio', checked: !!checked, disabled: disabled, readOnly: readOnly, onChange: onChange })),
        children !== undefined && (React.createElement("span", { className: 'cjq-radio-label', style: labelStyle }, children))));
}
Radio.Button = RadioButton;
Radio.Group = RadioGroup;

// 阻止默认事件
function preventOpenLink(event) {
    event.preventDefault();
    event.stopPropagation();
}
const Link = forwardRef((props, ref) => {
    const disabledContext = useContext(DisabledContext);
    const { className, disabled = disabledContext.value, weak = false, onClick, ...rest } = props;
    return (React.createElement("a", { ...rest, className: classnames(className, 'cjq-link', {
            'cjq-link--disabled': disabled,
            'cjq-link--weak': weak,
        }), ref: ref, onClick: disabled ? preventOpenLink : onClick }));
});
Link.displayName = 'Link';

export { Button, Checkbox, DisabledContext, Icon, Link, Radio };