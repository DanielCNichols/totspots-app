
import React from 'react';
import ReactDOM from 'react-dom'
import VenueProfile from './VenueProfile.js'
import {MemoryRouter} from 'react-router-dom'
import renderer from 'react-test-renderer'



it('renders VenueProfile without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <MemoryRouter>
    <VenueProfile />
  </MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div)
})

it('renders VenueProfile as expected', () => {
  const tree = renderer
  .create(
  <MemoryRouter>
    <VenueProfile name="VenueProfile"/>
  </MemoryRouter>
  )
  .toJSON();
  expect(tree).toMatchSnapshot();
})
