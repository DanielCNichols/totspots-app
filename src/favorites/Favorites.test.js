import React from 'react';
import ReactDOM from 'react-dom';
import Favorites from './Favorites.js';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';


let favorite= { 
    venue_name: "Early Bird",
    city: "Durham",
    state: "NC",
    address: "987 Erwin Rd.",
    zipcode: "27705",
    venue_type: "Restaurant",
    id: 5,
    url: null,
    phone: "9848880417"
}

it('renders Favorites.js without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Favorites favorites={favorite}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});


it('renders Favorites as expected', () => {
  const tree = renderer
  .create(
    <Favorites name="Favorites" favorites={favorite}/>
  )
  .toJSON();
  expect(tree).toMatchSnapshot();
})
