import React, { useState } from 'react';
import CustomFormHook from '../Hooks/customHooks';
import AuthService from '../services/AuthService';

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
        username: inputs.username,
        first_name: inputs.first_name,
        last_name: inputs.last_name,
        city: inputs.city,
        state: inputs.state,
      };
      let res = await AuthService.postUser(user);

      console.log(res);
    } catch (err) {
      setError(err);
    }
  });

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Sign Up</legend>
        <label htmlFor="first_name">First Name</label>
        <input
          type="text"
          id="first_name"
          name="first_name"
          onBlur={handleTouched}
          onChange={handleInputChange}
        />
        {touched.first_name ? <p>First name is required</p> : null}
        <label htmlFor="last_name">Last Name</label>
        <input
          type="text"
          id="last_name"
          name="last_name"
          onBlur={handleTouched}
          onChange={handleInputChange}
        />
        {touched.last_name ? <p>Last name is required</p> : null}
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          name="city"
          onBlur={handleTouched}
          onChange={handleInputChange}
        />
        {touched.city ? <p>City is required</p> : null}
        <label htmlFor="state">State</label>
        <input
          type="text"
          id="state"
          name="state"
          onBlur={handleTouched}
          onChange={handleInputChange}
        />
        {touched.state ? <p>State is required</p> : null}
        <label htmlFor="email">Email</label>
        <input
          onBlur={handleTouched}
          onChange={handleInputChange}
          name="email"
          type="text"
          id="email"
        />
        {/* here we can put some custom validation */}
        {touched.email ? <p>Been touched</p> : null}
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          onBlur={handleTouched}
          onChange={handleInputChange}
        />
        {touched.username ? <p>Username is required</p> : null}
        <label htmlFor="password">Password</label>
        <input
          type="text"
          id="password"
          name="password"
          onBlur={handleTouched}
          onChange={handleInputChange}
        />
        {touched.password ? <p>Password is required</p> : null}
        <button>Sign Upr</button>
        {error ? <p>Error happened</p> : null}
      </fieldset>
    </form>
  );
}
