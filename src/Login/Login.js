import React, {Component} from 'react';
import TokenService from '../services/TokenService'
import AuthService from '../services/AuthService'
import './Login.css'


export default class Login extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }

  state = {error: null}
  
  handleLogin = () => {
    const {location, history} = this.props
    const destination = (location.state || {}).from || '/'
    history.push(destination)
  }

  handleSubmitJwtAuth = ev => {
    ev.preventDefault() 
    this.setState({error: null})
    const {username, password} = ev.target

    AuthService.postLogin({
      username: username.value,
      password: password.value,
    })
    .then(res => {
      username.value = ''
      password.value = ''
      TokenService.saveAuthToken(res.authToken)
      this.handleLogin()
    })
    .catch(res => {
      this.setState({error:res.error})
    })
  }

  renderError() {
    if (this.state.error) {
      return (
        <div>
          <p>Sorry, login incorrect. Please try again.</p>
        </div>
      )
    }
  }


  render() {
    return (
      <section className="login">
      <header>
        <h2>Sign in</h2>
      </header>
      <form className="login_form" onSubmit={this.handleSubmitJwtAuth}>
        <fieldset>
          <label htmlFor="user_name">Username
            <input className="login_text" type="text" name="username" id="username" placeholder="jonDoe82"/>
          </label>
          <label htmlFor="password">Password
            <input className="login_text" type="text" name="password" id="password"/>
          </label>
        </fieldset>
      <button>Log in</button>
      {this.renderError()}
        <p>Forgot Password?</p>
      </form>
    </section>
    )
  }
}