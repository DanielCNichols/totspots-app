import config from '../config';

//need to grab the reviews by city/state from the search form.

//How can I get the venues with it?
//Maybe use the city/state from the login form to narrow it down, and then use the req.params on the server side to only reply with the relavant info?
const ApiService = {
  getVenues(city, state, type) {
    console.log(city, state, type)
    return fetch(`${config.API_ENDPOINT}/venues/${city}/${state}/${type}`, {
      headers: {}
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },

  getReviews(Venue_id) {
    return fetch(`${config.API_ENDPOINT}/venues/${Venue_id}/reviews`, {
      headers: {}
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },

  postReviews(venueId, content, price, volume, starRating) {
    return fetch(`${config.API_ENDPOINT}/reviews`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        venue_id: venueId,
        content,
        price,
        volume,
        starRating
      })
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },

  deleteReview(reviewId, callback) {
    return fetch(`${config.API_ENDPOINT}/reviews/reviewId`, {
      method: 'DELETE',
    })
    .then((res) => {
      if (!res.ok) {
        return res.json().then((error) => {
          throw error;
        });
      }
      return res.json();
    })
    .then((resJson)=> {
      callback(reviewId);
    })
    .catch((error) => {
      console.error(error)
    });
  }
};

export default ApiService;
