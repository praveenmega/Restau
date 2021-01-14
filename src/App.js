import React, { useState } from 'react';
import './App.css';
import Toolbar from './Toolbar';
import Sidedrawer from './Sidedrawer';
import Homepage from './Homepage';
import Cartpage from './Cartpage';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import FooterPage from './FooterPage';

function App() {
  const [cart,setCart]= useState([])
  const [showsidedrawer,setShowSideDrawer]=useState(false)
  const [page,setPage]=useState('home')
  

  const addToCart = (product) =>{
    setCart([...cart,{...product}]);
  }

  const removeFromCart =(removedProduct) =>{
    setCart(cart.filter((product) => product !== removedProduct));
  }

  const navigateToHome=(next) =>{
    setPage(next)
  }

  const navigateToCart=(next) =>{
    setPage(next)
  }
  
  const showSideDrawerHandler =() => {
		setShowSideDrawer(true)
  }
  
  const closeSideDrawerHandler =() => {
		setShowSideDrawer(false)
	}

  return (
    <div className="tc">
      <header>
        <Toolbar homepage={()=>navigateToHome('home')} cartpage={()=>navigateToCart('cart')} openedSide={showSideDrawerHandler} len={cart.length}/>
        <Sidedrawer opened={showsidedrawer} closed={closeSideDrawerHandler} homepage={()=>navigateToHome('home')} cartpage={()=>navigateToCart('cart')} len={cart.length}/>
      </header>
      {page === 'home' && <Homepage addToCart={addToCart}/>}
      {page === 'cart' && <Cartpage cart={cart} removeFromCart={removeFromCart} len={cart.length}/>}
      <FooterPage/>
    </div>
  );
}

export default App;
