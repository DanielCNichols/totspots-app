import React, {Component} from 'react';
import TokenService from '../services/TokenService'


export default class Login extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }
  
  handleLogin = () => {
    const {location, history} = this.props
    const destination = (location.state || {}).from || '/'
    history.push(destination)
  }

  handleSubmitAuth = e => {
    e.preventDefault()
    const {user_name, password} = e.target

    TokenService.saveAuthToken(
      TokenService.makeBasicAuthToken(user_name.value, password.value)
    )
    user_name.value=''
    password.value=''
    this.handleLogin()
  }

  render() {
    return (
      <section>
      <header>
        <h2>Sign in</h2>
      </header>
      <form action="" onSubmit={this.handleSubmitAuth}>
        <fieldset>
          <label for="user_name">Username
            <input type="text" name="user_name" id="user_name" placeholder="jonDoe82"/>
          </label>
          <label for="password">Password
            <input type="text" name="password" id="password"/>
          </label>
        </fieldset>
      <button>Log in</button>
        <p>Forgot Password?</p>
      </form>
    </section>
    )
  }
}