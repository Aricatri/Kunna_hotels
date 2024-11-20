import React, { useContext } from 'react'
import GalleryItem from '../GalleryItem/GalleryItem'
import { hotels_List } from '../../assets/assets'
const Gallery = ({category}) => {


  return (
    <div className='food-display' id='food-display'>
      <h2>Descubre nuestras distintas habitaciones!</h2>
      <div className='food-display-list'>
        {hotels_List.map((item)=>{
          if (category==="All" ) {
            return <GalleryItem key={item.food_id} image={item.food_image} name={item.food_name} desc={item.food_desc} price={item.food_price} id={item.food_id}/>
          }
        })}
      </div>
    </div>
  )
}

export default Gallery
