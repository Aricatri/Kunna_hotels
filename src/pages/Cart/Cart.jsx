import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../Context/StoreContext'
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const {cartItems, food_list,beedromsList, removeFromCart,getTotalCartAmount, getTotalAmount} = useContext(StoreContext);
  const navigate = useNavigate();
  const getTotalBedroomAmount = () => {
    let total = 0;
    beedromsList.forEach((room) => {
      if (cartItems[room.beedrom_id] > 0) {
        total += room.beedrom_price * cartItems[room.beedrom_id];
      }
    });
    return total;
  };


  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Photo</p> <p>Nombre Hotel </p> <p>Por noche</p> <p>Dias de estancia</p> <p>Total</p> <p>Eliminar?</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item.food_id]>0) {
            return (<div key={index}>
              <div className="cart-items-title cart-items-item">
                <img src={item.food_image} alt="" />
                <p>{item.food_name}</p>
                <p>$. {item.food_price}</p>
                <div>{cartItems[item.food_id]}</div>
                <p>$. {item.food_price*cartItems[item.food_id]}</p>
                <p className='cart-items-remove-icon' onClick={()=>removeFromCart(item.food_id)}>X</p>
              </div>
              <hr />
            </div>)
          }
        })}
        {beedromsList.map((item, index) => {
          if (cartItems[item.beedrom_id]>0) {
            return (<div key={index}>
              <div className="cart-items-title cart-items-item">
                <img src={item.beedrom_image} alt="" />
                <p>{item.beedrom_name}</p>
                <p>$. {item.beedrom_price}</p>
                <div>{cartItems[item.beedrom_id]}</div>
                <p>$. {item.beedrom_price * cartItems[item.beedrom_id]}</p>
                <p className='cart-items-remove-icon' onClick={()=>removeFromCart(item.beedrom_id)}>X</p>
              </div>
              <hr />
            </div>)
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Resumen para la reserva:</h2>
          <div>
            <div className="cart-total-details"><p>Subtotal</p><p>$. {getTotalAmount() }</p></div>
            <hr />
            <div className="cart-total-details"><p>Por alta concurrencia</p><p>S/. {getTotalCartAmount() + getTotalAmount() === 0 ? 0 : 15}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>$. {getTotalAmount() + 15}</p>
            </div>

          </div>
          <button onClick={()=>navigate('/order')}>Ir a Pagar</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>Si tienes alguna especificación para su llegada o evento , escribenos!</p>
            <div className='cart-promocode-input'>
              <input type="text" placeholder='Indicación?'/>
              <button>Enviar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
