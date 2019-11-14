import './app.css';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import VenuesContext from './VenuesContext';
import Landingpage from './LandingPage/Landingpage';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import Sidebar from './Sidebar/Sidebar';
import Login from './Login/Login';
import Registration from './Registration/Registration';
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
import Footer from './Footer/Footer';
import ReviewSort from './ReviewSort/ReviewSort';

export default class App extends Component {
  static ContextType = VenuesContext;

  componentDidMount() {
    document.title = 'Totspots';
  }

  render() {
    return (
      <div className="app">
        <ErrorBoundary>
          <Route path="/" component={Nav} />
          <Sidebar>
            <Switch>
              <Route
                exact
                path="/reviews/:city/:queryState/:type"
                component={RefineSearch}
              />
              <Route exact path="/venue/:venue_id" component={ReviewSort} />
            </Switch>
          </Sidebar>
          <Main className="app_main">
            <Switch>
              <Route exact path="/" component={Landingpage} />
              <PublicRoute exact path="/login" component={Login} />
              <PublicRoute exact path="/register" component={Registration} />
              <Route
                exact
                path="/reviews/:city/:queryState/:type"
                component={ResultsPage}
              />
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
          <footer className="app_footer">
            <Switch>
              <Route path="/" component={Footer} />
            </Switch>
          </footer>
        </ErrorBoundary>
      </div>
    );
  }
}
