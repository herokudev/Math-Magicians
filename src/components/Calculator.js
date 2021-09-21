/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class Calculator extends React.Component {
  render() {
    const utilLabels = ['AC', '+/-', '%'];
    const digitLabels = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '.'];
    const operatorLabels = ['/', 'x', '-', '+', '='];

    const utils = utilLabels.map((utilLabel, index) => <div id={`util-${index}`} key={`${utilLabel}`} className="util">{utilLabel}</div>);
    const digits = digitLabels.map((digitLabel, index) => <div key={`${digitLabel}`} id={`digit-${index}`} className="digit">{digitLabel}</div>);
    const operators = operatorLabels.map((operatorLabel, index) => <div id={`operator-${index}`} key={`${operatorLabel}`} className="operator">{operatorLabel}</div>);
    return (
      <div className="grid">
        <div className="display">0</div>
        {utils}
        {digits}
        {operators}
      </div>
    );
  }
}

export default Calculator;
