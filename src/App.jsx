
import FoodDisplay from './Components/FoodDisplay/FoodDisplay';
import Offer from './Components/Offer/Offer';
import StoreContextProvider from './Components/Context/StoreContext';
import './App.css';

import Cart from './Components/Cart/Cart';


const App = () => {
  return (
    <StoreContextProvider>
        <div className="container">
  <div className="food-display">
   <FoodDisplay/>
  </div>

  <div className="side-panel">
    <div className="offer">
      <Offer/>
    </div>
    <div className="cart">
      <Cart/>
    </div>
  </div>
</div>
    </StoreContextProvider>
  

  );
};

export default App;
