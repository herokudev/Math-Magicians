import { BrowserRouter as Router } from 'react-router-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import NavBar from './NavBar';

describe('NavBar component', () => {
  it('NavBar snapshot test', () => {
    const { asFragment: navBar } = render(
      <Router>
        <NavBar />
      </Router>,
    );

    expect(navBar()).toMatchSnapshot();
  });

  describe('NavBar interaction tests', () => {
    it('adds \'active-link\' class to the selected NavLink', () => {
      render(
        <Router>
          <NavBar />
        </Router>,
      );
      const calculatorLink = screen.getByText('Calculator');
      expect(calculatorLink.className).toEqual('');
      fireEvent.click(calculatorLink);
      expect(calculatorLink.className).toEqual('active-link');
    });
  });
});
