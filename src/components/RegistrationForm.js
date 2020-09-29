import React from 'react';
import {Fieldset, FormElement, Input, Legend, Label, Button} from './Form';
import s from '../sass/components/RegistrationForm.module.scss';

export default function RegistrationForm(props) {
  //EMAIL, name, username, password, confirm
  return (
    <form className={s.registrationForm}>
      <Fieldset>
        <Legend>Sign up</Legend>
        <FormElement>
          <Label>Email</Label>
          <Input type='text' />
        </FormElement>
        <FormElement>
          <Label>Name</Label>
          <Input type='text' />
        </FormElement>
        <FormElement>
          <Label>Name</Label>
          <Input type='text' />
        </FormElement>
        <FormElement>
          <Label>password</Label>
          <Input type='text' />
        </FormElement>
        <FormElement>
          <Label>Password Confirm</Label>
          <Input type='text' />
        </FormElement>
      </Fieldset>

      <div>
        <p>Already have an account? Log in!</p>
      </div>
    </form>
  );
}
