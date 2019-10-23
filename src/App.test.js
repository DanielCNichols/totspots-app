
import React from 'react';
import ReactDOM from 'react-dom'
import App from './App.js'
import {MemoryRouter} from 'react-router-dom'
import renderer from 'react-test-renderer'



it('renders App without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <MemoryRouter>
    <App />
  </MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div)
})

it('renders App as expected', () => {
  const tree = renderer
  .create(
  <MemoryRouter>
    <App name="App"/>
  </MemoryRouter>
  )
  .toJSON();
  expect(tree).toMatchSnapshot();
})
