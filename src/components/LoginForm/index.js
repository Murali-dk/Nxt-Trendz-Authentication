// Write your JS code here
import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {userName: '', password: '', error: '', isError: false}

  onSucess = () => {
    const {history} = this.props

    history.replace('/')
  }

  onFailure = err => {
    this.setState({error: err, isError: true})
  }

  submitForm = async event => {
    event.preventDefault()
    const {userName, password} = this.state
    const userDetails = {userName, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    console.log(JSON.stringify(userDetails))

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onSucess()
    } else {
      this.onFailure()
    }
  }

  onChangeUserName = event => {
    this.setState({userName: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  getUserInput = () => {
    const {userName} = this.state
    return (
      <div className="input-cont">
        <label htmlFor="userNamee">USERNAME</label>
        <input
          id="userNamee"
          type="text"
          className="input"
          placeholder="Username"
          value={userName}
          onChange={this.onChangeUserName}
        />
      </div>
    )
  }

  getPasswordInput = () => {
    const {password} = this.state
    return (
      <div className="input-cont">
        <label htmlFor="passwordd">PASSWORD</label>
        <input
          id="passwordd"
          type="password"
          className="input"
          placeholder="Password"
          value={password}
          onChange={this.onChangePassword}
        />
      </div>
    )
  }

  render() {
    const {error, isError} = this.state
    return (
      <div className="login-bg">
        <div className="login-card">
          <img
            className="logo"
            alt="website logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          />
          <img
            className="website-logo"
            alt="website login"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          />
        </div>
        <form onSubmit={this.submitForm}>
          {this.getUserInput()}
          {this.getPasswordInput()}
          <button type="submit" className="btnn">
            Login
          </button>
          {isError ? <p>{error}</p> : null}
        </form>
      </div>
    )
  }
}

export default LoginForm
