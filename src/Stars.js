import React from 'react';
import './Stars.css';
import _ from 'lodash';

const Stars = (props) => {

    const numberOfStars = Math.floor(Math.random()*9);

    let stars = _.range(numberOfStars);

    return (
        <div className="col-5">
            {stars.map(i => 
                <i key={i} className="fa fa-star"></i>
            )}
        </div>
    );
}

export default Stars;