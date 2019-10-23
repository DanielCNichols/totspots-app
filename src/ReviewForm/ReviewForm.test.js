import React from 'react';
import ReactDOM from 'react-dom'
import ReviewForm from './ReviewForm.js'
import {MemoryRouter} from 'react-router-dom'
import renderer from 'react-test-renderer'



it('renders ReviewForm without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <MemoryRouter>
    <ReviewForm />
  </MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div)
})

it('renders ReviewForm as expected', () => {
  const tree = renderer
  .create(
  <MemoryRouter>
    <ReviewForm name="ReviewForm"/>
  </MemoryRouter>
  )
  .toJSON();
  expect(tree).toMatchSnapshot();
})
