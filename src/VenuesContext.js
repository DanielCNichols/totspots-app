import React, { Component } from 'react'

const VenuesContext = React.createContext({
  Venues: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setVenues: () => {},
})
export default VenuesContext;

export class VenuesProvider extends Component {
  state = {
    Venues: [],
    error: null,
  };

  setVenues = venues => {
    this.setState({ venues })
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
      venues: this.state.thingList,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setVenues: this.setThingList,
    }
    return (
      <VenuesContext.Provider value={value}>
        {this.props.children}
      </VenuesContext.Provider>
    )
  }
}
