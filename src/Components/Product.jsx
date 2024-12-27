
import { product } from '../assets/Assets.js'

const Product = () => {
  return (
    <div>
        <h1>Product Details</h1>
        <ul>
            {
                product.map((item) => (
                    <li key={item._id}>
                        <img src={item.image} alt={item.name} style={{ width: "100px", height: "100px" }} />
                        <p>{item.name}</p>
                        <p>£{item.price.toFixed(2)}</p>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default Product;
