import React, { useState } from 'react';
import CustomFormHook from '../Hooks/customHooks';
import AuthService from '../services/AuthService';
import { ReactComponent as RegistrationPic } from '../assets/family_.svg';
import s from './Registration.module.css';

//Let's simplify this and use just the F,L, EMail, passowrd, and zip
export default function RegistrationForm() {
  let [error, setError] = useState(null);
  const {
    inputs,
    handleInputChange,
    handleSubmit,
    touched,
    handleTouched,
  } = CustomFormHook(async () => {
    try {
      let user = {
        email: inputs.email,
        password: inputs.password,
        first_name: inputs.first_name,
        last_name: inputs.last_name,
      };
      let res = await AuthService.postUser(user);
    } catch (err) {
      setError(err);
    }
  });

  return (
    <div className={s.wrapper}>
      <form className={s.registration} onSubmit={handleSubmit} noValidate>
        <legend>Sign Up</legend>
        <div className={s.formElement}>
          <input
            className={s.regInput}
            styles={{ position: 'absolute' }}
            type="text"
            id="first_name"
            name="first_name"
            onBlur={handleTouched}
            onChange={handleInputChange}
            required
          />
          <label className={s.regLabel} htmlFor="first_name">
            First Name
          </label>
        </div>
        <div className={s.validationError}>
          {touched.first_name ? <p>First name is required</p> : null}
        </div>
        <div className={s.formElement}>
          <input
            className={s.regInput}
            type="text"
            id="last_name"
            name="last_name"
            onBlur={handleTouched}
            onChange={handleInputChange}
            required
          />
          <label className={s.regLabel} htmlFor="last_name">
            Last Name
          </label>
        </div>
        <div className={s.validationError}>
          {touched.last_name ? <p>Last name is required</p> : null}
        </div>
        <div className={s.formElement}>
          <input
            className={s.regInput}
            onBlur={handleTouched}
            onChange={handleInputChange}
            name="email"
            type="text"
            id="email"
            required
          />
          <label className={s.regLabel} htmlFor="email">
            Email
          </label>
          {/* here we can put some custom validation */}
        </div>
        <div className={s.validationError}>
          {touched.email ? <p>Email is required</p> : null}
        </div>
        <div className={s.formElement}>
          <input
            className={s.regInput}
            type="text"
            id="password"
            name="password"
            onBlur={handleTouched}
            onChange={handleInputChange}
            required
          />
          <label className={s.regLabel} htmlFor="password">
            Password
          </label>
        </div>
        <div className={s.validationError}>
          {touched.password ? <p>Password is required</p> : null}
        </div>
        <button>Sign Up</button>
        {error ? <p>{error.error}</p> : null}
      </form>
      <div className={s.imageContainer}>
        <div>
          <h3>Almost There!</h3>
          You are close to getting some things asbout stuff for restaurants. Get
          money, take money.
        </div>
        <RegistrationPic />
      </div>
    </div>
  );
}
