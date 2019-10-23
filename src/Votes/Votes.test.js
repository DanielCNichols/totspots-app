
import React from 'react';
import ReactDOM from 'react-dom'
import Votes from './Votes.js'
import {MemoryRouter} from 'react-router-dom'
import renderer from 'react-test-renderer'



it('renders Votes without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <MemoryRouter>
    <Votes />
  </MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div)
})

it('renders Votes as expected', () => {
  const tree = renderer
  .create(
  <MemoryRouter>
    <Votes name="Votes"/>
  </MemoryRouter>
  )
  .toJSON();
  expect(tree).toMatchSnapshot();
})
