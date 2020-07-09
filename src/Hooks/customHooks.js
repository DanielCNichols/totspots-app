import React, { useState } from 'react';

const CustomFormHook = callback => {
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

export default CustomFormHook;
