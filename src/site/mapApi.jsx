import React, { useState, useRef } from 'react'
import { gMapsConfig } from '../config/gMaps'
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from '@react-google-maps/api'
import '../assets/css/mapApi.css'

const startCenter = {
  lat: -6.9698067,
  lng: 110.3895378,
}

const MapApi = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: gMapsConfig.API_KEY,
    libraries: ['places'],
  })
  const [mapRef, setMapRef] = useState(/** @type google.maps.Map */ (null))
  const [center, setCenter] = useState(startCenter)
  const [direction, setDirection] = useState(null)
  const [distance, setDistance] = useState('')
  const [duration, setDuration] = useState('')
  const originRef = useRef(`${center.lat}, ${center.lng}`)
  const destinationRef = useRef()
  const calculateRoute = async (e) => {
    e.preventDefault()
    if (originRef.current.value === '' || destinationRef.current.value === '') {
      return
    }
    const directionService = new window.google.maps.DirectionsService()
    const results = await directionService.route({
      origin: originRef.current.value,
      destination: destinationRef.current.value,
      travelMode: window.google.maps.TravelMode.WALKING,
    })
    setDirection(results)
    setDistance(results.routes[0].legs[0].distance.text)
    setDuration(results.routes[0].legs[0].duration.text)
  }
  const clearRoute = (e) => {
    // e.preventDefault()
    setDirection(null)
    setDistance('')
    setDuration('')
    originRef.current.value = `${center.lat}, ${center.lng}`
    destinationRef.current.value = ''
  }
  // const onLoad = useCallback((map) => {
  //   const success = (position) => {
  //     let myLat = position.coords.latitude
  //     let myLong = position.coords.longitude
  //     let coords = {
  //       lat: myLat,
  //       lng: myLong,
  //     }
  //     console.log('current pos', coords)
  //     setMapRef(coords)
  //     return coords
  //   }
  //   const failure = (er) => {
  //     console.log(er)
  //   }
  //   let x = navigator.geolocation
  //   x.getCurrentPosition(success, failure)

  //   // const bounds = new window.google.maps.LatLngBounds(center)
  //   // map.fitBounds(bounds)
  // }, [])
  const centerChanged = (e) => {
    e.preventDefault()
    if (mapRef) {
      const success = (position) => {
        let myLat = position.coords.latitude
        let myLong = position.coords.longitude
        let coords = {
          lat: myLat,
          lng: myLong,
        }
        console.log('current pos', coords)
        setCenter(coords)
        return coords
      }
      const failure = (er) => {
        console.log(er)
      }
      let x = navigator.geolocation
      x.getCurrentPosition(success, failure)
    }
  }
  // const onUnmount = useCallback((map) => {
  //   console.log('unmount', map)
  //   setMapRef(null)
  // }, [])
  return isLoaded ? (
    <>
      <div style={{ position: 'relative' }}>
        <GoogleMap
          mapContainerStyle={{ width: '100%', minHeight: '300px' }}
          center={center}
          zoom={17}
          // onLoad={onLoad}
          // onCenterChanged={centerChanged}
          // onUnmount={onUnmount}
          options={{
            streetViewControl: false,
            fullscreenControl: false,
            mapTypeControl: false,
          }}
          onLoad={(map) => setMapRef(map)}
        >
          <Marker position={center} />
          {direction === null ? (
            ''
          ) : (
            <DirectionsRenderer directions={direction} />
          )}
        </GoogleMap>
        <div
          className="btn-center"
          onClick={async (e) => {
            await centerChanged(e)
            mapRef.panTo(center)
          }}
        >
          <i className="bi bi-cursor-fill"></i>
        </div>
        <div className="map-input">
          <form>
            <Autocomplete>
              <input
                className="form-control"
                type="text"
                name="origin"
                defaultValue={`${center.lat}, ${center.lng}`}
                ref={originRef}
                required
              />
            </Autocomplete>
            <Autocomplete>
              <input
                className="form-control"
                type="text"
                name="destination"
                ref={destinationRef}
                required
              />
            </Autocomplete>
            <button className="btn btn-warning" onClick={calculateRoute}>
              Calculate
            </button>
            <button className="btn btn-danger" onClick={clearRoute}>
              <i className="bi bi-x-square"></i>
            </button>
            <button className="btn btn-primary" onClick={centerChanged}>
              <i className="bi bi-asterisk"></i>
            </button>
          </form>
          <br />
          <p>
            {distance} - {duration}
          </p>
        </div>
      </div>
    </>
  ) : (
    <></>
  )
}

export default MapApi
