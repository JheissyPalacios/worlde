import React from 'react';
import deleteIcon from '@icons/delete.svg';

const Letter = (props) => {
    return (
        <div onClick={props.tapLetter} className={"letter " + props.color + ' ' + props.letter}>
            {
                props.letter !== 'DELETE' ?
                    props.letter :
                    <img src={deleteIcon} alt="eliminar letra" />
            }
        </div>
    );
};

export default Letter;