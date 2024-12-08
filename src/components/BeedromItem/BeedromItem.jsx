import React from 'react'
import { useState } from 'react';

import './BeedromItem.css'
import { assets } from '../../assets/assets'

export const BeedromItem = ({id, description , img, name, desc, category }) => {
  const [itemCount, setItemCount] = useState(0)
  return (
    <div className='beedrom-item'
    style={{
      backgroundImage: `url(${img})`,
      backgroundSize: 'cover', // Hace que la imagen cubra todo el fondo
      backgroundPosition: 'center', // Centra la imagen
      backgroundRepeat: 'no-repeat', // No repite la imagen
      height: '240px', // Altura específica
      width: '350px',  // Ancho específico
    }}>

      <div className='beedrom-item-info'>
       <div className='beedrom-item-description'>
        <p>{description}</p>
        </div>
        <p className='beedrom-item-name'>{name}</p>
        <p className='beedrom-item-desc'>{desc}</p>
        <a href='' className='beedrom-bottonVerMas'>Separar</a>
        {!itemCount
          ?<img className='add' onClick={()=>setItemCount(prev=>prev+1)} src={assets.add_icon_item} alt=" "/>
          :<div className='beedrom-item-counter'>
            <img onClick={()=>setItemCount(prev=>prev-1)} src={assets.remove_icon_red} alt=""/>
            <p>{itemCount}</p>
            <img onClick={()=>setItemCount(prev=>prev+1)} src={assets.add_icon_green} alt=""/>

          </div>

        }

      </div>
    </div>
  )
}
export default BeedromItem
