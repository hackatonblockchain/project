import React from 'react'
import { GoogleMap, useLoadScript } from '@react-google-maps/api'
const libraries = ['places']
const mapContainerStyle = {
  width: '100vw',
  height: '100vh'
}

export default function Map(){
  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    libraries
  })

  if (loadError) return <div>Error loading maps</div>
  else if (!isLoaded) return <div>Loading map</div>

  return (<div>
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={8}
      center={{lat:-34.397, lng:150.644}}
    ></GoogleMap>
  </div>)
}