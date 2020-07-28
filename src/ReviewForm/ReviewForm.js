import React, { useState } from 'react';
import ApiService from '../services/api-service';
import s from './ReviewForm.module.css';
import useReviewForm from '../Hooks/customHooks';
import { MdClose } from 'react-icons/md';

const ReviewForm = ({ cancel, onSuccessSubmit, venueId }) => {
  console.log('this is the venueID', venueId);
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
      let content = getTextboxContent();
      let review = {
        venueId: venueId,
        totspots_rating: inputs.tsRating,
        volume_rating: inputs.volume,
        content: content,
        amenities: amenities,
      };
      let res = await ApiService.postReviews(review);
      console.log(res);
      onSuccessSubmit(res);
      cancel();
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

  function getTextboxContent() {
    let textbox = document.getElementById('textbox');
    return textbox.innerText;
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
      <div className={s.controls}>
        <button onClick={() => cancel()} type="button">
          <MdClose />
        </button>
        <button type="submit">Post</button>
      </div>

      <div className={s.rating}>
        <div className={s.formElement}>
          <label htmlFor="tsRating">Rating</label>
          <select
            value={inputs.tsRating}
            onChange={handleInputChange}
            id="tsRating"
            name="tsRating"
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
            value={inputs.volume_rating}
            onChange={handleInputChange}
            id="volume"
            name="volume"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
      </div>

      <fieldset>
        <legend>Features</legend>
        <div className={s.amenitiesContainer}>{renderAmenities()}</div>
      </fieldset>

      <div className={s.formElement}>
        <p>How was your visit?</p>
        <div id="textbox" className={s.review} contentEditable></div>
      </div>
    </form>
  );
};

export default ReviewForm;
