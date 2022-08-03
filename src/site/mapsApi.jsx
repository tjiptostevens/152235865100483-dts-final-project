import React, { useState, useCallback } from 'react'
import { gMapsConfig } from '../config/gMaps'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'

const center = {
  lat: -6.9701067,
  lng: 110.3936025,
}
const containerStyle = {
  width: '400px',
  height: '400px',
}

const MapsApi = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: gMapsConfig.API_KEY,
  })
  const [mapRef, setMapRef] = useState(null)
  const onLoad = useCallback((map) => {
    const bounds = new window.google.maps.LatLngBounds(center)
    map.fitBounds(bounds)
    setMapRef(map)
  }, [])
  const centerChanged = () => {
    if (mapRef) {
      const newCenter = mapRef.getCenter()
      //   console.log(newCenter)
      setMapRef(newCenter)
    }
  }
  const onUnmount = useCallback((map) => {
    setMapRef(null)
  }, [])
  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onCenterChanged={centerChanged}
      onUnmount={onUnmount}
    >
      <></>
    </GoogleMap>
  ) : (
    <></>
  )
}

export default MapsApi
