import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
    return (

        <div className='app-download' id='app-download' y te invitamos a descargarlo>
            <p>Te invitamos a conocer mas de<br />Kunna App ¡Descarga ya!</p>
            <div className="app-download-platforms">
            <div class="android">
                    <h3>Android</h3>
                    <p >Disponible en Play Store</p>
                    <button>Descargar</button>
                    <img src={assets.play_store} alt="" />

                </div>
                <div class="ios">
                    <h3>iOS</h3>
                    <p >Disponible en App Store</p>
                    <button>Descargar</button>
                    <img src={assets.app_store} alt="" />

                </div>


            </div>
        </div>
    )
}

export default AppDownload
