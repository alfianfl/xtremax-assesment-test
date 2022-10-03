// dependencies
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GoogleMapReact from 'google-map-react';

// component
import MapMarker from './MapMarker';

// redux action
import { fetchMapData } from '../../redux/actions/mapDataAction';
import { selectData } from '../../redux/actions/selectedDataAction';

function Map() {
  // default center map
  const [center, setCenter] = useState({
    lat: 1.284193,
    lng: 103.843362
  });
  const dispatch = useDispatch();
  const listAttraction = useSelector((state) => state.mapData.data);
  const selectedData = useSelector((state) => state.selectedData.data);
  const attraction = useSelector(
    (state) => state.selectedData.selectedAttractionFromMenu
  );

  // fetching data from redux action with dispatch method
  useEffect(() => {
    dispatch(fetchMapData());
  }, [dispatch]);

  // set center view for google map when selected the marker
  useEffect(() => {
    if (selectedData) {
      setCenter({
        lat: selectedData.lat,
        lng: selectedData.lng
      });
    }
  }, [selectedData]);

  // filter data from selected attraction on the menu and show the selected data to detail modal.
  useEffect(() => {
    if (attraction) {
      const selectedAttraction = listAttraction.filter(
        (data) => data.place_name === attraction
      )[0];

      dispatch(selectData(selectedAttraction));
    }
  }, [attraction, dispatch, listAttraction]);

  return (
    <section className="site-map absolute w-screen h-screen">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
        defaultZoom={15}
        // if the selected data is true, zoom view on the map will be 17
        zoom={selectedData ? 17 : 15}
        center={center}
      >
        {listAttraction.map((data) => (
          <MapMarker
            key={data.place_name}
            lat={data.lat}
            lng={data.lng}
            data={data}
          />
        ))}
      </GoogleMapReact>
    </section>
  );
}

export default React.memo(Map);
