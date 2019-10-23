
import React from 'react';
import ReactDOM from 'react-dom'
import Result from './Result.js'
import {MemoryRouter} from 'react-router-dom'
import renderer from 'react-test-renderer'


const venue =  {
  "venue_name": "Bull McCabes",
  "city": "Durham",
  "state": "NC",
  "address": "123 Main st.",
  "zipcode": "27705",
  "venue_type": "Bar",
  "id": 1,
  "avgPrice": "2.2500000000000000",
  "avgRating": "3.2500000000000000",
  "avgVolume": "3.5000000000000000"
}

it('renders Result without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <MemoryRouter>
    <Result venue={venue} />
  </MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div)
})

it('renders Result as expected', () => {
  const tree = renderer
  .create(
  <MemoryRouter>
    <Result name="Result" venue={venue}/>
  </MemoryRouter>
  )
  .toJSON();
  expect(tree).toMatchSnapshot();
})
