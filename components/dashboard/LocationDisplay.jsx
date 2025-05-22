import React, {useState, useEffect} from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'

const containerStyle = {
  width: '600px',
  height: '400px',
}



function LocationDisplay({longitude=6.832221, latitude=4.64333}) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyDbbIvVQ5EqQR2nCaQSiw8oIMiq3IasLW4',
  })
  
  const [center, setCenter] = useState({
                                lat: latitude,
                                lng: longitude,
                            });

  useEffect(() => {

    setCenter({...center, lat: latitude, lng: longitude});

  }, [longitude, latitude]);

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={18}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : (
    <></>
  )
}

export default React.memo(LocationDisplay)