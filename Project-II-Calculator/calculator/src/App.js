import React, {Component } from 'react';
import math from 'mathjs';
import './App.css';

import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ButtonContainer from './components/ButtonComponents/ButtonContainer';

class App extends Component {
  constructor() {
    super()
    this.state = { total: 0 }
    this.equation = []

    this.displayButton = this.displayButton.bind(this)
    this.calculate = this.calculate.bind(this)
  }

  displayButton(e) {
    switch (e.currentTarget.textContent) {
      case 'clear':
        this.setState({ total: 0 })
        this.equation = []
        break
      case 'x':
        this.equation.push('*')
        this.setState({ total: this.equation })
        break
      case '÷':
        this.equation.push('/')
        this.setState({ total: this.equation })
        break
      case '=':
        let answer = this.calculate(this.equation) 
        this.setState({ total: answer })
        this.equation = []
        this.equation.push(answer)
        break
      default:
        this.equation.push(e.currentTarget.textContent)
        this.setState({ total: this.equation })
    }
  }

  calculate(arr) {
    let answer = math.eval(arr.join(''))
    if (answer >= 100000) {
      return answer.toExponential()
    } else if ((answer % 1) === 0) {
      return answer 
    } else {
      return +parseFloat(answer).toFixed(5)
    }
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
