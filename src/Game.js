import React from 'react';
//import _ from 'lodash';
import Stars from './Stars';
import Button from './Button';
import Answer from './Answer';
import Numbers from './Numbers';

class Game extends React.Component {
    state = {
        selectedNumbers: [],
        randomNumOfStars: Math.floor(Math.random()*9),
    };

    selectNumber = (clickedNumber) => {
        if (this.state.selectedNumbers.indexOf(clickedNumber) >= 0) {return;}
        this.setState(prevState => ({
            selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
        }));
    };

    deSelectNumber = (clickedNumber) => {
        this.setState(prevState => ({
            selectedNumbers: prevState.selectedNumbers
                .filter(number => number !== clickedNumber)
        }));
    }
    
    render () {
        console.log(Numbers.list);
        return (
            <div>
                <h3> Play Nine </h3>
                <hr />
                <div className="row">
                    <Stars numberOfStars={this.state.randomNumOfStars}/>
                    <Button selectedNumbers={this.state.selectedNumbers} />
                    <Answer selectedNumbers={this.state.selectedNumbers}
                        unSelectNumber={this.deSelectNumber} />
                </div>
                <Numbers selectedNumbers={this.state.selectedNumbers}
                        selectNumber={this.selectNumber} />
                <hr />
            </div>
        );
    }
}

export default Game;