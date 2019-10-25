import React from 'react';
import ReactDOM from 'react-dom'
import LandingPage from './LandingPage.js'
import {MemoryRouter} from 'react-router-dom'
import renderer from 'react-test-renderer'



it('renders LandingPage without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <MemoryRouter>
    <LandingPage />
  </MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div)
})

it('renders LandingPage as expected', () => {
  const tree = renderer
  .create(
  <MemoryRouter>
    <LandingPage name="LandingPage"/>
  </MemoryRouter>
  )
  .toJSON();
  expect(tree).toMatchSnapshot();
})
