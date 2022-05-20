import React from 'react'
import GoogleMapReact from 'google-map-react'
import {Paper, useMediaQuery} from '@material-ui/core'
import { MdLocationOn } from 'react-icons/md'
import Rating from '@material-ui/lab'

import defaultImg from "../../images/location.png"
import "./map.css"

const Map = ({setCoordinates, setBounds, coordinates, places}) => {
  const isDesktop = useMediaQuery('min-width:600px')
  
  return (

    // https://stackoverflow.com/questions/46566830/how-to-use-create-react-app-with-an-older-react-version
    // Needed older React for GoogleMapReact
    <div className="mapContainer">
      <GoogleMapReact
        bootstrapURLKeys={{key: "AIzaSyBcUIOErz3qAvTw3m9VjVWATv87aivgsRI"}}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={15}
        margin={[50,50,50,50]}
        onChange={(e) => {
          setCoordinates({lat: e.center.lat, lng: e.center.lng})
          setBounds({
            ne: e.marginBounds.ne,
            sw: e.marginBounds.sw,
          })
        }}
        >
          {places?.map((place, i)=>(
            <div
              className="markerContainer"
              lat={Number(place.latitude)}
              lng={Number(place.longitude)}
              key={i}
            >
              {
                !isDesktop ? (
                  <MdLocationOn style={{color: 'red', fontSize: '2rem'}}/>
                ) : (
                  <div>
                    <p>{place.name}</p>
                    {/* <img src={place.photo ? place.photo.images.large.url : defaultImg} alt="" /> */}
                  </div>
                )
              }
            </div>
          ))}
      </GoogleMapReact>
    </div>
  )
}

export default Map