import React from 'react';
import '@styles/Instructions.scss';

const Statistics = (props) => {
    const open = props.open ? "is-open" : undefined;
    return (
        <div className={"instructions " + open}>
            <div className="instructions-container">
                <h1>Estadísticas</h1>
                <div className="instructions-statistics">
                    <div>
                        <h1>{props.games}</h1>
                        <p>Jugadas</p> 
                    </div>
                    <div>
                        <h1>{props.wins}</h1>
                        <p>Victorias</p> 
                    </div>
                </div>
                
                <div className="instruction-button__container">
                    <p>¡SIGUIENTE PALABRA</p>
                    <div onClick={props.action} className="instruction-button">Aceptar</div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;