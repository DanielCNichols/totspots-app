import React, { Component } from 'react'

const VenuesContext = React.createContext({
  venues: [],
  reviews:[],
  amenities:[],
  selectedVenue: {}, 
  profile: {},
  error: null,
  setVenues: () => {},
  setselectedVenue: () => {},
  setError: () => {},
  setAmenities: () => {},
  setProfile: () => {},
  clearError: () => {}
})
export default VenuesContext;

export class VenuesProvider extends Component {
  state = {
    venues: [],
    reviews: [],
    amenities:[],
    selectedVenue: {},
    profile: {},
    error: null,
  };

  setVenues = venues => {
    this.setState({ venues })
  }

  setProfile = profile => {
    this.setState({profile})
  }

  setSelectedVenue = (venueid) => {
    let selected = this.state.venues.find(venue => venue.id === venueid)
    this.setState({selectedVenue: selected})
  }

  setAmenities = (amenities) => {
    console.log('setting amenities')
    this.setState({amenities})
  }

  setReviews = reviews => {
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
      amenities: this.state.amenities,
      selectedVenue: this.state.selectedVenue,
      profile: this.state.profile,
      error: this.state.error,
      setError: this.setError,
      setProfile: this.setProfile,
      clearError: this.clearError,
      setVenues: this.setVenues,
      setSelectedVenue: this.setSelectedVenue,
      setAmenities: this.setAmenities,
      setReviews: this.setReviews
    }
    return (
      <VenuesContext.Provider value={value}>
        {this.props.children}
      </VenuesContext.Provider>
    )
  }
}
