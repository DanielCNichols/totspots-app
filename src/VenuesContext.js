import React, { Component } from 'react'

const VenuesContext = React.createContext({
  venues: [],
  reviews:[],
  amenities:[],
  favorites:[],
  selectedVenue: {},
  userReviews: [],
  profile: {},
  error: null,
  setVenues: () => {},
  setselectedVenue: () => {},
  setError: () => {},
  setFavorites: () => {},
  setAmenities: () => {},
  setUserReviews: () => {},
  setProfile: () => {},
  clearError: () => {}
})
export default VenuesContext;

export class VenuesProvider extends Component {
  state = {
    venues: [],
    reviews: [],
    amenities:[],
    favorites: [],
    selectedVenue: {},
    userReviews: [],
    profile: {},
    error: null,
  };

  setVenues = venues => {
    this.setState({ venues })
  }

  setProfile = profile => {
    this.setState({profile})
  }

  setUserReviews = userReviews => {
    this.setState({userReviews})
  }
  
  setFavorites = favorites => {
    this.setState({favorites})
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
      favorites: this.state.favorites,
      selectedVenue: this.state.selectedVenue,
      userReviews: this.state.userReviews,
      profile: this.state.profile,
      error: this.state.error,
      setError: this.setError,
      setProfile: this.setProfile,
      clearError: this.clearError,
      setVenues: this.setVenues,
      setFavorites: this.setFavorites,
      setUserReviews: this.setUserReviews,
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
