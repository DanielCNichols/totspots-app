import config from '../config';

const AuthService = {
  postUser(newUser) {
    return fetch(`${config.API_ENDPOINT}/user`, {
      method: 'POST',
      headers: {
        'content-type': `application/json',`,
      },
      body: JSON.stringify(newUser),
    }).then(res => {
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json();
    });
  },
  postLogin(credentials) {
    return fetch(`${config.API_ENDPOINT}/auth/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(credentials),
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
};

export default AuthService;
