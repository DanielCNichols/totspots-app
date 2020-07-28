import React, { useState } from 'react';
import Modal from '../NewModal/Modal';
import ReviewForm from '../ReviewForm/ReviewForm';

const FormContainer = ({ id, handleSubmit }) => {
  console.log(id);
  let [display, setDisplay] = useState(false);

  function handleShow() {
    const scrollY = document.documentElement.style.getPropertyValue(
      '--scroll-y'
    );
    const body = document.body;
    body.style.position = 'fixed';
    body.style.top = `-${scrollY}`;
    setDisplay(!display);
  }

  function handleClose() {
    const body = document.body;
    const scrollY = body.style.top;
    body.style.position = '';
    body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
    setDisplay(false);
  }

  window.addEventListener('scroll', () => {
    document.documentElement.style.setProperty(
      '--scroll-y',
      `${window.scrollY}px`
    );
  });

  return (
    <div>
      <button onClick={() => handleShow()}>Show Modal</button>

      {display && (
        <Modal>
          <ReviewForm
            venueId={id}
            onSuccessSubmit={handleSubmit}
            cancel={handleClose}
          />
        </Modal>
      )}
    </div>
  );
};

export default FormContainer;
