import './sass/style.css';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home';
import Shop from './components/Shop/Shop';
import AddToCart from './components/Shop/Carts/AddToCart';
import Blog from './components/Blog/Blog';
import Blog2 from './components/Blog/BLog2';
import Myaccount from './components/Myaccount';
import Contact from './components/Contact';
import AboutUs from './components/AboutUs';
import Header from './components/Header';
import Footer from './components/footer/Footer';
import { CartProvider } from "react-use-cart";
import Checkout from './components/Shop/Checkout';
import Cardtest from './components/Shop/Carts/ProductItem/Cardtest';


function App() {
  return (
    <CartProvider >
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={Home}></Route>
        <Route path="/Shop" component={Shop}></Route>
        <Route path="/Blog" component={Blog}></Route>
        <Route path="/Blog2" component={Blog2}></Route>
        <Route path="/AboutUs" component={AboutUs}></Route>
        <Route path="/Myaccount" component={Myaccount}></Route>
        <Route path="/AddToCart" component={AddToCart}></Route>
        <Route path="/Contact" component={Contact}></Route>
        <Route path="/Checkout" component={Checkout}></Route>
        <Route path="/Cardtest" component={Cardtest}></Route>
        <Footer />
      </BrowserRouter>  
    </CartProvider>
  );
}

export default App;
