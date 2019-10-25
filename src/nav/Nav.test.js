import React from 'react';
import ReactDOM from 'react-dom'
import Nav from './Nav.js'
import {MemoryRouter} from 'react-router-dom'
import renderer from 'react-test-renderer'


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <MemoryRouter>
    <Nav/>
  </MemoryRouter>
  , div);
  ReactDOM.unmountComponentAtNode(div)
})

it('renders Nav as expected', () => {
  const tree = renderer
  .create(
  <MemoryRouter>
    <Nav name="Nav"/>
  </MemoryRouter>
  )
  .toJSON();
  expect(tree).toMatchSnapshot();
})
