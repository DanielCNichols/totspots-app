import React from 'react';
import ReactDOM from 'react-dom'
import Review from './Review.js'
import {MemoryRouter} from 'react-router-dom'
import renderer from 'react-test-renderer'

let reviews = [
  {
      "id": 8,
      "content": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
      "price": 2,
      "starrating": 4,
      "volume": 5,
      "date_created": "2019-10-18T19:59:22.209Z",
      "venue_id": 1,
      "user_id": 9,
      "first_name": "Fanni",
      "last_name": "Gerriessen"
  }
]



it('renders Review without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <MemoryRouter>
    <Review reviews={reviews}/>
  </MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div)
})

it('renders Review as expected', () => {
  const tree = renderer
  .create(
  <MemoryRouter>
    <Review name="Review" reviews={reviews}/>
  </MemoryRouter>
  )
  .toJSON();
  expect(tree).toMatchSnapshot();
})
