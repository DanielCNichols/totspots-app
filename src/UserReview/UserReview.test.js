
import React from 'react';
import ReactDOM from 'react-dom'
import UserReview from './UserReview.js'
import {MemoryRouter} from 'react-router-dom'
import renderer from 'react-test-renderer'

const userReviews =  {
  "id": 27,
  "content": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.",
  "price": 3,
  "starrating": 3,
  "volume": 1,
  "date_created": "2019-10-18T19:59:22.263Z",
  "venue_id": 1,
  "user_id": 13,
  "first_name": "Joanne",
  "last_name": "Hart"
}

it('renders UserReview without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <MemoryRouter>
    <UserReview userReviews={userReviews} />
  </MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div)
})

it('renders UserReview as expected', () => {
  const tree = renderer
  .create(
  <MemoryRouter>
    <UserReview name="UserReview" userReviews={userReviews}/>
  </MemoryRouter>
  )
  .toJSON();
  expect(tree).toMatchSnapshot();
})
