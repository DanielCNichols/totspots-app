import React from 'react';
import ReactDOM from 'react-dom'
import Registration from './Registration.js'


it('Registration renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Registration />, div);
  ReactDOM.unmountComponentAtNode(div)
})