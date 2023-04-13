
import './App.css';
import Navbar from './components/header/Navbar';
import Newnavbar from './components/nevbarrr/Newnavbar';
import Maincomp from './components/home/Maincomp';
import Footer from './components/footer/Footer'
import SignIn from './components/signup_signin/SignIn';
import SignUp from './components/signup_signin/SignUp';
import { Routes,Route} from 'react-router-dom';
import Cart from './components/cart/Cart';
import Buynow from './components/buynow/Buynow';



function App() {
  return (
    <div className="App">
   <>
    <Navbar/>
    <Newnavbar/>
    <Routes>
      <Route path='/' element={<Maincomp/>} />
      <Route path='/login' element={<SignIn/>} />
      <Route path='/register' element={<SignUp/>} />
      <Route path='/getproductsone/:id' element={<Cart/>} />
      <Route path='/buynow' element={<Buynow/>} />
    </Routes>
    {/* <Maincomp/> */}
    <Footer/>
   </>
    </div>
  );
}

export default App
