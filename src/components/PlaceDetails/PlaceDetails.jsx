import React from 'react'
import "./placeDetails.css"

const PlaceDetails = ({place}) => {
  return (
    <div>
      <h1>{place.name}</h1>
    </div>
  )
}

export default PlaceDetails