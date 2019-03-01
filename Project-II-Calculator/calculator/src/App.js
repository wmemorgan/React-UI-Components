import React from 'react';
import './App.css';

import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ButtonContainer from './components/ButtonComponents/ButtonContainer';

const App = () => {
  return (
    <div className="App">
      <CalculatorDisplay elemStyle='calc-display' text='0'/>
      <ButtonContainer />
    </div>
  );
};

export default App;
