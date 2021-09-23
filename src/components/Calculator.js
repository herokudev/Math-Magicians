import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState(
    {
      total: null,
      next: null,
    },
  );

  const onClickHandler = (e) => {
    setState((state) => calculate(state, e.target.innerHTML));
  };

  const utilLabels = ['AC', '+/-', '%'];
  const digitLabels = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '.'];
  const operatorLabels = ['÷', 'x', '-', '+', '='];
  const { total, next } = state;

  const utils = utilLabels.map(
    (utilLabel, index) => (
      <button
        type="button"
        key={`${utilLabel}`}
        style={{ gridArea: `util-${index}` }}
        className="util"
        onClick={this.onClickHandler}
      >
        {utilLabel}
      </button>
    ),
  );
  const digits = digitLabels.map(
    (digitLabel, index) => (
      <button
        type="button"
        key={`${digitLabel}`}
        style={{ gridArea: `digit-${index}` }}
        className="digit"
        onClick={this.onClickHandler}
      >
        {digitLabel}
      </button>
    ),
  );
  const operators = operatorLabels.map(
    (operatorLabel, index) => (
      <button
        type="button"
        key={`${operatorLabel}`}
        style={{ gridArea: `operator-${index}` }}
        className="operator"
        onClick={this.onClickHandler}
      >
        {operatorLabel}
      </button>
    ),
  );
  return (
    <div className="grid">
      <div style={{ gridArea: 'display' }} className="display">{ next || total || '0' }</div>
      {utils}
      {digits}
      {operators}
    </div>
  );
};

export default Calculator;
