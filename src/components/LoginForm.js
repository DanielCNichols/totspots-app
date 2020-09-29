import React, {useState, useEffect} from 'react';
import {
  Input,
  FormElement,
  Legend,
  Label,
  Fieldset,
  Button,
} from '../components/Form';
import {withRouter} from 'react-router-dom';
// import s from '../sass/components/LoginForm.module.scss';

//Todo: LoginForm redirects to homepage if the login is completed on the registration page.

export function LoginForm(props) {
  return (
    <form>
      <Fieldset>
        <Legend>Log in</Legend>
        <FormElement>
          <Label htmlFor='username'>Username</Label>
          <Input name='username' id='username' type='text' />
        </FormElement>
        <FormElement>
          <Label htmlFor='password'>Password</Label>
          <Input name='password' id='password' type='password' />
        </FormElement>
      </Fieldset>

      <Button>Submit</Button>
    </form>
  );
}

export default withRouter(LoginForm);
