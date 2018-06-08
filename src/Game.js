import React from 'react';
import Stars from './Stars';
import Button from './Button';
import Answer from './Answer';
import Numbers from './Numbers';

class Game extends React.Component {
    render () {
        return (
            <div>
                <h3> Play Nine </h3>
                <hr />
                <div className="row">
                    <Stars />
                    <Button />
                    <Answer />
                </div>
                <Numbers />
                <hr />
            </div>
        );
    }
}

export default Game;