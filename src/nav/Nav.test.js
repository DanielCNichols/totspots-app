import React from 'react';
import ReactDOM from 'react-dom'
import Nav from './Nav.js'
import {MemoryRouter} from 'react-router-dom'


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <MemoryRouter>
    <Nav/>
  </MemoryRouter>
  , div);
  ReactDOM.unmountComponentAtNode(div)
})