import React, { Component } from 'react';
import Letter from './Letter';
import Instructions from './Instructions';
import Statistics from './Statistics';
import '@styles/Content.scss';
import Keyboard from '../components/Keyboard';

class Content extends Component {
    state = {
        arrays : [['', '', '' , '', ''], ['', '', '' , '', ''], ['', '', '' , '', ''], ['', '', '' , '', ''], ['', '', '' , '', '']],
        arraysColors : [['', '', '' , '', ''], ['', '', '' , '', ''], ['', '', '' , '', ''], ['', '', '' , '', ''], ['', '', '' , '', '']],
        indexRow: 0,
        indexColumn: 0,
        games: 0,
        wins: 0,
        openStatistics: false
    }
    render() {
        var {arrays, arraysColors, indexRow, indexColumn, games, wins, openStatistics} = this.state
        const {wordToPlay} = this.props

        const enterLetter = (letter) => {
            let copyArrays = arrays;
            if (letter !== '' && letter !== 'ENTER') {
                copyArrays[indexRow][indexColumn] = letter;
                if (indexColumn < 4) {
                    this.setState({arrays: copyArrays, indexColumn: indexColumn + 1});
                } else if (indexColumn === 4) {
                    this.setState({arrays: copyArrays, indexColumn: 4});
                }
            } else {
                if (letter === 'ENTER') {
                    if (indexColumn === 4) {
                        this.setState({indexRow: indexRow + 1, indexColumn: 0});
                        validateWord()
                        if (indexRow === 4) {
                        this.setState({games: games + 1});
                            setTimeout(() => {
                                alert("Game over");
                                this.setState({openStatistics: !openStatistics});

                            }, 1000);
                        }
                    } else {
                        alert("Ingresa 5 letras antes de validar")
                    }
                }
                if (letter === '') {
                    if (copyArrays[indexRow][indexColumn] === '') {
                        if (indexColumn === 0) {
                            copyArrays[indexRow][0] = '';
                            this.setState({arrays: copyArrays, indexColumn: 0});
                        } else if (indexColumn > 0){
                            copyArrays[indexRow][indexColumn-1] = '';
                            this.setState({arrays: copyArrays, indexColumn: indexColumn - 1});
                        }
                    } else {
                        if (indexColumn === 0) {
                            copyArrays[indexRow][0] = '';
                            this.setState({arrays: copyArrays, indexColumn: 0});
                        } else if (indexColumn > 0){
                            copyArrays[indexRow][indexColumn] = '';
                            this.setState({arrays: copyArrays});
                        }
                    }
                    
                }
            }
        }
        console.log(wordToPlay);

        const renderLetter = arrays.map((array, index) => {
            return(
                array.map((letter, i) => {
                    let color = arraysColors[index][i]
                    return(
                        <Letter key={index + '.' + i} letter={letter} color={color} />
                    )
                })
            )
        })

        const validateWord = () => {
            let copyArraysColors = arraysColors;
            const row = arrays[indexRow];
            const word = wordToPlay.toUpperCase().split("");
            let correctLetters = 0
            row.map((letter, i) => {
                if (indexColumn === 4) {
                    if (letter === word[i]) {
                        copyArraysColors[indexRow][i] = "green";
                        correctLetters ++; 
                        this.setState({arraysColors: copyArraysColors});
                    } else {
                        if (word.indexOf(letter) !== -1) {
                            copyArraysColors[indexRow][i] = "yellow";
                            this.setState({arraysColors: copyArraysColors});
                        } else {
                            copyArraysColors[indexRow][i] = "gray";
                            this.setState({arraysColors: copyArraysColors});
                        }
                    }
                }
            });
            if (correctLetters === 5) {
                this.setState({wins: wins + 1, games: games + 1});
                setTimeout(() => {
                    alert("Has ganado");
                    this.setState({openStatistics: !openStatistics});
                }, 1000);
                
            }
        }
        
        
        return (
            <div>
                <div className="content-grid">
                    {renderLetter}
                </div>
			    <Keyboard enterLetter={enterLetter}/>
                <Instructions />
                {
                    openStatistics === true &&
                    <Statistics wins={wins} games={games} open={true}/>
                }
            </div>
        );
    }
}

export default Content;