import React, {Component } from 'react';
import './App.css';

import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ButtonContainer from './components/ButtonComponents/ButtonContainer';

class App extends Component {
  constructor() {
    super()
    this.state = { total: 0 }
    this.displayButton = this.displayButton.bind(this)
  }

  displayButton(e) {
    console.log(e.currentTarget.textContent)
    this.setState({ total: e.currentTarget.textContent })
  }

  render() {
    return (
      <div className="App">
        <CalculatorDisplay elemStyle='calc-display' text={this.state.total} />
        <ButtonContainer onDisplayButton={this.displayButton}/>
      </div>
    )
  }
};

export default App;
