// Button.jsx
import React from 'react';

const Button = ({ onClickButton, children }) => {
    console.log('子组件重新render')
    return (
        <>
            <button onClick={onClickButton}>{children}</button>
            <span>{Math.random()}</span>
        </>
    );
};

export default React.memo(Button);
