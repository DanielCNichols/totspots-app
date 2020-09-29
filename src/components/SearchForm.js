import React, {useState} from 'react';
import {
  Fieldset,
  Legend,
  FormElement,
  Searchbox,
  Select,
  Label,
  Button,
} from '../components/Form';
import s from '../sass/components/SearchForm.module.scss';

//TODO: handle no selection (default to attractions at their location)
//TODO: Get the options out of here and import them.
export default function SearchForm({onSearch}) {
  const [type, setType] = useState('');
  const [loc, setLoc] = useState({
    lat: null,
    lng: null,
  });

  const handleSelectPlace = (lat, lng) => {
    setLoc({
      lat,
      lng,
    });
  };

  const handleSelectType = type => {
    setType(type);
  };

  const handleSearchSubmit = ev => {
    let {lat, lng} = loc;
    ev.preventDefault();
    onSearch(lat, lng, type);
  };

  let options = [
    {
      name: 'Find a...',
      val: '',
    },
    {
      name: 'restaurant',
      val: 'restaurant',
    },
    {
      name: 'bar',
      val: 'bar',
    },
    {
      name: 'cafe',
      val: 'cafe',
    },
    {
      name: 'museum',
      val: 'museum',
    },
    {
      name: 'park',
      val: 'park',
    },
    {
      name: 'mall',
      val: 'shopping_mall',
    },
    {
      name: 'attraction',
      val: 'point_of_interest',
    },
  ];

  return (
    <form className={s.searchForm} onSubmit={handleSearchSubmit}>
      <Fieldset>
        <Legend>Find me a...</Legend>
        <div className={s.flex}>
          <FormElement className={s.formElement}>
            <Label htmlFor='type'>Type</Label>
            <Select
              id='type'
              name='type'
              onChange={ev => handleSelectType(ev.target.value)}
            >
              {options.map(opt => {
                return (
                  <option key={opt.val} value={opt.val}>
                    {opt.name}
                  </option>
                );
              })}
            </Select>
          </FormElement>

          <FormElement className={s.formElement}>
            <Label htmlFor='location'>In...</Label>
            <Searchbox
              id='location'
              name='location'
              className={s.searchbox}
              onPlaceSelected={({geometry}) =>
                handleSelectPlace(
                  geometry.location.lat(),
                  geometry.location.lng()
                )
              }
            />
          </FormElement>

          <Button>Submit</Button>
        </div>
      </Fieldset>
    </form>
  );
}
