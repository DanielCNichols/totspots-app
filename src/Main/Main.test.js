import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main.js';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Main />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders Main as expected', () => {
  const tree = renderer.create(<Main name='Main' />).toJSON();
  expect(tree).toMatchSnapshot();
});
