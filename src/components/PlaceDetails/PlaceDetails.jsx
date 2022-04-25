import React from 'react'
import "./placeDetails.css"

import { MdLocationOn, MdPhone, MdRateReview } from 'react-icons/md'
import {FaGlobeAmericas} from "react-icons/fa"
import LocationOnIcon from '@material-ui/icons/LocationOn'
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import PhoneIcon from '@material-ui/icons/Phone'
import Rating from '@material-ui/lab/Rating'

import defaultImg from "../../images/location.png"

const PlaceDetails = ({place}) => {
  return (
    <div className='card'>
      <h2>{place.name}</h2>
      <img className='location-photo' src={place.photo? place.photo.images.large.url : defaultImg} alt="Location Image" />
      <div className="card-content">
        {place?.cuisine?.map(({name})=>(
          <div className='chip'>
            {name}
          </div>
        ))}
        <div className='detail'>
          <p>Price</p>
          <p>{place.price_level}</p>
        </div>
        <div className='detail'>
          <p>Ranking</p>
          <p>{place.ranking}</p>
        </div>
        {place?.awards?.map((award) => (
          <div className='detail'>
            {/* <img src={award.images.small} alt={award.display_name}/> */}
            <EmojiEventsIcon color='disabled'/>
            <span>{award.display_name}</span>
          </div>
        ))}
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