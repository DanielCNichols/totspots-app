import React from 'react';
import { Link } from 'react-router-dom';
import VenueContext from '../VenuesContext';
import { withRouter } from 'react-router-dom';
import './LandingPage.css';
import banner from '../assets/annie-spratt-WS2anBsrum0-unsplash.jpg';
class LandingPage extends React.Component {
  static contextType = VenueContext;

  componentDidMount() {
    this.context.clearError();
  }

  handleSubmit = ev => {
    ev.preventDefault();
    const target = ev.target;
    const city = target.city.value.toLowerCase();
    const queryState = target.state.value.toLowerCase();
    const type = target.type.value.toLowerCase();
    this.props.history.push(`/reviews/${city}/${queryState}/${type}`);
  };

  renderError() {
    let error = this.context.error;
    if (this.context.error) {
      return (
        <div className="error">
          <p>Sorry something has gone wrong. {error.error}</p>
        </div>
      );
    }
  }

  render() {
    return (
      <>
        <div
          className="wrapper"
          style={{
            width: '100%',
            padding: '250px 0 10px 0',
            margin: '0 0 50px 0',
          }}
        >
          <img
            className="pict"
            src={banner}
            alt="kids"
            style={{
              width: '100%',
              height: '700px',
              position: 'fixed',
              top: 0,
              zIndex: '-1',
              backgroundPosition: 'center center',
            }}
          ></img>
          <div
            className="splash"
            style={{ width: '50%', textAlign: 'center', margin: '0 auto' }}
          >
            <h1>This is the tagline</h1>
            <p>This is some clever wording</p>
          </div>
          <form
            style={{
              display: 'flex',
              width: '70%',
              margin: '100px auto 10px auto',
              justifyContent: 'space-evenly',
              alignItems: 'flex-end',
            }}
          >
            <div className="form-element">
              <label
                htmlFor="type"
                style={{ margin: '0', textAlign: 'left', color: 'white' }}
              >
                Looking for
              </label>
              <input
                type="text"
                id="type"
                style={{
                  height: '45px',
                  width: '250px',
                  borderRadius: '5px',
                  border: 'none',
                }}
              />
            </div>
            <div className="form-element">
              <label
                htmlFor="location"
                style={{ margin: '0', textAlign: 'left', color: 'white' }}
              >
                Located in
              </label>
              <input
                type="text"
                id="location"
                style={{
                  height: '45px',
                  width: '250px',
                  borderRadius: '5px',
                  border: 'none',
                }}
              />
            </div>
            <button
              style={{
                height: '45px',
                width: '250px',
                borderRadius: '5px',
                backgroundColor: '#4db8ff',
                fontSize: '1.3em',
                border: 'none',
              }}
            >
              Go!
            </button>
          </form>
        </div>
        <div
          className="onboarding"
          style={{ height: '400px', backgroundColor: 'lightBlue' }}
        ></div>
      </>
    );
  }
}

export default withRouter(LandingPage);
