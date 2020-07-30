import React, { useState, useEffect } from 'react';
import ApiService from '../services/api-service';
import { withRouter } from 'react-router-dom';
import s from '../ReviewForm/ReviewForm.module.css';
import { MdClose } from 'react-icons/md';

const EditForm = ({ cancel, editReview, review }) => {
  let [tsRating, setTsRating] = useState(review.totspots_rating);
  let [volume, setVolume] = useState(review.volume_rating);
  let [error, setError] = useState(null);
  function getTextboxContent() {
    let textbox = document.getElementById('textbox');
    return textbox.innerText;
  }

  async function handleSubmit(ev) {
    ev.preventDefault();
    try {
      let text = getTextboxContent();
      let newReview = {
        content: text,
        totspots_rating: tsRating,
        volume_rating: volume,
      };

      let res = await ApiService.editReview(review.id, newReview);
      editReview(res);
      cancel(false);
    } catch (error) {
      setError(error);
    }
  }

  useEffect(() => {
    let textbox = document.getElementById('textbox');
    textbox.innerText = review.content;
  }, [review.content]);

  useEffect(() => {}, [review]);

  return (
    <form className={s.reviewForm} onSubmit={handleSubmit}>
      <div className={s.controls}>
        <button type="button" onClick={() => cancel(false)}>
          <MdClose />
        </button>
        <button type="submit">Post</button>
      </div>

      <div className={s.rating}>
        <div className={s.formElement}>
          <label htmlFor="tsRating">Rating</label>
          <select
            id="tsRating"
            name="tsRating"
            value={tsRating}
            onChange={ev => setTsRating(ev.target.value)}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        <div className={s.formElement}>
          <label htmlFor="volume">Volume Level</label>
          <select
            id="volume"
            name="volume"
            value={volume}
            onChange={ev => setVolume(ev.target.value)}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
      </div>

      <div className={s.formElement}>
        <p>How was this visit?</p>
        <div id="textbox" className={s.review} contentEditable></div>
      </div>
    </form>
  );
};

export default EditForm;
