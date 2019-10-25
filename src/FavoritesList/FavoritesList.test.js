import React from 'react';
import ReactDOM from 'react-dom';
import FavoritesList from './FavoritesList.js';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

const favorites = [
  {
    venue_name: 'Early Bird',
    city: 'Durham',
    state: 'NC',
    address: '987 Erwin Rd.',
    zipcode: '27705',
    venue_type: 'Restaurant',
    id: 5,
    url: null,
    phone: '9848880417'
  },
  {
    venue_name: 'FullSteam',
    city: 'Durham',
    state: 'NC',
    address: '753 Parrish St. ',
    zipcode: '27705',
    venue_type: 'Bar',
    id: 33,
    url: null,
    phone: null
  }
];

it('renders FavoritesList without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FavoritesList favorites={favorites} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders FavoritesList as expected', () => {
  const tree = renderer
    .create(

        <FavoritesList name='FavoritesList' favorites={favorites}/>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});


it('renders FavoritesList as as expected with no favorites', () => {
  const tree = renderer
    .create(

        <FavoritesList name='FavoritesList' favorites={[]}/>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
