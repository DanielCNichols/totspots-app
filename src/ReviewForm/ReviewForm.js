import React, { useState } from 'react';
import ApiService from '../services/api-service';
import s from './ReviewForm.module.css';
import FormSelect from '../Select/Select';
import useReviewForm from '../Hooks/customHooks';

const ReviewForm = ({ venue_id, closeForm }) => {
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
      closeForm();
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
            <div key={amenity.id} className={s.amenityElement}>
              <input
                type="checkbox"
                name="amenity"
                id={amenity.name}
                value={amenity.id}
              />
              <label htmlFor={amenity.name}>{amenity.name}</label>
            </div>
          );
        })}
      </>
    );
  }

  return (
    <form className={s.reviewForm} onSubmit={handleSubmit}>
      <fieldset>
        <legend>Tell us about your visit!</legend>

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
          <div className={s.amenitiesContainer}>{renderAmenities()}</div>
        </fieldset>

        <div className={s.formElement}>
          <label htmlFor="content">Write a review</label>
          <textarea
            onChange={handleInputChange}
            value={inputs.content}
            id="content"
            name="content"
            row="30"
            column="10"
          />
        </div>
      </fieldset>
      <div className="error">{error && <p>{error.error}</p>}</div>
      <div className={s.reviewFormControls}>
        <button type="submit">submit</button>
        <button type="button" onClick={() => closeForm()}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ReviewForm;
