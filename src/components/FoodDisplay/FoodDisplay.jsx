import React, { useContext } from 'react'
import './FoodDisplay.css'
import FoodItem from '../FoodItem/FoodItem'
import { StoreContext } from '../../Context/StoreContext'

const FoodDisplay = ({category}) => {

  const {food_list} = useContext(StoreContext);

  return (
    <div className='food-display' id='food-display'>
      <h2>La mejor experiencia para tu viaje te esta esperando!</h2>
      <div className='food-display-list'>
        {food_list.map((item)=>{
          if (category==="All" || category===item.food_category) {
            return <FoodItem
            key={item.food_id}
            image={item.food_image}
            name={item.food_name}
            price={item.food_price}
            desc={item.food_desc}
            id={item.food_id}/>
          }
        })}

      </div>
    </div>
  )
}

export default FoodDisplay
