import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './Footer.js';
import renderer from 'react-test-renderer'

it('Footer renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Footer />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders Footer as expected', () => {
  const tree = renderer.create(<Footer name='Footer' />).toJSON();
  expect(tree).toMatchSnapshot();
});
