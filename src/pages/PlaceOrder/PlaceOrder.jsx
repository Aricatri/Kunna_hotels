import React, { useContext, useEffect, useState } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../Context/StoreContext'
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';

const PlaceOrder = () => {
    const [payment, setPayment] = useState("cod")
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        street: "",
        city: "",
        state: "",
        zipcode: "",
        country: "",
        phone: ""
    })
    const [error, setError] = useState(""); // Para manejar errores de validación
    const { getTotalCartAmount, getTotalAmount, placeOrder } = useContext(StoreContext);

    const navigate = useNavigate();

    const onChangeHandler = (event) => {
        const name = event.target.name
        const value = event.target.value
        setData(data => ({ ...data, [name]: value }))
    }

    useEffect(() => {
        if (getTotalCartAmount() === 0) {
            navigate('/')
        }
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();

        // Validación básica
        const isFormComplete = Object.values(data).every(value => value.trim() !== "");
        if (!isFormComplete) {
            setError("Por favor, complete todos los campos.");
            return;
        }

        if (!/^\S+@\S+\.\S+$/.test(data.email)) {
            setError("El correo electrónico no es válido.");
            return;
        }

        if (!/^\d+$/.test(data.phone)) {
            setError("El número de teléfono solo puede contener dígitos.");
            return;
        }

        setError("");

        // Guardar pedido en localStorage
        const order = {
            ...data,
            paymentMethod: payment,
            total: getTotalAmount() + 15,
            date: new Date().toISOString() // Agrega la fecha del pedido
        };

        const orders = JSON.parse(localStorage.getItem("orders")) || [];
        orders.push(order);
        localStorage.setItem("orders", JSON.stringify(orders));

        // Reiniciar formulario
        setData({
            firstName: "",
            lastName: "",
            email: "",
            street: "",
            city: "",
            state: "",
            zipcode: "",
            country: "",
            phone: ""
        });

        alert("Pedido realizado con éxito.");
        navigate('/');
    };

    return (
        <form className='place-order' onSubmit={handleSubmit}>
            <div className="place-order-left">
                <p className='title'>Datos para la reserva</p>

                <div className="multi-field">
                    <input type="text" name='firstName' onChange={onChangeHandler} value={data.firstName} placeholder='Nombre' />
                    <input type="text" name='lastName' onChange={onChangeHandler} value={data.lastName} placeholder='Apellido' />
                </div>
                <input type="email" name='email' onChange={onChangeHandler} value={data.email} placeholder='Email' />
                <input type="text" name='street' onChange={onChangeHandler} value={data.street} placeholder='Calle' />
                <div className="multi-field">
                    <input type="text" name='city' onChange={onChangeHandler} value={data.city} placeholder='Ciudad' />
                    <input type="text" name='state' onChange={onChangeHandler} value={data.state} placeholder='Estado' />
                </div>
                <div className="multi-field">
                    <input type="text" name='zipcode' onChange={onChangeHandler} value={data.zipcode} placeholder='Codigo postal' />
                    <input type="text" name='country' onChange={onChangeHandler} value={data.country} placeholder='Pais' />
                </div>
                <input type="text" name='phone' onChange={onChangeHandler} value={data.phone} placeholder='Telefono' />
                {error && <p className="error">{error}</p>}
            </div>
            <div className="place-order-right">
                <div className="cart-total">
                    <h2>Total del carrito</h2>
                    <div>
                        <div className="cart-total-details"><p>Subtotal</p><p>$. {getTotalAmount() }</p></div>
                        <hr />
                        <div className="cart-total-details"><p>Por alta concurrencia</p><p>S/. {getTotalCartAmount() + getTotalAmount() === 0 ? 0 : 15}</p></div>
                        <hr />
                        <div className="cart-total-details"><b>Total</b><b>$. {getTotalAmount() + 15}</b></div>
                    </div>
                </div>
                <div className="payment">
                    <h2>Metodo de pago</h2>
                    <div onClick={() => setPayment("cod")} className="payment-option">
                        <img src={payment === "cod" ? assets.checked : assets.un_checked} alt="" />
                        <p> PAYPAL ( Cash on online )</p>
                    </div>
                    <div onClick={() => setPayment("stripe")} className="payment-option">
                        <img src={payment === "stripe" ? assets.checked : assets.un_checked} alt="" />
                        <p> BCP ( Credit / Debit )</p>
                    </div>
                </div>
                <button className='place-order-submit' type='submit'>{payment==="cod"?"Ordenar ´pr PAYPAL":"Procegir con BCP"}</button>

            </div>
        </form>
    )
}

export default PlaceOrder
