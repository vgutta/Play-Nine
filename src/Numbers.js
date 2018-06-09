import React from 'react';
import './Number.css';
import _ from 'lodash';

const Numbers = (props) => {

    const numberClassname = (number) => {
        if(props.selectedNumbers.indexOf(number) >= 0){
            return 'selected';
        }
    }
    
    return (
        <div className="card text-center">
            <div>

                {Numbers.list.map((number, i) => 
                    <span key={i} className={numberClassname(number)}
                        onClick={() => props.selectNumber(number)}>{number}</span>
                )}
            </div>
        </div>
    );
}
Numbers.list = _.range(1, 10);

export default Numbers;