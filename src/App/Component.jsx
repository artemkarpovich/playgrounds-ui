import React from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import { browserHistory } from 'react-router';
import * as types from './../actions/account';
import FootballIcon from './../components/icons/Football';
import './styles.css';

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch({ type: types.ACCOUNT_FETCH_REQESTED });
  }

  logout() {
    this.props.dispatch({ type: types.ACCOUNT_LOGOUT_REQESTED });
  }

  login() {
    browserHistory.push('/login');
  }

  render() {
    const { children, account } = this.props;
    return (
      <div className="root-container">
        {
          account.isAuthenticated ?
            <AppBar
              title="Playgrounds"
              iconElementLeft={
                <div className="logo-container">
                  <FootballIcon />
                </div>
              }
              iconElementRight={
                <FlatButton label="Logout" onClick={this.logout.bind(this)} />
              }
            /> :
            <AppBar
              title="Playgrounds"
              iconElementLeft={
                <div className="logo-container">
                  <FootballIcon />
                </div>
              }
              iconElementRight={
                <FlatButton label="Login" onClick={this.login.bind(this)} />
              }
            />
        }
        {children}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  account: state.account
});

export default connect(mapStateToProps)(App);
