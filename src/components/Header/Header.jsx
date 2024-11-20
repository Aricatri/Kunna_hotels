import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className='header-contents'>
                <div class="name">
                    <div class="text-title">
                    <h1>  We</h1>
                    <h1>KUNNA</h1>
                    </div>
                </div>
                <div class="descripcion-slogan">
                    <div class="mediaquerytitle"><h2>En planes de un nuevo viaje?</h2></div>
                    <h2 class="orga-title">Asegura una gran estancia </h2>
                    <h2 class="base-title"> para disfrutar tu viaje sin problemas</h2>
                    <h3>Conocenos y descubre la  <b>mejor</b> experiencia con nosotros</h3>
                    <button id="btn-know" ><a href="#registro">Nuevo registro</a></button>
                </div>
            </div>

        </div>
    )
}

export default Header
