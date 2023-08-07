import React from 'react';
import './style.css';
import Display from './child';

function Calculator() {
  return (
    <div className="body">
      <Display value="0" />
      <div className="btns">
        <div className="row-btns">
          <button className="btn" type="button">
            AC
          </button>
          <button className="btn" type="button">
            +/-
          </button>
          <button className="btn" type="button">
            %
          </button>
          <button className="operator-btn" type="button">
            ÷
          </button>
        </div>
        <div className="row-btns">
          <button className="btn" type="button">
            7
          </button>
          <button className="btn" type="button">
            8
          </button>
          <button className="btn" type="button">
            9
          </button>
          <button className="operator-btn" type="button">
            x
          </button>
        </div>
        <div className="row-btns">
          <button className="btn" type="button">
            4
          </button>
          <button className="btn" type="button">
            5
          </button>
          <button className="btn" type="button">
            6
          </button>
          <button className="operator-btn" type="button">
            +
          </button>
        </div>
        <div className="row-btns">
          <button className="btn" type="button">
            1
          </button>
          <button className="btn" type="button">
            2
          </button>
          <button className="btn" type="button">
            3
          </button>
          <button className="operator-btn" type="button">
            -
          </button>
        </div>
        <div className="row-btns">
          <button className="zero" type="button">
            0
          </button>
          <button className="btn" type="button">
            .
          </button>
          <button className="operator-btn" type="button">
            =
          </button>
        </div>
      </div>
    </div>
  );
}
export default Calculator;
