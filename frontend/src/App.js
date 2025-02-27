
import './index.css';
import Navbar from './components/Navbar/Navbar';
import { Route,  Routes } from "react-router-dom"
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Footer from './components/Footer/Footer';
import { useState } from 'react';
import LoginPopup from './components/LoginPopup/LoginPopup';
import Verify from './pages/Verify/Verify';
function App() {
   const [showLogin,setShowLogin]=useState(false);
  return (
    <>
   {showLogin? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
    <div className="App">
      <Navbar  setShowLogin={setShowLogin}/>
      <Routes>
        <Route  path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/placeorder' element={<PlaceOrder/>} />
        <Route path='/verify' element={<Verify/>} />
      </Routes>
      
    </div>
    <Footer/>
     </>
  );
}

export default App;
