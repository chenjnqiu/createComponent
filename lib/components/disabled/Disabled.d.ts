import React from 'react';
export interface IDisabledProps {
    value?: boolean;
}
export interface IDisabledContext {
    value: boolean;
}
export declare const DisabledContext: React.Context<IDisabledContext>;
declare const Disabled: React.FC<IDisabledProps>;
export default Disabled;
