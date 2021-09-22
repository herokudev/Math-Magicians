import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
    };
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler(e) {
    this.setState((state) => calculate(state, e.target.innerHTML));
  }

  render() {
    const utilLabels = ['AC', '+/-', '%'];
    const digitLabels = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '.'];
    const operatorLabels = ['÷', 'x', '-', '+', '='];
    const { total, next } = this.state;

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
  }
}

export default Calculator;
