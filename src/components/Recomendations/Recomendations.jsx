import React from 'react'
import './Recomendations.css'
import { roomsList } from '../../assets/assets'
import {testimonios} from '../../assets/assets'

const Recomendations = () => {
  return (
    <div className='recomendations' id='recomendations'>
      <h1>Testimonios</h1>
      <p className='explore-room-text'> Algunos casos de exito... </p>
      <hr></hr>
      <div className='explore-room-list'>
        {testimonios.map((item, index)=>{
          return (
            <div  key={index} className='explore-recomendations-list-item'>
              <figure>
              <p className='explore-recomendation-Name'>{item.testimonio_name}</p>
              <p className='explore-recomendation-descrip'> {item.descripcion}</p>
              </figure>
            </div>
          )
        })}

      </div>

     </div>
  )
}

export default Recomendations
