import React, {useState} from 'react'
import "./list.css"

import PlaceDetails from '../PlaceDetails/PlaceDetails'

const List = () => {
  const [selection, setSelection] = useState('restaurants')
  const [rating, setRating] = useState('')

  const places = [
    {name: 'A place'},
    {name: 'beer palace'},
    {name: 'sushi sundown'},
    {name: 'Another place'},
    {name: 'orange palace'},
    {name: 'sushi city'},
    {name: 'ice rink'},
    {name: 'scooter stadium'},
    {name: 'burger town'},
  ]

  return (
    <div className='list-card'>
      <h2>Discover around you!</h2>
      <div className="filter">
        <form>
          <span>Type</span>
          <select name="options" value={selection} onChange={(e) => setSelection(e.target.value)} >
            <option value="restaurants">Restaurants</option>
            <option value="activities">Activities</option>
            <option value="hotels">Hotels</option>
          </select>
        </form>
        <form>
        <span>Rating</span>
          <select name="rating" value={rating} onChange={(e) => setRating(e.target.value)} >
            <option value={0}>All</option>
            <option value={3}>Above 3.0</option>
            <option value={4}>Above 4.0</option>
            <option value={4.5}>Above 4.5</option>
          </select>
        </form>
      </div>
      <div>
        {places?.map((place, i)=> (
          <div key={i}>
            <PlaceDetails place={place}/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default List