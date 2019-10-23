import React from 'react';
import ReactDOM from 'react-dom'
import Registration from './Registration.js'
import renderer from 'react-test-renderer'


it('Registration renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Registration />, div);
  ReactDOM.unmountComponentAtNode(div)
})

it('renders Registration as expected', () => {
  const tree = renderer
  .create(
    <Registration name="Registration"/>
  )
  .toJSON();
  expect(tree).toMatchSnapshot();
})
