import config from '../config'


//need to grab the reviews by city/state from the search form. 

//How can I get the venues with it? 

const Apiservice = {
  getReviews() {
    return fetch(`${config.API_ENDPOINT}/reviews`, {
      headers: {
      },
    })
    .then(res => 
      (!res.ok)
      ?res.json().then(e => Promise.reject(e))
      :res.json()
      )
  },
}