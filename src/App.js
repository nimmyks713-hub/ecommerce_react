import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import Aboutus from './Components/Aboutus/Aboutus'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Contactus from './Components/Contactus/Contactus';
import Productslist from './Components/Products/Productlist';
import Productdetail from './Components/Products/Productdetail';
import {Route,Routes} from 'react-router-dom'
import Cart from './Components/Products/Cart'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path="/aboutus" element={<Aboutus/>}></Route>
        <Route path='/contactus' element={<Contactus/>}></Route>
        <Route path='/productlist' element={<Productslist/>}></Route>
        <Route path='/productlist/:prodId' element={<Productdetail/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
