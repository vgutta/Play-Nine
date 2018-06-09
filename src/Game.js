import React from 'react';
//import _ from 'lodash';
import Stars from './Stars';
import Button from './Button';
import Answer from './Answer';
import Numbers from './Numbers';
import DoneFrame from './DoneFrame';

class Game extends React.Component {
    state = {
        selectedNumbers: [],
        randomNumOfStars: 1 + Math.floor(Math.random()*9),
        usedNumbers: [],
        answerIsCorrect: null,
        redraws: 5,
        doneStatus: null,
    };

    selectNumber = (clickedNumber) => {
        if (this.state.selectedNumbers.indexOf(clickedNumber) >= 0) {return;}
        this.setState(prevState => ({
            answerIsCorrect: null,
            selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
        }));
    };

    deSelectNumber = (clickedNumber) => {
        this.setState(prevState => ({
            answerIsCorrect: null,
            selectedNumbers: prevState.selectedNumbers
                .filter(number => number !== clickedNumber)
        }));
    };

    checkAnswer = () => {
        this.setState(prevState => ({
            answerIsCorrect: prevState.randomNumOfStars ===
            prevState.selectedNumbers.reduce((acc, n) => acc + n, 0)
        }));
    };

    acceptAnswer = () => {
        console.log("answer reset");
        this.setState(prevState => ({
            usedNumbers: prevState.usedNumbers.concat(prevState.selectedNumbers),
            selectedNumbers: [],
            answerIsCorrect: null,
            randomNumOfStars: 1 + Math.floor(Math.random()*9),
        }))
    };

    redraw = () => {
        if (this.state.redraws === 0){ return;}
        this.setState(prevState => ({
            randomNumOfStars: 1 + Math.floor(Math.random()*9),
            answerIsCorrect: null,
            selectedNumbers: [],
            redraws: prevState.redraws - 1,
        }));
    };
    
    render () {
        return (
            <div>
                <br /> <br />
                <h1> Play Nine </h1>
                <hr />
                <div className="row">
                    <Stars numberOfStars={this.state.randomNumOfStars}/>
                    <Button selectedNumbers={this.state.selectedNumbers} 
                        answerIsCorrect={this.state.answerIsCorrect}
                        acceptAnswer={this.acceptAnswer} 
                        checkAnswer={this.checkAnswer}
                        redraw={this.redraw}
                        redraws={this.state.redraws} />
                    <Answer selectedNumbers={this.state.selectedNumbers}
                        unSelectNumber={this.deSelectNumber} />
                </div>
                <br />
                {this.state.doneStatus ?
                    <DoneFrame doneStatus={this.state.doneStatus}/>:
                    <Numbers selectedNumbers={this.state.selectedNumbers}
                        selectNumber={this.selectNumber}
                        usedNumbers={this.state.usedNumbers} /> 
                }
                <br />
            </div>
        );
    }
}

export default Game;