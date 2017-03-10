import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import Helmet from 'react-helmet';

const GettingStartedGoogleMap = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={13}
    defaultCenter={{ lat: 53.683623, lng: 23.829637 }}
  >
    {
      props.markers.map((marker, index) => (
        <Marker
          {...marker}
        />
      ))
    }
  </GoogleMap>
));

export default class GettingStartedExample extends Component {
  handleMapLoad = this.handleMapLoad.bind(this);

  handleMapLoad(map) {
    this._mapComponent = map;
    if (map) {
      console.log(map.getZoom());
    }
  }

  render() {
    const { playgrounds } = this.props;
    return (
      <div style={{height: '100%', width: '100%'}}>
        <Helmet
          title="Getting Started"
        />
        <GettingStartedGoogleMap
          containerElement={
            <div style={{ height: `100%` }} />
          }
          mapElement={
            <div style={{ height: `100%` }} />
          }
          onMapLoad={this.handleMapLoad}
          markers={playgrounds}
        />
      </div>
    );
  }
}
