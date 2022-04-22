import React from 'react'
import GoogleMapReact from 'google-map-react'
import {Paper, Typography, useMediaQuery} from '@material-ui/core'
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined"
import Rating from '@material-ui/lab'
import "./map.css"

const Map = () => {
  // CN Tower Co-ordinates
  const coordinates = {lat: 43.6426, lng: -79.3871}
  
  return (

    // https://stackoverflow.com/questions/46566830/how-to-use-create-react-app-with-an-older-react-version
    // Needed older React for GoogleMapReact
    <div className="mapContainer">
      <GoogleMapReact
        bootstrapURLKeys={{key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY}}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={15}
        margin={[50,50,50,50]}
        >

      </GoogleMapReact>
    </div>
  )
}

export default Map