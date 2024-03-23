import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
 
class MapContainer extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        lat: null,
        lng: null
      };
    }
  
    componentDidMount() {
      navigator.geolocation.getCurrentPosition(
        position => {
          this.setState({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        error => {
          console.log(error);
        }
      );
    }
  
    render() {
      const mapStyles = {
        width: '70%',
        height: '400px',
      };
  
      if (this.state.lat && this.state.lng) {
        return (
          <Map
            google={this.props.google}
            zoom={14}
            style={mapStyles}
            initialCenter={{ lat: this.state.lat, lng: this.state.lng }}
          >
            <Marker position={{ lat: this.state.lat, lng: this.state.lng }} />
          </Map>
        );
      } else {
        return <div>Loading...</div>;
      }
    }
  }
 
export default GoogleApiWrapper({
  apiKey: 'AIzaSyCFmREFpkd4wsvKNJ7biHfAwS0SMUohwe8', // 替换为您的API密钥
})(MapContainer);