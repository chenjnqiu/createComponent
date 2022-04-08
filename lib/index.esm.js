import * as React from 'react';

const Button = ({ buttonWord = 'defaultWord' }) => {
    return React.createElement("div", { className: "kikko-button" }, buttonWord);
};

export { Button as Test };
