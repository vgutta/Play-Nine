import React, { Component } from 'react';
import _ from 'lodash';
import './App.css';
import Game from './Game';
//import Numbers from './Number';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Game />
      </div>
    );
  }
}

export default App;
