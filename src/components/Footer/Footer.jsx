import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img className='logo' src={assets.logo} alt="" />
            <h1>Kunna's Hotels Company</h1>
            <div class="cuadro1">
                <div class="footer-contact">
                    <h2 class="QuestionUsuario">Listo para tu siguinte viaje?</h2>
                    <div class="footer-buttons">
                        <a href="#" class="button_fill small home-v2 w-inline-block"><div class="buttontext">Registrese gratis</div></a>
                        <a href="#" class="button_outline small home-v2 w-inline-block"><div class="buttontext">Ver planes de viaje</div></a>
                    </div>
                </div>
            </div>
            <div className="footer-social-icons">
                <a href="https://www.facebook.com/CentralRestaurante">
                  <img src={assets.facebook_icon} alt="" />
                </a>
                <a href="https://twitter.com/centralrest?lang=es">
                  <img src={assets.twitter_icon} alt="" />
                </a>
                <a href="https://www.linkedin.com/company/centralrestaurante/?originalSubdomain=pe">
                  <img src={assets.linkedin_icon} alt="" />
                </a>
                <a href=''></a>

            </div>
        </div>
        <div className="footer-content-center">
            <h2>EMPRESA</h2>
            <ul>
                <li>Inicio</li>
                <li>Nosotros</li>
                <li>PLanes</li>
                <li>Testimonios</li>
                <li>Contacto</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>CONTÁCTANOS</h2>
            <ul>
                <li>945832354</li>
                <li>(01) 123-4567</li>
                <li>reservas@hotelesKunna.com</li>
                <li>Av.La Encalada 1515, Santiago de Surso , Lima , Perú</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">© 2024 Kunna. Todos los derechos reservados Kunna Service S.A.C RUC: 2623847490</p>
    </div>
  )
}

export default Footer
