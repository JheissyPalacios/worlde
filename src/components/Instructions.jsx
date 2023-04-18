import React from 'react';
import Letter from './Letter';
import '@styles/Instructions.scss';

const Instructions = (props) => {
    const open = props.open ? "is-open" : undefined;
    return (
        <div className={"instructions " + open}>
            <div className="instructions-container">
                <h1>Cómo Jugar</h1>
                <p> Adivina la palabra oculta en cinco intentos. </p> 
                <p> Cada intento debe ser una palabra válida de 5 letras. </p> 
                <p> Después de cada intento el color de las letras cambia para mostrar qué tan cerca estás de acertar la palabra. </p>
                <p><b>Ejemplos</b></p>
                <div className="instructions-letters">
                    <Letter letter="G" color="green"/>
                    <Letter letter="A" color="white"/>
                    <Letter letter="T" color="white"/>
                    <Letter letter="O" color="white"/>
                    <Letter letter="S" color="white"/>
                </div>
                <p>La letra <b>G</b> está en la palabra y en la posición correcta.</p>
                <div className="instructions-letters">
                    <Letter letter="V" color="white"/>
                    <Letter letter="O" color="white"/>
                    <Letter letter="C" color="yellow"/>
                    <Letter letter="A" color="white"/>
                    <Letter letter="L" color="white"/>
                </div>
                <p>La letra <b>C</b> está en la palabra pero en la posición incorrecta.</p>
                <div className="instructions-letters">
                    <Letter letter="C" color="white"/>
                    <Letter letter="A" color="white"/>
                    <Letter letter="N" color="white"/>
                    <Letter letter="T" color="white"/>
                    <Letter letter="O" color="gray"/>
                </div>
                <p>La letra <b>O</b> no está en la palabra.</p>
                <p>Puede haber letras repetidas. Las pistas son independientes para cada letra.</p>
                
                <div className="instruction-button__container">
                    <p>¡Una palabra nueva cada 5 minutos!</p>
                    <div onClick={props.action} className="instruction-button">!JUGAR¡</div>
                </div>
            </div>
        </div>
    );
};

export default Instructions;