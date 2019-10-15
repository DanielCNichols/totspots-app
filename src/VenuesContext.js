import React, { Component } from 'react'

const VenuesContext = React.createContext({
  venues: [],
  reviews:[],
  error: null,
  setVenues: () => {},
  setError: () => {},
  clearError: () => {}
})
export default VenuesContext;

export class VenuesProvider extends Component {
  state = {
    venues: [],
    reviews: [],
    error: null,
  };

  setVenues = venues => {
    console.log('setting state', venues)
    this.setState({ venues })
  }

  setReviews = reviews => {
    console.log('setting reviews', reviews)
    this.setState({reviews})
  }

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  render() {
    const value = {
      venues: this.state.venues,
      reviews: this.state.reviews,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setVenues: this.setVenues,
      setReviews: this.setReviews
    }
    return (
      <VenuesContext.Provider value={value}>
        {this.props.children}
      </VenuesContext.Provider>
    )
  }
}
