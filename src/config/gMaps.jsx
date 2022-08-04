import { useJsApiLoader } from '@react-google-maps/api'

export const gMapsConfig = {
  API_KEY: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
}

const IsLoaded = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: gMapsConfig.API_KEY,
  })
  return isLoaded
}

export { IsLoaded }
