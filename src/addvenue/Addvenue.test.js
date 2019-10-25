import React from 'react';
import ReactDOM from 'react-dom'
import AddVenue from './AddVenue.js'
import {MemoryRouter} from 'react-router-dom'
import renderer from 'react-test-renderer'



it('renders AddVenue without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <MemoryRouter>
    <AddVenue />
  </MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div)
})

it('renders AddVenue as expected', () => {
  const tree = renderer
  .create(
  <MemoryRouter>
    <AddVenue name="AddVenue"/>
  </MemoryRouter>
  )
  .toJSON();
  expect(tree).toMatchSnapshot();
})