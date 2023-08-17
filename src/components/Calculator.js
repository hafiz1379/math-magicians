import React, { useState } from 'react';
import './Calculator.css';
import Display from './chiled';
import calculate from '../logic/calculate';

function Calculator() {
  const [calculatorData, setCalculatorData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (buttonName) => {
    setCalculatorData(calculate(calculatorData, buttonName));
  };

  return (
    <div className="calculator">
      <Display value={calculatorData.next || calculatorData.total || '0'} />
      <div className="buttons">
        <div className="row">
          <button
            type="button"
            className="button AC"
            onClick={() => handleClick('AC')}
          >
            AC
          </button>
          <button
            type="button"
            className="button"
            onClick={() => handleClick('+/-')}
          >
            +/-
          </button>
          <button
            type="button"
            className="button"
            onClick={() => handleClick('%')}
          >
            %
          </button>
          <button
            type="button"
            className="button-operator"
            onClick={() => handleClick('÷')}
          >
            ÷
          </button>
        </div>
        <div className="row">
          <button
            type="button"
            className="button"
            onClick={() => handleClick('7')}
          >
            7
          </button>
          <button
            type="button"
            className="button"
            onClick={() => handleClick('8')}
          >
            8
          </button>
          <button
            type="button"
            className="button"
            onClick={() => handleClick('9')}
          >
            9
          </button>
          <button
            type="button"
            className="button-operator"
            onClick={() => handleClick('x')}
          >
            ×
          </button>
        </div>
        <div className="row">
          <button
            type="button"
            className="button"
            onClick={() => handleClick('4')}
          >
            4
          </button>
          <button
            type="button"
            className="button"
            onClick={() => handleClick('5')}
          >
            5
          </button>
          <button
            type="button"
            className="button"
            onClick={() => handleClick('6')}
          >
            6
          </button>
          <button
            type="button"
            className="button-operator"
            onClick={() => handleClick('-')}
          >
            -
          </button>
        </div>
        <div className="row">
          <button
            type="button"
            className="button"
            onClick={() => handleClick('1')}
          >
            1
          </button>
          <button
            type="button"
            className="button"
            onClick={() => handleClick('2')}
          >
            2
          </button>
          <button
            type="button"
            className="button"
            onClick={() => handleClick('3')}
          >
            3
          </button>
          <button
            type="button"
            className="button-operator"
            onClick={() => handleClick('+')}
          >
            +
          </button>
        </div>
        <div className="row">
          <button
            type="button"
            className="zero"
            onClick={() => handleClick('0')}
          >
            0
          </button>
          <button
            type="button"
            className="button"
            onClick={() => handleClick('.')}
          >
            .
          </button>
          <button
            type="button"
            className="button-operator"
            onClick={() => handleClick('=')}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
