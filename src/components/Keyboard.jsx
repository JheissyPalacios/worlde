import React, { Component } from 'react';
import Letter from './Letter';
import '@styles/Keyboard.scss';

class Keyboard extends Component {
    state = {
        firstLine : ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
        secondLine : ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ñ"],
        thirdLine : ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "DELETE"],
        colorBox: 'mediumGray',
    }
    render() {
        var {enterLetter} = this.props
        const keyboardComplete = [this.state.firstLine, this.state.secondLine, this.state.thirdLine]
        const tapLetter = (e) => {
            const letter = e.target.innerText
            enterLetter(letter)
        }
        const keyboard = keyboardComplete.map((keyboardLine, index) => {
            return(
                <div className={"keyboard-line line" + index}>
                    { keyboardLine.map((letter, i) => {
                        return(
                            <Letter tapLetter={tapLetter} color={this.state.colorBox} key={index + 'Line.' + i} letter={letter} active={this.state.isActive}/>
                        )
                    })}
                </div>
            )
        })
        return (
            <div className="keyboard">
                {keyboard}
            </div>
        );
    }
}

export default Keyboard;