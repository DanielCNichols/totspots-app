import React, { Component } from 'react'

const VenuesContext = React.createContext({
  venues: [],
  reviews:[],
  selectedVenue: {}, 
  error: null,
  setVenues: () => {},
  setselectedVenue: () => {},
  setError: () => {},
  clearError: () => {}
})
export default VenuesContext;

export class VenuesProvider extends Component {
  state = {
    venues: [],
    selectedVenue: {},
    reviews: [],
    error: null,
  };

  setVenues = venues => {
    console.log('setting state', venues)
    this.setState({ venues })
  }

  setSelectedVenue = (venueid) => {
    let selected = this.state.venues.find(venue => venue.id === venueid)
    this.setState({selectedVenue: selected})
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
      selectedVenue: this.state.selectedVenue,
      reviews: this.state.reviews,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setVenues: this.setVenues,
      setSelectedVenue: this.setSelectedVenue,
      setReviews: this.setReviews
    }
    return (
      <VenuesContext.Provider value={value}>
        {this.props.children}
      </VenuesContext.Provider>
    )
  }
}
