import React ,{useEffect, useState} from 'react';
import GoogleMapReact from 'google-map-react';
import MapMarker from './MapMarker';


function Map() {
  const defaultProps = {
    center: {
      lat: 1.28692,
      lng: 103.85457
    },
    zoom: 11
  };
  
  return (
    <section className="site-map absolute w-screen h-screen">
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          center={defaultProps.center}
          zoom={defaultProps.zoom}
        >
          <MapMarker lat={1.287466} lng={103.851424} />
        </GoogleMapReact>
    </section>
  );
}

export default React.memo(Map);
