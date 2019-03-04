import React, {Component } from 'react';
import './App.css';

import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ButtonContainer from './components/ButtonComponents/ButtonContainer';

class App extends Component {
  constructor() {
    super()
    this.state = { total: 0 }
  }

  render() {
    return (
      <div className="App">
        <CalculatorDisplay elemStyle='calc-display' text={this.state.total} />
        <ButtonContainer />
      </div>
    )
  }
};

export default App;
