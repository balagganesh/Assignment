import  { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../Context/StoreContext";

const Cart = () => {
  const { CartItems, product, removeFromCart, gettotalamount, savings, total } = useContext(StoreContext);

  const isCartEmpty = Object.values(CartItems).every((quantity) => quantity === 0);

  return (
    <>
      <hr />
      <h2>Cart Items</h2>
      {isCartEmpty ? (
        <div className="empty-cart">
          <h3>Your cart is empty !</h3>
          <p>Add some items to your cart to see them here.</p>
        </div>
      ) : (
        <div className="cart">
          <div className="cart-items">
            <div className="cart-items-title-head">
              <p>Items</p>
              <p>Title</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Total</p>
              <p>Remove</p>
            </div>
            <br />
            <hr />
            {product.map((item) => {
              if (CartItems[item._id] > 0) {
                return (
                  <>
                    <div className="cart-items-title cart-items-item" key={item._id}>
                      <img src={item.image} alt={item.name} />
                      <p>{item.name}</p>
                      <p>£{item.price.toFixed(2)}</p>
                      <p>{CartItems[item._id]}</p>
                      <p>£{(item.price * CartItems[item._id]).toFixed(2)}</p>
                      <p onClick={() => removeFromCart(item._id)} className="cross">
                        <img src="src\assets\Cross.jpeg" alt="X"/>
                      </p>
                    </div>
                    <hr />
                  </>
                );
              }
              return null;
            })}
          </div>

          <div className="cart-bottom">
            <div className="cart-total">
              <h2>Order Summary</h2>
              <div>
                <div className="cart-total-details">
                  <p>Sub Total</p>
                  <p>£{gettotalamount().toFixed(2)}</p>
                </div>
                <hr />
                <div className="cart-total-details">
                  <p>Savings</p>
                  <p>£{savings.toFixed(2)}</p>
                </div>
                <hr />
                <div className="cart-final-total-details">
                  <h3>Total</h3>
                  <b>
                    <p>£{total.toFixed(2)}</p>
                  </b>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
