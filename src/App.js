import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import TotSpotsContext from './TotSpotsContext'
import Landingpage from './LandingPage/Landingpage';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'
import Sidebar from './Sidebar/Sidebar'
import Main from './Main/Main'
import Login from './Login/Login'
import Registration from './Registration/Registration'
import RefineSearch from './RefineSearch/RefineSearch'
import ResultsPage from './resultsPage/ResultsPage'
import Nav from './Nav/Nav'
import ProfileView from './Profileview/Profileview'



export default class App extends Component {
  static ContextType = TotSpotsContext;
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      city: '',
      state:'',
      reviews: [],
      venues: [], 
    };
  }

  

  render() {


    return (
      <div className="app">
        <ErrorBoundary>
          <Route path='/reviews' component = {Nav}/>
          <Sidebar>
            <Switch>
              <Route exact path='/reviews' component = {RefineSearch}/> 
            </Switch>
          </Sidebar>
          <Main>
            <Switch>
              <Route exact path='/' component = {Landingpage}/>
              <Route exact path='/login' component = {Login}/>
              <Route exact path='/register' component = {Registration}/>
              <Route exact path='/reviews' component = {ResultsPage}/>
              <Route exact path='/account' component = {ProfileView}/>
            </Switch>
          </Main>
  
        </ErrorBoundary>
      </div>
    )
  }
}

