import config from '../config';
import TokenService from './TokenService'

//need to grab the reviews by city/state from the search form.

//How can I get the venues with it?
//Maybe use the city/state from the login form to narrow it down, and then use the req.params on the server side to only reply with the relavant info?
const ApiService = {
  getVenues(city, state, type) {
    return fetch(`${config.API_ENDPOINT}/venues/${city}/${state}/${type}`, {
      headers: {
        'content-type': 'application/json'
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },

  getReviews(venue_id) {
    return fetch(`${config.API_ENDPOINT}/venues/${venue_id}/reviews`, {
      headers: {
        'content-type': 'application/json'
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },

  getAmenities(venue_id) {
    console.log('getting amenities')
    console.log(venue_id)
    return fetch(`${config.API_ENDPOINT}/venues/${venue_id}/amenities`, {
      headers: {
        'content-type': 'application/json'
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },

  getProfile(){
    return fetch(`${config.API_ENDPOINT}/venues/account`, {
      //need to set bearer token
      headers: {
        'content-type': 'application/json',
        'Authorization': `bearer ${TokenService.getAuthToken()}`,
      }
    }).then(res => 
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    )
  },


  
  addVenue(venue_name, address, city, state, venue_type, zipcode) {
    return fetch(`${config.API_ENDPOINT}/venues/addVenue`, {
      method: 'Post',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        venue_name,
        address,
        city,
        state,
        venue_type,
        zipcode
      })
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },

  postReviews(venue_id, content, price, volume,  starrating, aObj, user_id) {
    return fetch(`${config.API_ENDPOINT}/reviews/${venue_id}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        venue_id: venue_id,
        content,
        price,
        volume,
        starrating,
        user_id: 2,
        amenities: aObj
      })
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },

  deleteReview(reviewId, callback) {
    return fetch(`${config.API_ENDPOINT}/reviews/${reviewId}`, {
      method: 'DELETE'
    })
      .then(res => {
        if (!res.ok) {
          return res.json().then(error => {
            throw error;
          });
        }
        return res.json();
      })
      .then(resJson => {
        callback(reviewId);
      })
      .catch(error => {
        console.error(error);
      });
  },

  handleVotes(votestatus, review_id) {
    return fetch(`${config.API_ENDPOINT}/reviews/${review_id}/votes`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        votestatus,
        review_id,
        user_id: 2
      })
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  }
};

export default ApiService;
