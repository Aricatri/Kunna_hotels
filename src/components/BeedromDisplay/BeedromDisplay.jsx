import React, { useContext } from "react"
import './BeedromDisplay.css'
import { StoreContext } from "../../Context/StoreContext"
import { food_list } from "../../assets/assets"
import BeedromItem from "../BeedromItem/BeedromItem"

const BeedromDisplay =({categoryBedroom})=>{
  const {beedromsList} = useContext(StoreContext)
  return(
    <div className="beedrom-display" id='beedrom-display'>
      <div className="beedrom-display-list">
        {
          beedromsList.map((item, index) =>{
            return <BeedromItem key={index} id={item.beedrom_id} name={item.beedrom_name}
            description={item.beedrom_description}
            img={item.beedrom_image}
            desc={item.beedrom_desc}
            />
          })

        }
      </div>

    </div>
  )
}
export default BeedromDisplay
