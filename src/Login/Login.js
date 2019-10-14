import React, {Component} from 'react';
import TokenService from '../services/TokenService'
import AuthService from '../services/AuthService'


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
    console.log('submitting')
    ev.preventDefault() 
    this.setState({error: null})
    const {user_name, password} = ev.target
    console.log(`${user_name}, ${password}}`)

    AuthService.postLogin({
      user_name: user_name.value,
      password: password.value,
    })
    .then(res => {
      user_name.value = ''
      password.value = ''
      TokenService.saveAuthToken(res.authToken)
      this.handleLogin()
    })
    .catch(res => {
      this.setState({error:res.error})
    })
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