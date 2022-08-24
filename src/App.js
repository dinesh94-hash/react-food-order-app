import { useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';

function App() {
  const [showCart,setShowcart] = useState(false);

  function showCartHandler(){
    setShowcart(true);
  }

  function hideCartHandler(){
    setShowcart(false);
  }
  return (
    <CartProvider>
      {showCart && <div>Cart...</div>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
