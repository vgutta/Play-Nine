import React from 'react';

const DoneFrame = (props) => {
    return (
        <div>
            <h2>{props.doneStatus}</h2>
            <button className="btn btn-secondary" onClick={props.resetGame}>
                Play again
            </button>
        </div>
    );
}

export default DoneFrame;