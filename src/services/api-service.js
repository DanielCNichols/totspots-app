import config from '../config';
import TokenService from './TokenService';

const ApiService = {
  getVenues({ type, lat, lng }) {
    return fetch(`${config.API_ENDPOINT}/venues/${type}/${lat}/${lng}`, {
      headers: {
        'content-type': 'application/json',
      },
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },

  getVenueProfile(id) {
    return fetch(`${config.API_ENDPOINT}/venues/profile/${id}`, {
      headers: {
        'content-type': 'application/json',
      },
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },

  getReviews(venue_id) {
    return fetch(`${config.API_ENDPOINT}/reviews/venues/${venue_id}`, {
      headers: {
        'content-type': 'application/json',
      },
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },

  getReview(reviewId) {
    return fetch(`${config.API_ENDPOINT}/reviews/users/venues/${reviewId}`, {
      headers: {
        'content-type': 'application/json',
      },
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },

  getAmenities(venue_id) {
    return fetch(`${config.API_ENDPOINT}/venues/${venue_id}/amenities`, {
      headers: {
        'content-type': 'application/json',
      },
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },

  getVotes(reviewId) {
    return fetch(`${config.API_ENDPOINT}/reviews/${reviewId}/votes`, {
      headers: {
        'content-type': 'application/json',
      },
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },

  getFavorites() {
    return fetch(`${config.API_ENDPOINT}/users/favorites`, {
      headers: {
        'content-type': 'application/json',
        Authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },

  addFavorite(venue_id) {
    return fetch(`${config.API_ENDPOINT}/users/favorites`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        Authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        venue_id,
      }),
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },

  deleteFavorite(venue_id) {
    return fetch(`${config.API_ENDPOINT}/users/favorites`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        Authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        venue_id,
      }),
    });
  },

  getUserReviews() {
    return fetch(`${config.API_ENDPOINT}/reviews/userReviews`, {
      headers: {
        'content-type': 'application/json',
        Authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },

  addVenue(
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
    phone,
    url,
    aObj
  ) {
    return fetch(`${config.API_ENDPOINT}/venues/addVenue`, {
      method: 'Post',
      headers: {
        'content-type': 'application/json',
        Authorization: `bearer ${TokenService.getAuthToken()}`,
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
        phone,
        url,
        amenities: aObj,
      }),
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },

  postReviews(venue_id, content, price, volume, starrating, aObj) {
    return fetch(`${config.API_ENDPOINT}/reviews/${venue_id}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        Authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        venue_id: venue_id,
        content,
        price,
        volume,
        starrating,
        amenities: aObj,
      }),
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },

  deleteReview(reviewId) {
    return fetch(`${config.API_ENDPOINT}/reviews/users/venues/${reviewId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        Authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res => {
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

  handleVotes(votestatus, review_id) {
    return fetch(`${config.API_ENDPOINT}/reviews/${review_id}/votes`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        Authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        votestatus,
        review_id,
      }),
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },

  editVote(votestatus, review_id) {
    return fetch(`${config.API_ENDPOINT}/reviews/${review_id}/votes`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        Authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        votestatus,
        review_id,
      }),
    });
  },

  editReview(reviewId, newReview) {
    return fetch(`${config.API_ENDPOINT}/reviews/users/venues/${reviewId}`, {
      method: 'PATCH',
      body: JSON.stringify(newReview),
      headers: {
        'content-type': 'application/json',
        Authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    }).then(res => {
      if (!res.ok) return res.json().then(error => Promise.reject(error));
    });
  },

  getProfile() {
    return fetch(`${config.API_ENDPOINT}/users/account`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        Authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },

  editUser(updatedInfo) {
    return fetch(`${config.API_ENDPOINT}/user`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        Authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(updatedInfo),
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },

  deleteUser() {
    return fetch(`${config.API_ENDPOINT}/user`, {
      method: 'DELETE',
      'content-type': 'application/json',
      Authorization: `bearer ${TokenService.getAuthToken()}`,
    }).then(res => (!res.ok ? res.json().then(e => Promise.reject(e)) : null));
  },
};

export default ApiService;
