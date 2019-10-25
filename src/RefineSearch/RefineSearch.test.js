import React from 'react';
import ReactDOM from 'react-dom';
import RefineSearch from './RefineSearch.js';
import renderer from 'react-test-renderer';

it('renders RefineSearch without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RefineSearch />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders RefineSearch as expected', () => {
  const tree = renderer.create(<RefineSearch name='RefineSearch' />).toJSON();
  expect(tree).toMatchSnapshot();
});
