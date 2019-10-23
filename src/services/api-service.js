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
    return fetch(`${config.API_ENDPOINT}/reviews/venues/${venue_id}`, {
      headers: {
        'content-type': 'application/json'
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },

  getReview(reviewId) {
    return fetch(`${config.API_ENDPOINT}/reviews/users/venues/${reviewId}`, {
      headers: {
        'content-type': 'application/json',
      }
    }).then(res => 
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },


  getAmenities(venue_id) {
    return fetch(`${config.API_ENDPOINT}/venues/${venue_id}/amenities`, {
      headers: {
        'content-type': 'application/json'
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },

  getVotes(reviewId) {
    return fetch(`${config.API_ENDPOINT}/reviews/${reviewId}/votes`, {
      headers: {
        'content-type': 'application/json'
      }
    }).then(res => 
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
      );
  },


  getFavorites(){
    return fetch(`${config.API_ENDPOINT}/users/favorites`, {
      //need to set bearer token
      headers: {
        'content-type': 'application/json',
        'Authorization': `bearer ${TokenService.getAuthToken()}`,
      }
    }).then(res => 
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    )
  },

  addFavorite(venue_id) {
    return fetch(`${config.API_ENDPOINT}/users/favorites`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        venue_id,
      })
    }).then(res => 
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
      )
  },

  deleteFavorite(venue_id) {
    return fetch(`${config.API_ENDPOINT}/users/favorites`, {
      method: 'DELETE', 
      headers: {
        'content-type': 'application/json',
        'Authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        venue_id,
      })
    })
  },

  getUserReviews(){
    return fetch(`${config.API_ENDPOINT}/venues/userReviews`, {
      //need to set bearer token
      headers: {
        'content-type': 'application/json',
        'Authorization': `bearer ${TokenService.getAuthToken()}`,
      }
    }).then(res => 
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    )
  },

  
  addVenue(venue_name, address, city, state, venue_type, zipcode, price, volume, starrating, content, aObj) {
    return fetch(`${config.API_ENDPOINT}/venues/addVenue`, {
      method: 'Post',
      headers: {
        'content-type': 'application/json',
        'Authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        venue_name,
        address,
        city,
        state,
        venue_type,
        zipcode,
        price, 
        volume, 
        starrating, 
        content,
        amenities: aObj
      })
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },

  postReviews(venue_id, content, price, volume,  starrating, aObj) {
    return fetch(`${config.API_ENDPOINT}/reviews/${venue_id}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        venue_id: venue_id,
        content,
        price,
        volume,
        starrating,
        amenities: aObj
      })
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },

  deleteReview(reviewId) {
    return fetch(`${config.API_ENDPOINT}/reviews/users/venues/${reviewId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'Authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res => {
        console.log(res)
        if (!res.ok) {
          return res.json().then(error => {
            throw error;
          });
        }
      })
      .catch(error => {
        console.error(error);
      });
  },


  //CAN I REFACTOR THIS ENDPOINT??? SEEMS DUMB TO SEND ALL THE THINGS IN THE PARAMS...
  handleVotes(votestatus, review_id) {
    return fetch(`${config.API_ENDPOINT}/reviews/${review_id}/votes`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        votestatus,
        review_id,
      })
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },

  editVote(votestatus, review_id) {
    return fetch(`${config.API_ENDPOINT}/reviews/${review_id}/votes`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        'Authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        votestatus,
        review_id
      })
    })
  },
  
  editReview(reviewId, newReview) {
    return fetch(`${config.API_ENDPOINT}/reviews/users/venues/${reviewId}`, {
      method: 'PATCH', 
      body: JSON.stringify(newReview),
      headers: {
        'content-type': 'application/json',
        'Authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
    .then(res => {
      if (!res.ok)
        return res.json().then(error => Promise.reject(error))
    })
    .catch(error => {
      console.error(error)
    })
  },


  getProfile() { 
    return fetch(`${config.API_ENDPOINT}/users/account`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': `bearer ${TokenService.getAuthToken()}`,
      }
    }).then(res => 
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    )
  },
};

export default ApiService;
