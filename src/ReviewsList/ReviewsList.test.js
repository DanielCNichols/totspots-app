import React from 'react';
import ReactDOM from 'react-dom'
import ReviewsList from './ReviewsList.js'
import {MemoryRouter} from 'react-router-dom'
import renderer from 'react-test-renderer'



it('renders ReviewsList without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <MemoryRouter>
    <ReviewsList />
  </MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div)
})

it('renders ReviewsList as expected', () => {
  const tree = renderer
  .create(
  <MemoryRouter>
    <ReviewsList name="ReviewsList"/>
  </MemoryRouter>
  )
  .toJSON();
  expect(tree).toMatchSnapshot();
})
