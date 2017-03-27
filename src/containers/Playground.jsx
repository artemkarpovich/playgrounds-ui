import React from 'react';
import { connect } from 'react-redux';
import Map from './../components/Map';
import MessageBox from './../components/messageBox/MessageBox';
import * as types from './../actions/playgrounds';

class Playground extends React.Component {
  componentDidMount() {
    this.props.dispatch({ type: types.PLAYGROUNDS_FETCH_REQUESTED });
  }

  render() {
    const { playgrounds, account } = this.props;

    return (
      <div className="playgroundContainer">
        <div className="mapContainer">
          <Map playgrounds={playgrounds} />
        </div>
        {
          account.isAuthenticated ?
          <div className="messageBoxContainer">
            <MessageBox account={account} />
            <div className="default-box">Default Box</div>
          </div> :
          null
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  account: state.account,
  playgrounds: state.playgrounds.data
});

export default connect(mapStateToProps)(Playground);
