import React from 'react';
import ReactDOM from 'react-dom'
import EditReview from './EditReview'
import renderer from 'react-test-renderer'



it('Edit Review renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EditReview match={{params: {review_id:25}}}/>, div);
  ReactDOM.unmountComponentAtNode(div)
})

it('renders Edit Review as expected', () => {
  const tree = renderer
  .create(
    <EditReview name="EditReview" match={{params: {review_id:25}}}/>
  )
  .toJSON();
  expect(tree).toMatchSnapshot();
})
