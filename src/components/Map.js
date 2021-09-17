import React, { Component } from "react";
//import GoogleMapReact from "google-map-react";

//const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.511735085083856,
      lng: 11.31041404063722,
    },
    zoom: 11,
  };

  render() {
    return (
      <div className="map" style={{ height: "400px", width: "100%" }}>
        <img src="./img/contact.jpg" className="img-fluid" alt="Imageworks" />
        {/*<GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.511735085083856}
            lng={11.31041404063722}
            text="My Marker"
          />
</GoogleMapReact>*/}
      </div>
    );
  }
}

export default SimpleMap;
