import React from 'react';
import './Number.css';
import _ from 'lodash';

const Numbers = (props) => {

    const arrayOfNumbers = _.range(1, 10);



    return (
        <div className="card text-center">
            <div>

                {arrayOfNumbers.map((number, i) => 
                    <span key={i}>{number}</span>
                )}
            </div>
        </div>
    );
}

export default Numbers;