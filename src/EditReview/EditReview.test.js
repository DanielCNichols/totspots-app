import React from 'react';
import ReactDOM from 'react-dom'
import EditReview from './EditReview'
import renderer from 'react-test-renderer'
import {MemoryRouter} from 'react-router-dom'




it('Edit Review renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <EditReview match={{params: {review_id:25}}}/>
    </MemoryRouter>
    , div);
  ReactDOM.unmountComponentAtNode(div)
})

it('renders Edit Review as expected', () => {
  const tree = renderer
  .create(
    <MemoryRouter>
      <EditReview  match={{params: {review_id:25}}}/>
    </MemoryRouter>
  )
  .toJSON();
  expect(tree).toMatchSnapshot();
})
