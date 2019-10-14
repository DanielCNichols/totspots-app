import config from '../config';

//need to grab the reviews by city/state from the search form.

//How can I get the venues with it?
//Maybe use the city/state from the login form to narrow it down, and then use the req.params on the server side to only reply with the relavant info?
const ApiService = {
  getVenues(city, state, type) {
    return fetch(`${config.API_ENDPOINT}/venues/${city}/${state}/${type}`, {
      headers: {}
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  }
};

export default ApiService;
