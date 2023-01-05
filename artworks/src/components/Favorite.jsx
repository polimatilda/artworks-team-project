import React from 'react'
import { Link } from 'react-router-dom'
import './Favorite.css'

function Favorite({ fav }) {
  return (
    <div className='favWrapper'>
      <Link to={`/art/${fav.id}`}>
        <div className='card'>
          <h1>{fav.title}</h1>
          <img src={fav.primaryimageurl} alt="kep" />
        </div>
      </Link>
    </div>
  )
}

export default Favorite