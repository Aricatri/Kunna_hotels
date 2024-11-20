import React from 'react'
import { tipes_bedrooms_list } from '../../assets/assets'
import './ExploreBedroom.css'
import { assets } from '../../assets/assets';

export const ExploreBedroom = ({category,setCategory}) => {
  return (
    <div className='explore-bedroom' id='explore-bedroom'>
      <h1>Alojamientos</h1>
      <hr/>
      <p className='explore-bedroom-text'> Disfruta del lujo en estas amplias y renovadas habitaciones que cuentan con una elegante decoración con detalles históricos peruanos. Con elegantes estaciones de trabajo y WiFi de alta velocidad, nuestras cómodas y amplias habitaciones ofrecen un entorno ideal para los viajeros de negocios. Además de comodidades bien pensadas, algunas habitaciones ofrecen espectaculares vistas al claustro del Convento de San Agustín del siglo XVI </p>
      <div className='firstBox'>
        <div className='firstBox-script'>
          <h2>HABITACIONES DELUXE</h2>
          <p>Nuestras habitaciones renovadas ofrecen un alojamiento lujoso, WiFi de alta velocidad y un sistema complementario de oxígeno para aliviar el mal de altura. Además de comodidades bien pensadas, estas habitaciones ofrecen espectaculares vistas al claustro del Convento de San Agustín del siglo XVI.</p>
        </div>
        <div className='secondBox-script'>
            <img src={assets.cara_Hotel} alt="cara_hotel_principal" />
        </div>
      </div>
      <div className='explore-bedroom-list'>
        {tipes_bedrooms_list.map((item, index)=>{
          return (
            <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-bedroom-list-item'>
              <p className={category===item.menu_name?"active":""}>{item.menu_name}</p>
            </div>
          )
        })}

      </div>

     </div>
  )
}

export default ExploreBedroom
