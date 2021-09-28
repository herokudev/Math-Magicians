import { useState } from 'react';
import Button from './Button';
import calculate from '../logic/calculate';
import './Calculator.css';

const Calculator = () => {
  const [state, setState] = useState(
    {
      total: null,
      next: null,
    },
  );

  const onClickHandler = (e) => {
    const { total, next } = state;
    if (!total && !next && e.target.classList.contains('operator')) return null;
    setState((state) => calculate(state, e.target.innerHTML));
    return null;
  };

  const utilLabels = ['AC', '+/-', '%'];
  const digitLabels = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.'];
  const operatorLabels = ['÷', 'x', '-', '+', '='];
  const { total, next } = state;

  const utils = utilLabels.map(
    (utilLabel, index) => (
      <Button
        key={`${utilLabel}`}
        cssStyle={{ gridArea: `util-${index}` }}
        cssClass="util"
        action={onClickHandler}
        label={utilLabel}
      />
    ),
  );
  const digits = digitLabels.map(
    (digitLabel, index) => (
      <Button
        key={`${digitLabel}`}
        cssStyle={{ gridArea: `digit-${index}` }}
        cssClass="digit"
        action={onClickHandler}
        label={digitLabel}
      />
    ),
  );
  const operators = operatorLabels.map(
    (operatorLabel, index) => (
      <Button
        key={`${operatorLabel}`}
        cssStyle={{ gridArea: `operator-${index}` }}
        cssClass="operator"
        action={onClickHandler}
        label={operatorLabel}
      />
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
