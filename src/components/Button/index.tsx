import * as React from 'react';

interface ButtonProps {
    buttonWord: string
}

const Button = ({ buttonWord = 'defaultWord' }: ButtonProps) => {
    return <div className="kikko-button">测试{buttonWord}</div>
}
export default Button