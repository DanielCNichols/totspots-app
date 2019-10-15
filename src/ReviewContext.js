import React, { Component } from 'react'

export const noVenue = {
  author: {},
  tags: [],
}

const ReviewContext = React.createContext({
  venue: noVenue,
  reviews: [],
  error: null,
  setError: () => {},
  clearError: () => { },
  setVenue: () => {},
  clearVenue: () => {},
  setReviews: () => {},
  addReview: () => {},
})

export default ReviewContext

export class ReviewProvider extends Component {
  state = {
    venue: noVenue,
    error: null,
  };

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  setVenue = venue => {
    this.setState({ venue })
  }

  setReviews = reviews => {
    this.setState({ reviews })
  }

  clearThing = () => {
    this.setThing(noVenue)
    this.setReviews([])
  }

  addReview = review => {
    this.setReviews([
      ...this.state.reviews,
      review
    ])
  }

  render() {
    const value = {
      venue: this.state.thing,
      reviews: this.state.reviews,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setThing: this.setThing,
      setReviews: this.setReviews,
      clearVenue: this.clearThing,
      addReview: this.addReview,
    }
    return (
      <ReviewContext.Provider value={value}>
        {this.props.children}
      </ReviewContext.Provider>
    )
  }
}
