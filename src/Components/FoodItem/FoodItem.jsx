import  { useContext } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/Assets.js';
import { StoreContext } from '../Context/StoreContext.jsx';


const FoodItem = ({ id, name, price, image }) => {

    const { CartItems, addToCart, removeFromCart } = useContext(StoreContext);

    

  return (
    <div className="food-item">
      <div className="food-item-img-name-price">
        <img className="food-item-image" src={image} alt={name} />
        <p className="name">{name}</p>
        <p className="price">£{price.toFixed(2)}</p>
        
        {CartItems[id] === 0 || !CartItems[id]? (
          <button onClick={() => addToCart(id)}>Add To Cart</button>
        ) : (
          <>
            <img className="add-button" src={assets.Add} alt="Add Button" onClick={() => addToCart(id)} />
            <p>{CartItems[id]}</p>
            <img className="remove-button" src={assets.Remove} alt="Remove Button" onClick={() => removeFromCart(id)} />
          </>
        )}
      </div>
    </div>
  );
};
export default FoodItem;
