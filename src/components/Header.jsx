import React, { Component } from 'react';
import Button from './Button';
import Instructions from './Instructions';
import Statistics from './Statistics';
import instructions from '@icons/instructions.svg'
import statistics from '@icons/statistics.svg'
import light from '@icons/light.svg'
import dark from '@icons/dark.svg'
import '@styles/Header.scss';

class Header extends Component {
    state = {
        dark : false,
        isOpenInstructions: false,
        isOpenStatistics: false
    };
    
    toggleDark = () => {
        this.setState({dark : !this.state.dark})
    }

    openInstructions = () => {
      this.setState({
        isOpenInstructions: !this.state.isOpenInstructions
      });
    }
    openStatistics = () => {
      this.setState({
        isOpenStatistics: !this.state.isOpenStatistics
      });
    }

    render() {
        const mode = this.state.dark === true ? "modeDark" : "modeLight";
        return (
            <div className="Header">
                <Button icon={instructions} action={this.openInstructions}/>
                <h1>WORDLE</h1>
                <Button icon={statistics} action={this.openStatistics}/>
                <div className="Header-mode" onClick={this.toggleDark}>
                    <img src={light} alt="modo diurno" className={"light " + mode} />
                    <img src={dark} alt="modo nocturno" className={"dark " + mode} />
                    <div className={mode} ></div>
                </div>
                <Instructions open={this.state.isOpenInstructions} action={this.openInstructions}/>
                <Statistics open={this.state.isOpenStatistics} action={this.openStatistics}/>
            </div>
        );
    }
}

export default Header;