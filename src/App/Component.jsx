import React from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import { browserHistory } from 'react-router';
import * as types from './../actions/account';
import VolleyballIcon from './../components/icons/Volleyball';
import FootballIcon from './../components/icons/Football';
import BasketballIcon from './../components/icons/Basketball';
import './styles.css';

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch({ type: types.ACCOUNT_FETCH_REQESTED });
  }

  componentWillMount() {
    if(!this.props.account.isAuthenticated) {
      browserHistory.push('/login');
    }
  }

  componentWillReceiveProps(nextProps) {
    if(!nextProps.account.isAuthenticated) {
      browserHistory.push('/login');
    }
  }

  logout() {
    this.props.dispatch({ type: types.ACCOUNT_LOGOUT_REQESTED });
  }

  render() {
    const { children } = this.props;
    return (
      <div className="root-container">
        <AppBar
          title="Playgrounds"
          iconElementLeft={
            <div className="logo-container">
              <VolleyballIcon />
              <FootballIcon />
              <BasketballIcon />
            </div>
          }
          iconElementRight={
            <FlatButton label="Logout" onClick={this.logout.bind(this)} />
          }
        />
        {children}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  account: state.account
});

export default connect(mapStateToProps)(App);
