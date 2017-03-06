import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import facebookLogo from './../static/img/facebook.svg';
import twitterLogo from './../static/img/twitter.svg';
import gmailLogo from './../static/img/google.svg';
import { ACCOUNT_SIGN_IN_REQUESTED } from './../actions/account';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };

    this.submitLogin = this.submitLogin.bind(this);
    this.handleChangeValue = this.handleChangeValue.bind(this);
  }

  componentWillMount() {
    if (this.props.account.isAuthenticated) {
      browserHistory.push('/');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.account.isAuthenticated) {
      browserHistory.push('/');
    }
  }

  handleChangeValue(event, newValue, key) {
    this.setState({ [key]: newValue });
  }

  submitLogin(event) {
    event.preventDefault();
    const { email, password } = this.state;
    const { dispatch } = this.props;

    dispatch({
      type: ACCOUNT_SIGN_IN_REQUESTED,
      payload: { email, password }
    });

    this.setState({ email: '', password: '' });
  }

  render() {
    const { email, password } = this.state;
    const { account } = this.props;
    return (
      <div className="login">
        <div className="app-info">
          <h1 className="app-info-header">Playgrounds App</h1>
          <h3 className="app-info-header">
            <a href="https://github.com/artemkarpovich">
              By Artsiom Karpovich
            </a>
          </h3>
        </div>
        <div className="login-container">
          <div className="login-header">
            <h2>Авторизация</h2>
            <p>Залогиньтесь с помощью социальных медиа или логина и пароля</p>
          </div>
          <div className="social-login-wrapper">
            <a className="social-button" href="http://localhost:3001/api/v1/auth/facebook">
              <span>
                <img
                  src={facebookLogo}
                  alt="facebook"
                  className="social-media-img"
                />
              </span>
            </a>
            <a className="social-button twitter" href="http://localhost:3001/api/v1/auth/twitter">
              <span>
                <img
                  src={twitterLogo}
                  alt="twitter"
                  className="social-media-img"
                />
              </span>
            </a>
            <a className="social-button gmail" href="http://localhost:3001/api/v1/auth/google">
              <span>
                <img
                  src={gmailLogo}
                  alt="gmailLogo"
                  className="social-media-img"
                />
              </span>
            </a>
          </div>
          <form className="login-form" onSubmit={this.submitLogin}>
            <TextField
              hintText="Введите логин"
              floatingLabelText="Логин"
              fullWidth={true}
              onChange={
                (event, newValue) =>
                  this.handleChangeValue(event, newValue, 'email')
              }
              value={email}
            />
            <TextField
              hintText="Введите пароль"
              floatingLabelText="Пароль"
              type="password"
              fullWidth={true}
              onChange={
                (event, newValue) =>
                  this.handleChangeValue(event, newValue, 'password')
              }
              value={password}
            />
            <RaisedButton
              label="Войти"
              primary={true}
              className="login-button"
              type="submit"
            />
          </form>
          {
            account.errorMessage ?
              <div className="errorMessage">
                { account.errorMessage.message }
              </div> :
              null
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  account: state.account
});

export default connect(mapStateToProps)(Login);
