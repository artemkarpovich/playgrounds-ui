import React from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import * as types from './../actions/account';
import VolleyballIcon from './../components/icons/Volleyball';
import FootballIcon from './../components/icons/Football';
import BasketballIcon from './../components/icons/Basketball';
import './styles.css';

class App extends React.Component {
  componentWillMount() {
    this.props.dispatch({ type: types.ACCOUNT_FETCH_REQESTED });
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
