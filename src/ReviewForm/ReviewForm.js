import React, { useState, useEffect } from 'react';
import ApiService from '../services/api-service';
import { withRouter } from 'react-router-dom';
import s from './ReviewForm.module.css';
import FormSelect from '../Select/Select';
import useReviewForm from '../Hooks/customHooks';

const ReviewForm = ({
  match: {
    params: { venue_id },
  },
}) => {
  let [error, setError] = useState(null);
  const {
    inputs,
    handleInputChange,
    handleSubmit,
    touched,
    handleTouched,
  } = useReviewForm(async () => {
    try {
      let amenities = getAmenities();
      let review = {
        venueId: venue_id,
        totspots_rating: inputs.tsRating,
        volume_rating: inputs.volume,
        content: inputs.content,
        amenities: amenities,
      };
      let res = await ApiService.postReviews(review);
      console.log('got it', res);
    } catch (err) {
      setError(err);
    }
  });

  function getAmenities() {
    let checkboxes = document.querySelectorAll(`input[name="amenity"]:checked`);
    let amenities = [];
    checkboxes.forEach(a => {
      return amenities.push(a.value);
    });
    return amenities;
  }

  function renderAmenities() {
    let amenities = [
      {
        name: 'Stroller Accessible',
        id: 1,
      },
      {
        name: 'Play Area',
        id: 2,
      },
      {
        name: 'Changing Table',
        id: 3,
      },
      {
        name: 'Dogs Welcome',
        id: 4,
      },
      {
        name: 'Fast Checkout',
        id: 5,
      },
      {
        name: 'Kids Deals',
        id: 6,
      },
      {
        name: 'Outdoor Seating Available',
        id: 7,
      },
    ];

    return (
      <>
        {amenities.map(amenity => {
          return (
            <div key={amenity.id} className={s.formElement}>
              <label htmlFor={amenity.name}>{amenity.name}</label>
              <input
                type="checkbox"
                name="amenity"
                id={amenity.name}
                value={amenity.id}
              />
            </div>
          );
        })}
      </>
    );
  }

  return (
    <form style={{ margin: '100px auto' }} onSubmit={handleSubmit}>
      <fieldset>
        <legend>Add a Review for NAME</legend>
        <div className={s.formElement}>
          <label htmlFor="tsRating">Rating</label>
          <select
            id="tsRating"
            name="tsRating"
            value={inputs.tsRating}
            onChange={handleInputChange}
          >
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">three</option>
            <option value="4">Four</option>
          </select>
        </div>
        <div className={s.formElement}>
          <label htmlFor="volume">Volume Level</label>
          <select
            id="volume"
            name="volume"
            value={inputs.volume}
            onChange={handleInputChange}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>

        <fieldset>
          <legend>Features</legend>
          {renderAmenities()}
        </fieldset>

        <div className={s.formElement}>
          <label htmlFor="content">Write a review</label>
          <textarea
            onChange={handleInputChange}
            value={inputs.content}
            id="content"
            name="content"
            row="10"
            column="10"
          />
        </div>
      </fieldset>
      <button>submit</button>
    </form>
  );
};

export default ReviewForm;
