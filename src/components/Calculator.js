import React, { useState } from 'react';
import './style.css';
import Display from './child';
import calculate from '../logic/calculate';

function Calculator() {
  const [calculatorData, setCalculatorData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleBtnClick = (buttonName) => {
    setCalculatorData(calculate(calculatorData, buttonName));
  };
  return (
    <div className="body">
      <Display value={calculatorData.next || calculatorData.total || '0'} />
      <div className="btns">
        <div className="row-btns">
          <button className="btn" type="button" onClick={() => handleBtnClick('AC')}>
            AC
          </button>
          <button className="btn" type="button" onClick={() => handleBtnClick('+/-')}>
            +/-
          </button>
          <button className="btn" type="button" onClick={() => handleBtnClick('%')}>
            %
          </button>
          <button className="operator-btn" type="button" onClick={() => handleBtnClick('÷')}>
            ÷
          </button>
        </div>
        <div className="row-btns">
          <button className="btn" type="button" onClick={() => handleBtnClick('7')}>
            7
          </button>
          <button className="btn" type="button" onClick={() => handleBtnClick('8')}>
            8
          </button>
          <button className="btn" type="button" onClick={() => handleBtnClick('9')}>
            9
          </button>
          <button className="operator-btn" type="button" onClick={() => handleBtnClick('x')}>
            x
          </button>
        </div>
        <div className="row-btns">
          <button className="btn" type="button" onClick={() => handleBtnClick('4')}>
            4
          </button>
          <button className="btn" type="button" onClick={() => handleBtnClick('5')}>
            5
          </button>
          <button className="btn" type="button" onClick={() => handleBtnClick('6')}>
            6
          </button>
          <button className="operator-btn" type="button" onClick={() => handleBtnClick('+')}>
            +
          </button>
        </div>
        <div className="row-btns">
          <button className="btn" type="button" onClick={() => handleBtnClick('1')}>
            1
          </button>
          <button className="btn" type="button" onClick={() => handleBtnClick('2')}>
            2
          </button>
          <button className="btn" type="button" onClick={() => handleBtnClick('3')}>
            3
          </button>
          <button className="operator-btn" type="button" onClick={() => handleBtnClick('-')}>
            -
          </button>
        </div>
        <div className="row-btns">
          <button className="zero" type="button" onClick={() => handleBtnClick('0')}>
            0
          </button>
          <button className="btn" type="button" onClick={() => handleBtnClick('.')}>
            .
          </button>
          <button className="operator-btn" type="button" onClick={() => handleBtnClick('=')}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}
export default Calculator;
