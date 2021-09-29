import { render, fireEvent, screen } from '@testing-library/react';
import Button from './Button';

describe('Button component', () => {
  describe('Use Jest snapshots to test the Button component', () => {
    it('renders a button with the correct label', () => {
      const actionHandlerMock = jest.fn(() => {});
      const { asFragment } = render(<Button action={actionHandlerMock} label="Button Label" cssClass="default-class" cssStyle={{ gridArea: 'grid-1' }} />);
      expect(asFragment()).toMatchSnapshot();
    });
  });
  describe('Simulate user interaction with Button component', () => {
    it('calls the action prop function when user clicks on it', () => {
      const actionHandlerMock = jest.fn(() => {});
      render(<Button action={actionHandlerMock} label="Button Label" cssClass="default-class" cssStyle={{ gridArea: 'grid-1' }} />);
      fireEvent.click(screen.getByText('Button Label'));
      expect(actionHandlerMock.mock.calls.length).toBe(1);
    });
  });
});
