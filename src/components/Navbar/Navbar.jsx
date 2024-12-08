import React, { useContext, useState } from 'react'
import  './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'

const Navbar = ({setShowLogin}) => {
  const [menu,setMenu] = useState("home");
  const [isAnimating, setIsAnimating] = useState(false);
  const {getTotalCartAmount} = useContext(StoreContext);

  const handleSearchClick = () => {
    setIsAnimating(true);
    // Volver al icono original después de 1 segundo (duración de la animación)
    setTimeout(() => {
      setIsAnimating(false);
    }, 3000);
  };

  return (
    <div className='navbar'>
      <Link to='/'><img className='logo' src={assets.logo} alt="" /></Link>
      <ul className="navbar-menu">
        <Link to="/" onClick={()=>setMenu("home")} className={`${menu==="home"?"active":""}`}>El hotel</Link>
        <a href='#explore-menu' onClick={()=>setMenu("menu")} className={`${menu==="menu"?"active":""}`}>Sucursales</a>
        <a href='#recomendations' onClick={()=>setMenu("recomendations")} className={`${menu==="recomendations"?"active":""}`}>Recomendaciones</a>
        <a href='#explore-bedroom' onClick={()=>setMenu("contact")} className={`${menu==="contact"?"active":""}`}>Habitaciones</a>
        <a href='#explore-room' onClick={()=>setMenu("explore-room")} className={`${menu==="explore-room"?"active":""}`}>Galeria</a>
      </ul>
      <div className="navbar-right">
        <Link to='/cart' className='navbar-search-icon' onClick={handleSearchClick}>
          <img
            src={isAnimating ? assets.search_icon_click : assets.search_icon}
            alt=""
            className="basket-icon"
          />
        </Link>
        <Link to='/cart' className='navbar-basket-icon'>
          {/* Mostrar el GIF, de lo contrario el icono estático */}
          <img
            src={getTotalCartAmount() > 0 ? assets.basket_icon_full : assets.basket_icon}
            alt="Carrito"
            className="basket-icon"
          />
        </Link>
        <button onClick={()=>setShowLogin(true)}>Ingresar</button>
      </div>
    </div>
  )
}

export default Navbar
