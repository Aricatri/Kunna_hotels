import React from 'react'
import './ExploreRoom.css'
import { roomsList } from '../../assets/assets'

const ExploreRoom = () => {
  return (
    <div className='explore-room' id='explore-room'>
      <h1>Explore our Gallery</h1>
      <p className='explore-room-text'> Espacios compartidos/ de uso común </p>
      <hr />
      <div className='explore-room-list'>
        {roomsList.map((item, index)=>{
          return (
            <div  key={index} className='explore-room-list-item'>
              <figure>
              <img src={item.room_image} alt="" />
              </figure>
            </div>
          )
        })}

      </div>

     </div>
  )
}

export default ExploreRoom
