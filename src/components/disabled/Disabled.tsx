import React, { createContext, useMemo } from 'react';

export interface IDisabledProps {
    value?: boolean;
}

export interface IDisabledContext {
    value: boolean;
}

export const DisabledContext = createContext<IDisabledContext>({
    value: false
})

DisabledContext.displayName = 'DisabledContext'

const Disabled: React.FC<IDisabledProps> = ({
    value = true,
    children,
}) => {
    const ctx = useMemo(() => ({
        value,
      }), [value])
      
    return (<DisabledContext.Provider value={ctx}>{children}</DisabledContext.Provider>)
}
export default Disabled