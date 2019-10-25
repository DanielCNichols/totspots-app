import React from 'react';
import ReactDOM from 'react-dom'
import Login from './Login.js'
import renderer from 'react-test-renderer'
import {MemoryRouter} from 'react-router-dom'


it('renders Login without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Login />, div);
  ReactDOM.unmountComponentAtNode(div)
})


it('renders Login as expected', () => {
  const tree = renderer
  .create(
  <MemoryRouter>
    <Login name="Login"/>
  </MemoryRouter>
  )
  .toJSON();
  expect(tree).toMatchSnapshot();
})
