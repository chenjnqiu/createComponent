export interface ICheckboxContext<Value> {
    value: Value[];
    disabled?: boolean;
    readOnly?: boolean;
    isValueEqual: (a: Value, b: Value) => boolean;
    onChange: (value: Value) => void;
}
declare const _default: import("react").Context<ICheckboxContext<any>>;
export default _default;
