import { render, fireEvent, screen } from '@testing-library/react';
import Calculator from './Calculator';

describe('Calculator component', () => {
  it('Calculator snapshot test', () => {
    const { asFragment: calculator } = render(<Calculator />);
    expect(calculator()).toMatchSnapshot();
  });
  describe('Calculator interaction tests', () => {
    let display;
    beforeEach(() => {
      const { container } = render(<Calculator />);
      display = container.querySelector('.display');
    });
    it('test interaction: 50.1 + 50 = 100.1, then press AC', () => {
      ['5', '0', '.', '1'].forEach((input) => {
        fireEvent.click(screen.getByText(input));
      });
      expect(display.innerHTML).toEqual('50.1');
      ['+', '5', '0', '='].forEach((input) => {
        fireEvent.click(screen.getByText(input));
      });
      expect(display.innerHTML).toEqual('100.1');
      fireEvent.click(screen.getByText('AC'));
      expect(display.innerHTML).toEqual('0');
    });
    it('test nonsensical interaction: + % =, should do nothing', () => {
      ['+', '%', '='].forEach((input) => {
        fireEvent.click(screen.getByText(input));
      });
      expect(display.innerHTML).toEqual('0');
    });
    it('test math error interaction: 1 % 0 prints `Can\'t divide by zero', () => {
      ['1', '÷', '0', '='].forEach((input) => {
        fireEvent.click(screen.getByText(input));
      });
      expect(display.innerHTML).toEqual("Can't divide by 0.");
    });
  });
});
