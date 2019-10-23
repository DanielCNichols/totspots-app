
import React from 'react';
import ReactDOM from 'react-dom'
import VenuesPage from './VenuesPage.js'
import {MemoryRouter} from 'react-router-dom'
import renderer from 'react-test-renderer'



it('renders VenuesPage without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <MemoryRouter>
    <VenuesPage />
  </MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div)
})

it('renders VenuesPage as expected', () => {
  const tree = renderer
  .create(
  <MemoryRouter>
    <VenuesPage name="VenuesPage"/>
  </MemoryRouter>
  )
  .toJSON();
  expect(tree).toMatchSnapshot();
})
