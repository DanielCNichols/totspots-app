import React, { Component } from 'react';

const VenuesContext = React.createContext({
  venues: [],
  reviews: [],
  amenities: [],
  favorites: [],
  selectedVenue: {},
  userReviews: [],
  profile: {},
  city: null,
  type: null,
  searchState: null,
  error: null,
  setVenues: () => {},
  setselectedVenue: () => {},
  setError: () => {},
  setFavorites: () => {},
  setAmenities: () => {},
  setSearchState: () => {},
  setCity: ()=> {},
  setType: () => {},
  updateReview: () => {},
  setUserReviews: () => {},
  setProfile: () => {},
  deleteReview: () => {},
  clearError: () => {}
});
export default VenuesContext;

export class VenuesProvider extends Component {
  state = {
    venues: [],
    reviews: [],
    amenities: [],
    favorites: [],
    selectedVenue: {},
    city: null,
    type: null,
    searchState: null,
    userReviews: [],
    profile: {},
    error: null
  };

  setVenues = venues => {
    this.setState({ venues });
  };

  setProfile = profile => {
    this.setState({ profile });
  };

  setUserReviews = userReviews => {
    this.setState({ userReviews });
  };

  deleteReview = reviewId => {
    const newReviews = this.state.userReviews.filter(
      userReviews => userReviews.id !== reviewId
    );
    this.setState({ userReviews: newReviews });
  };

  updateReview = updatedReview => {
    this.setState({
      userReviews: this.state.userReviews.map(review => (
        review.id !== updatedReview.id) ? review : updatedReview
      )
    })
  }

  setFavorites = favorites => {
    this.setSearchState({ favorites });
  };

  setSelectedVenue = venueid => {
    let selected = this.state.venues.find(venue => venue.id === venueid);
    this.setState({ selectedVenue: selected });
  };

  setCity = city => {
    this.setState({city})
  }

  setSearchState = searchState => {
    this.setState({searchState})
  }

  setType = type => {
    this.setState({type})
  }

  setAmenities = amenities => {
    console.log('setting amenities');
    this.setState({ amenities });
  };

  setReviews = reviews => {
    this.setState({ reviews });
  };

  setError = error => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  render() {
    const value = {
      venues: this.state.venues,
      reviews: this.state.reviews,
      amenities: this.state.amenities,
      favorites: this.state.favorites,
      city: this.state.city,
      searchState: this.state.searchState,
      type: this.state.type,
      selectedVenue: this.state.selectedVenue,
      userReviews: this.state.userReviews,
      profile: this.state.profile,
      error: this.state.error,
      setError: this.setError,
      setProfile: this.setProfile,
      clearError: this.clearError,
      setVenues: this.setVenues,
      setCity: this.setCity,
      setSearchState: this.setState,
      setType: this.setType,
      setFavorites: this.setFavorites,
      updateReview: this.updateReview,
      setUserReviews: this.setUserReviews,
      deleteReview: this.deleteReview,
      setSelectedVenue: this.setSelectedVenue,
      setAmenities: this.setAmenities,
      setReviews: this.setReviews
    };
    return (
      <VenuesContext.Provider value={value}>
        {this.props.children}
      </VenuesContext.Provider>
    );
  }
}
