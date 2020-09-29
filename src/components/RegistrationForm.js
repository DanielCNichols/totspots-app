import React, {useState} from 'react';
import {Fieldset, FormElement, Input, Legend, Label, Button} from './Form';
import {useRegistrationForm} from '../Hooks/customHooks';

import ApiService from '../services/AuthService';
import s from '../sass/components/RegistrationForm.module.scss';
import AuthService from '../services/AuthService';

//TODO: set up error handling and field validation in the hook for this form.

//Where does the user go from here?
export default function RegistrationForm(props) {
  let [error, setError] = useState(null);
  const {inputs, handleInputChange, handleSubmit} = useRegistrationForm(
    async () => {
      try {
        console.log(inputs);
        let res = await AuthService.postUser(inputs);
      } catch (error) {
        setError(error);
      }
    }
  );

  return (
    <form className={s.registrationForm} onSubmit={handleSubmit}>
      <Fieldset>
        <Legend>Sign up</Legend>

        <FormElement>
          <Label>First name</Label>
          <Input
            type='text'
            id='first_name'
            name='first_name'
            value={inputs.first_name}
            onChange={handleInputChange}
          />
        </FormElement>
        <FormElement>
          <Label>Last name</Label>
          <Input
            type='text'
            id='last_name'
            name='last_name'
            value={inputs.last_name}
            onChange={handleInputChange}
          />
        </FormElement>
        <FormElement>
          <Label>Username</Label>
          <Input
            type='text'
            id='username'
            name='username'
            value={inputs.username}
            onChange={handleInputChange}
          />
        </FormElement>
        <FormElement>
          <Label>password</Label>
          <Input
            type='text'
            id='password'
            name='password'
            value={inputs.password}
            onChange={handleInputChange}
          />
        </FormElement>
        <FormElement>
          <Label>Password Confirm</Label>
          <Input
            type='text'
            id='confirmPass'
            name='confirmPass'
            value={inputs.confirmPass}
            onChange={handleInputChange}
          />
        </FormElement>
      </Fieldset>
      <button>Submit</button>

      <div>
        <p>Already have an account? Log in!</p>
      </div>
    </form>
  );
}
