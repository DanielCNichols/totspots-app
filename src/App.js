import React, {useState} from 'react';
import {Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage/LandingPage';
import ResultsPage from './pages/ResultsPage/ResultsPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import VenuePage from './pages/VenuePage/VenuePage';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import Modal from './components/Modal';

import './sass/main.scss';

function App() {
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginToggle = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div className='App'>
      <Navbar toggleLogin={handleLoginToggle} />
      {showLogin && (
        <Modal titleText='Login'>
          <LoginForm toggleLogin={handleLoginToggle} />
        </Modal>
      )}
      <Switch>
        <Route exact path={'/'} component={LandingPage} />
        <Route exact path={'/signup'} component={RegistrationForm} />
        <Route exact path={'/results?'} component={ResultsPage} />
        <Route exact path={'/venue/:id'} component={VenuePage} />
        <Route exact path={'/profile'} component={ProfilePage} />
      </Switch>
    </div>
  );
}

export default App;
