import { createContext, useEffect, useState } from "react";
import { food_list,hotels_List,menu_list , tipes_bedrooms_list,beedromsList} from "../assets/assets";
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const [cartItems,setCartItems] = useState({});
    const [ordersData,setOrdersData] = useState({});

    const addToCart = (itemId) =>{
        if(!cartItems[itemId])
        {
            setCartItems((prev)=>({...prev,[itemId]:1}));
        }
        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
        }
    }

    const removeFromCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmount = () => {
        let total = 0;
        for (const item in cartItems) {
          if (cartItems[item] > 0) {
            let itemInfo = beedromsList.find((product) => product.beedrom_id === Number(item));
            total += itemInfo.beedrom_price * cartItems[item];
          }
        }
        return total;

      }

      const getTotalBedroomAmount = () => {
        let total = 0;
        for (const item in cartItems) {
          if (cartItems[item] > 0) {
            let itemInfo = beedromsList.find((product) => product.beedrom_id === Number(item));
            if (itemInfo) {
              total += itemInfo.beedrom_price * cartItems[item];
            }
          }
        }
        return total;
      };

      const getTotalAmount = () => {
        let total = 0;

        // Sumar precios de los alimentos
        for (const item in cartItems) {
          if (cartItems[item] > 0) {
            let foodItem = food_list.find((food) => food.food_id === Number(item));
            if (foodItem) {
              total += foodItem.food_price * cartItems[item];
            }
          }
        }

        // Sumar precios de las habitaciones
        for (const item in cartItems) {
          if (cartItems[item] > 0) {
            let roomItem = beedromsList.find((room) => room.beedrom_id === Number(item));
            if (roomItem) {
              total += roomItem.beedrom_price * cartItems[item];
            }
          }
        }

        return total;
      };


    const placeOrder = (deliveryData) =>{

        console.log(deliveryData);
    }

    const contextValue = {
        food_list,
        menu_list,
        cartItems,
        hotels_List,
        beedromsList,
        tipes_bedrooms_list,
        getTotalAmount,
        getTotalBedroomAmount,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        placeOrder
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
        )

}

export default StoreContextProvider;
