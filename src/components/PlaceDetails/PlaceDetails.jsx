import React from 'react'
import "./placeDetails.css"

import { MdLocationOn, MdPhone, MdRateReview } from 'react-icons/md'
import {FaGlobeAmericas} from "react-icons/fa"
import Rating from '@material-ui/lab/Rating'

import defaultImg from "../../images/location.png"

const PlaceDetails = ({place}) => {
  return (
    <div className='card'>
      <h2>{place.name}</h2>
      <img className='location-photo' src={place.photo? place.photo.images.large.url : defaultImg} alt="Location Image" />
      <div className="card-content">
        {place?.cuisine?.map(({name, i})=>(
          <div className='chip' key={i}>
            {name}
          </div>
        ))}
        {place.description && <div className="detail desc">
          <p>{place.description}</p>
        </div>}
        <div className='detail'>
          <p>Price</p>
          <p>{place.price_level}</p>
        </div>
        <div className='detail'>
          <p>Ranking</p>
          <p>{place.ranking}</p>
        </div>
        <div className='detail'>
          <p>Open/Closed</p>
          <p>{place.open_now_text}</p>
        </div>
        
        <div className="buttons">
          {place?.address && (<a href={"http://maps.google.com/?q="+place.address+" "+place.name} target="_blank">
            <MdLocationOn style={{color: '#799673', fontSize: '2.5rem'}}/>
          </a>)}
          {place?.phone && (<a href={"tel:"+place.phone}>
            <MdPhone style={{color: '#799673', fontSize: '2.5rem'}}/>
          </a>)}
          {place?.web_url && (<a href={place.web_url} target="_blank">
            <MdRateReview style={{color: '#799673', fontSize: '2.5rem'}}/>
          </a>)}
          {place?.website && (<a href={place.website} target="_blank">
            <FaGlobeAmericas style={{color: '#799673', fontSize: '2.5rem'}}/>
          </a>)}

        </div>
      </div>
    </div>
  )
}

export default PlaceDetails