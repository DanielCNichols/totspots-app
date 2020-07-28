import React, { useState, useEffect } from 'react';
import s from './PhotoElement.module.css';
import config from '../config';
import { MdClose } from 'react-icons/md';

const PhotoElement = ({ photos }) => {
  const [selected, setSelected] = useState(null);

  function showModal(photo) {
    const scrollY = document.documentElement.style.getPropertyValue(
      '--scroll-y'
    );
    const body = document.body;
    body.style.position = 'fixed';
    body.style.top = `-${scrollY}`;
    setSelected(photo);
  }

  function closeModal() {
    const body = document.body;
    const scrollY = body.style.top;
    body.style.position = '';
    body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
    setSelected(null);
  }

  window.addEventListener('scroll', () => {
    document.documentElement.style.setProperty(
      '--scroll-y',
      `${window.scrollY}px`
    );
  });

  function PopUpModal() {
    useEffect(() => {
      let attr = document.getElementById('attributions');
      attr.innerHTML = selected.html_attributions[0];
    }, []);

    return (
      <div className={s.modal}>
        <button onClick={() => closeModal()}>
          <MdClose />
        </button>
        <div className={s.image}>
          <img
            src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=500&photoreference=${selected.photo_reference}&key=${config.GKEY}`}
            alt="venue"
          />
        </div>
        <div id="attributions" className={s.attributions}></div>
      </div>
    );
  }

  return (
    <div className={s.photoContainer}>
      {photos.map(photo => {
        return (
          <img
            key={photo.photo_reference}
            onClick={() => showModal(photo)}
            src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=500&photoreference=${photo.photo_reference}&key=${config.GKEY}`}
            alt="yeet"
          />
        );
      })}

      {selected && <PopUpModal />}
    </div>
  );
};

export default PhotoElement;
