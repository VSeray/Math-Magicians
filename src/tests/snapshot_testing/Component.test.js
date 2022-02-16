import TestRenderer from 'react-test-renderer';
import { render, fireEvent, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Calculator from '../../Component/Calculator';
import Header from '../../Component/Header';
import Navbar from '../../Component/Navbar';
import Button from '../../Component/Button';
import View from '../../Component/View';
import Home from '../../pages/Home';
import Mathematics from '../../pages/Mathematics';
import Quotes from '../../pages/Quotes';
import Footer from '../../Component/Footer';

describe('test screenshots for all components', () => {
  test('matches Calculator snapshot', () => {
    const tree = TestRenderer.create(<Calculator />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('matches Header snapshot', () => {
    const tree = TestRenderer.create(
      <Router>
        <Header />
      </Router>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('matches Navbar snapshot', () => {
    const tree = TestRenderer.create(
      <Router>
        <Navbar />
      </Router>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('matches Button snapshot', () => {
    const tree = TestRenderer.create(<Button />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('matches View snapshot', () => {
    const tree = TestRenderer.create(<View />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('matches Home snapshot', () => {
    const tree = TestRenderer.create(<Home />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('matches Mathematics snapshot', () => {
    const tree = TestRenderer.create(<Mathematics />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('matches Quote snapshot', () => {
    const tree = TestRenderer.create(<Quotes />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('matches Footer snapshot', () => {
    const tree = TestRenderer.create(<Footer />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('user clicks on number', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText(4));
    fireEvent.click(screen.getByText(6));

    expect(screen.getByText(46)).toMatchSnapshot(`
    <div
       id="display"
     >
       46
     </div>
  `);
  });
});
