import React from 'react';
import { connect } from 'react-redux';
import Map from './../components/Map';
import * as types from './../actions/playgrounds';

class Playground extends React.Component {
  componentDidMount() {
    this.props.dispatch({ type: types.PLAYGROUNDS_FETCH_REQUESTED });
  }

  render() {
    const { playgrounds } = this.props;

    return (
      <div className="playgroundContainer">
        <div className="mapContainer">
          <Map playgrounds={playgrounds} />
        </div>
        <div className="messageBoxContainer">
          <div>Mesaage Box</div>
          <div>Default Box</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  account: state.account,
  playgrounds: state.playgrounds.data
});

export default connect(mapStateToProps)(Playground);
