import React, {useState, useEffect} from 'react';
import {
  Input,
  FormElement,
  Legend,
  Label,
  Fieldset,
  Button,
} from '../components/Form';
import AuthService from '../services/AuthService';
import {withRouter} from 'react-router-dom';
// import s from '../sass/components/LoginForm.module.scss';

//Todo: LoginForm redirects to homepage if the login is completed on the registration page.

export function LoginForm(props) {
  const [inputs, setInputs] = useState({
    username: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    username: null,
    passwoard: null,
    server: null,
  });

  const handleInputChange = event => {
    event.persist();
    setInputs(inputs => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };

  const validateInputs = () => {
    let {username, password} = inputs;
    console.log(username, password);
    let errors = {};

    if (!username) {
      errors.username = 'Username is required';
    }

    if (!password) {
      errors.password = 'Password is required';
    }

    return errors;
  };

  const clearErrors = () => {
    setErrors({
      username: null,
      password: null,
      server: null,
    });
  };

  const handleLoginSubmit = async ev => {
    ev.preventDefault();
    clearErrors();

    let errors = validateInputs();

    if (errors.username || errors.password) {
      return setErrors(errors);
    }
    console.log(inputs);
    let res = await AuthService.postLogin(inputs);

    console.log(res);
  };

  return (
    <form onSubmit={handleLoginSubmit}>
      <Fieldset>
        <Legend>Log in</Legend>
        <FormElement>
          <Label htmlFor='username'>Username</Label>
          {errors.username && <p>{errors.username}</p>}
          <Input
            name='username'
            id='username'
            type='text'
            value={inputs.username}
            onChange={handleInputChange}
          />
        </FormElement>
        <FormElement>
          <Label htmlFor='password'>Password</Label>
          {errors.password && <p>{errors.password}</p>}
          <Input
            name='password'
            id='password'
            type='password'
            value={inputs.password}
            onChange={handleInputChange}
          />
        </FormElement>

        {errors.server && <p>{errors.server}</p>}
      </Fieldset>

      <Button>Submit</Button>
    </form>
  );
}

export default withRouter(LoginForm);
