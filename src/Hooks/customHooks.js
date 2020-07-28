import React, { useState } from 'react';

const useRegistrationForm = callback => {
  const [inputs, setInputs] = useState({
    email: '',
    username: '',
    password: '',
    first_name: '',
    last_name: '',
    city: '',
    state: '',
  });

  const [touched, setTouched] = useState({
    email: false,
    username: false,
    password: false,
  });

  const handleSubmit = event => {
    if (event) {
      event.preventDefault();
    }
    callback();
  };

  const handleInputChange = event => {
    event.persist();
    setInputs(inputs => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };

  const handleTouched = event => {
    event.persist();
    setTouched(touched => ({
      ...touched,
      [event.target.name]: true,
    }));
  };

  return {
    handleSubmit,
    handleInputChange,
    handleTouched,
    inputs,
    touched,
  };
};

const useReviewForm = callback => {
  const [inputs, setInputs] = useState({
    tsRating: '',
    volume: '',
    content: '',
  });

  const [touched, setTouched] = useState({
    tsRating: false,
    volume: false,
    content: false,
  });

  const handleSubmit = event => {
    if (event) {
      event.preventDefault();
    }
    callback();
  };

  const handleInputChange = event => {
    event.persist();
    setInputs(inputs => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };

  const handleTouched = event => {
    event.persist();
    setTouched(touched => ({
      ...touched,
      [event.target.name]: true,
    }));
  };

  return {
    inputs,
    handleSubmit,
    handleInputChange,
    handleTouched,
    touched,
  };
};

export default useReviewForm;
