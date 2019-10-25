import React from 'react';
import ReactDOM from 'react-dom';
import SideBar from './SideBar.js';
import renderer from 'react-test-renderer';

it('renders SideBar without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SideBar />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders SideBar as expected', () => {
  const tree = renderer.create(<SideBar name='SideBar' />).toJSON();
  expect(tree).toMatchSnapshot();
});
