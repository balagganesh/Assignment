import  { useContext } from 'react'
import { StoreContext } from '../Context/StoreContext'
import './FoodDisplay.css'
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = () => {

    const {product} = useContext(StoreContext);
  return (
    <div className='food-display' id='food-display'>
        <h2>Products</h2>
        <div className='food-display-list' id='food-display-list'>
        {product.map((item) => {
            return (
                <FoodItem key={item._id} id={item._id} name={item.name} price={item.price} image={item.image} />
            )
        })}
        </div>
    </div>
  )
}

export default FoodDisplay