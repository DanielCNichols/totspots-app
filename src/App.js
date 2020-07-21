import './app.css';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import VenuesContext from './VenuesContext';
import LandingPage from './LandingPage/Landingpage';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
// import Sidebar from './Sidebar/Sidebar';
import Login from './Login/Login';
import RegistrationForm from './Registration/Registration';
import RefineSearch from './RefineSearch/RefineSearch';
import ResultsPage from './ResultsPage/ResultsPage';
import Nav from './Nav/Nav';
import Main from './Main/Main';
import ProfileView from './Profileview/Profileview';
import AddVenue from './AddVenue/AddVenue';
import ReviewForm from './ReviewForm/ReviewForm';
import VenuesPage from './VenuesPage/VenuesPage';
import FavoritesList from './FavoritesList/Favoriteslist';
import editReview from './EditReview/EditReview';
import PublicRoute from './utils/PublicRoute';
import PrivateRoute from './utils/PrivateRoute';
import ReviewSort from './ReviewSort/ReviewSort';
import Modal from './Modal/Modal';

export default class App extends Component {
  static ContextType = VenuesContext;

  state = {
    showModal: true,
  };
  componentDidMount() {
    document.title = 'Totspots';
    let visited = localStorage['visited'];
    if (visited) {
      this.setState({ showModal: false });
    } else {
      localStorage['visited'] = true;
      this.setState({ showModal: true });
    }
  }

  closeModal = () => {
    this.setState({
      showModal: !this.state.showModal,
    });
  };

  render() {
    return (
      <div className="app">
        <ErrorBoundary>
          <Route path="/" component={Nav} />
          <Main className="app_main">
            <Switch>
              {this.state.showModal === true ? (
                <Modal close={this.closeModal} />
              ) : null}
              <Route exact path="/" component={LandingPage} />
              <PublicRoute exact path="/login" component={Login} />
              <PublicRoute
                exact
                path="/register"
                component={RegistrationForm}
              />
              <Route exact path="/results/:search?" component={ResultsPage} />
              <Route exact path="/venues/:id" component={VenuesPage} />
              <PrivateRoute exact path="/account" component={ProfileView} />
              <PrivateRoute exact path="/account" component={FavoritesList} />
              <PrivateRoute exact path="/addVenue" component={AddVenue} />
              <Route exact path="/venue/:venue_id" component={VenuesPage} />
              <PrivateRoute
                exact
                path="/addReview/:venue_id"
                component={ReviewForm}
              />
              <PrivateRoute
                exact
                path="/reviews/:review_id"
                component={editReview}
              />
            </Switch>
          </Main>
        </ErrorBoundary>
      </div>
    );
  }
}
