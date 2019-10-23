import React, {Component} from 'react';
import venuesContext from '../VenuesContext'
import ApiService from '../services/api-service'
import UserReview from '../UserReview/UserReview'
import './ReviewsList.css'


export default class ReviewsList extends Component  {
  static contextType = venuesContext

  componentDidMount() {
    ApiService.getUserReviews()
    .then(reviews => {
      this.context.setUserReviews(reviews)
    })
    .catch(this.context.setError)
  }

  render() {
    let {userReviews} = this.context
    return(
      <section className='reviewslist'>
        <header>
          <h3>Your Reviews</h3>
        </header>
        <div>
          <ul>
          {userReviews.map((userReviews =>(
              <UserReview userReviews={userReviews} key={userReviews.id} />
          )))}
          </ul>
        </div>
      </section>
    )
  }
}