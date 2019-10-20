import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import VenuesContext from './VenuesContext';
import Landingpage from './LandingPage/Landingpage';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import Sidebar from './Sidebar/Sidebar';
import Main from './Main/Main';
import Login from './Login/Login';
import Registration from './Registration/Registration';
import RefineSearch from './RefineSearch/RefineSearch';
import ResultsPage from './resultsPage/ResultsPage';
import Nav from './Nav/Nav';
import ProfileView from './Profileview/Profileview';
import AddVenue from './addvenue/addvenue'
import ReviewForm from './ReviewForm/ReviewForm'
import VenuesPage from './VenuesPage/VenuesPage'
import FavoritesList from './FavoritesList/Favoriteslist'
import editReview from './EditReview/EditReview';
import PublicRoute from './utils/PublicRoute'
import PrivateRoute from './utils/PrivateRoute'


export default class App extends Component {
  static ContextType = VenuesContext;

  render() {
    return (
      <div className='app'>
        <ErrorBoundary>
          <Route path='/reviews' component={Nav} />
          <Sidebar>
            <Switch>
              <Route exact path='/reviews' component={RefineSearch} />
            </Switch>
          </Sidebar>
          <Main>
            <Switch>
              <Route exact path='/' component={Landingpage} />
              <PublicRoute exact path='/login' component={Login} />
              <PublicRoute exact path='/register' component={Registration} />
              <Route exact path='/reviews' component={ResultsPage} />
              <PrivateRoute exact path='/account' component={ProfileView} />
              <PrivateRoute exact path='/account' component={FavoritesList}/>
              <PrivateRoute exact path='/addVenue' component={AddVenue} />
              <Route exact path='/venue/:venue_id'  component={VenuesPage}/>
              <PrivateRoute exact path='/addReview/:venue_id' component={ReviewForm}/>
              <Route exact path='/:review_id' component={editReview}/>
            </Switch>
          </Main>
        </ErrorBoundary>
      </div>
    );
  }
}
