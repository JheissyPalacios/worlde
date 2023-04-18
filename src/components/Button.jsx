import React from 'react';

const Button = (props) => {
    return (
        <div onClick={props.action}>
            <img src={props.icon} />
        </div>
    );
};

export default Button;