import { createContext, useState, useEffect } from "react";
import { product } from "../../assets/Assets.js";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [CartItems, SetCartItems] = useState({});
  const [subtotal, setSubtotal] = useState(0);
  const [savings, setSavings] = useState(0);
  const [total, setTotal] = useState(0);


  const addToCart = (itemId) => {
    SetCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  };


  const removeFromCart = (itemId) => {
    SetCartItems((prev) => ({
      ...prev,
      [itemId]: Math.max((prev[itemId] || 0) - 1, 0),
    }));
  };


  const gettotalamount = () => {
    let totalamount = 0;
    for (const item in CartItems) {
      if (CartItems[item] > 0) {
        const itemInfo = product.find((prod) => prod._id === item);
        if (itemInfo) {
          totalamount += itemInfo.price * CartItems[item];
        }
      }
    }
    return totalamount;
  };


  useEffect(() => {
    let newSubtotal = 0;
    let newSavings = 0;


    for (const itemId in CartItems) {
      const quantity = CartItems[itemId];
      const itemInfo = product.find((product) => product._id === itemId);

      if (itemInfo && quantity > 0) {
        newSubtotal += itemInfo.price * quantity;


        if (itemInfo.name === "Cheese" && quantity >= 2) {
          newSavings += itemInfo.price * Math.floor(quantity / 2);
        }


        if (itemInfo.name === "Soup" && quantity >= 1) {
          const breadQuantity = CartItems[product.find((prod) => prod.name === "Bread")?._id] || 0;
          if (breadQuantity > 0) {
            newSavings += (product.find((prod) => prod.name === "Bread")?.price || 0) / 2;
          }
        }

        
        if (itemInfo.name === "Butter" && quantity >=3) {
          newSavings += (itemInfo.price / 3) * quantity;
        }
      }
    }

    setSubtotal(newSubtotal);
    setSavings(newSavings);
    setTotal(newSubtotal - newSavings);
  }, [CartItems]);

  const contextValue = {
    product,
    addToCart,
    removeFromCart,
    CartItems,
    SetCartItems,
    gettotalamount,
    subtotal,
    savings,
    total,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};


export default StoreContextProvider;
