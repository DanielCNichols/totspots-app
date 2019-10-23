import React from 'react';
import ReactDOM from 'react-dom'
import Profileview from './Profileview.js'
import {MemoryRouter} from 'react-router-dom'
import renderer from 'react-test-renderer'

const profile = {
  username: "nkirsop1",
  first_name: "Nevil",
  last_name: "Kirsop",
  city: null,
  state: null,
  email: "nkirsop1@goodreads.com"
}


it('renders Profileview without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <MemoryRouter>
    <Profileview />
  </MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div)
})

it('renders Profileview as expected', () => {
  const tree = renderer
  .create(
  <MemoryRouter>
    <Profileview name="Profileview" profile= {profile}/>
  </MemoryRouter>
  )
  .toJSON();
  expect(tree).toMatchSnapshot();
})


it('renders Profileview as expected with no profile', () => {
  const tree = renderer
  .create(
  <MemoryRouter>
    <Profileview name="Profileview" profile= {[]}/>
  </MemoryRouter>
  )
  .toJSON();
  expect(tree).toMatchSnapshot();
})
