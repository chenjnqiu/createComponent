import { IRadioEvent } from './AbstractRadio';
export interface IRadioContext<Value> {
    value: Value | undefined;
    isValueEqual(a: Value | undefined, b: Value | undefined): boolean;
    disabled: boolean;
    readOnly: boolean;
    onRadioChange: ((e: IRadioEvent<Value>) => void) | null | undefined;
}
declare const context: import("react").Context<IRadioContext<any>>;
export default context;
