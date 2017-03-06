import React from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import facebookLogo from './../static/img/facebook.svg';
import twitterLogo from './../static/img/twitter.svg';
import gmailLogo from './../static/img/google.svg';
import { ACCOUNT_FETCH_REQESTED } from './../actions/account';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    const { dispatch } = this.props;

    dispatch({
      type: ACCOUNT_FETCH_REQESTED,
    });
  }

  render() {
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
          <form className="login-form">
            <TextField
              hintText="Введите логин"
              floatingLabelText="Логин"
              fullWidth={true}
            />
            <TextField
              hintText="Введите пароль"
              floatingLabelText="Пароль"
              type="password"
              fullWidth={true}
            />
            <RaisedButton
              label="Войти"
              primary={true}
              className="login-button"
            />
          </form>
        </div>
      </div>
    );
  }
}

const mapStataToProps = (state) => ({
  account: state.account
});

export default connect(mapStataToProps)(Login);
