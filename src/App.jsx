import { Link, Route, Routes } from 'react-router-dom'
import NavbarWeb from './layout/NavbarWeb'
import {FaTelegram} from 'react-icons/fa'
import {FaWhatsapp} from 'react-icons/fa'
import Footer from './layout/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import Contact from './pages/Contact'
import Register from './pages/Register'
import Login from './pages/Login'





function App() {

  return (
    <div className="App">

      <div className="upper__navbar">
        <div className="telegram">
           <FaTelegram /> <Link className='telegram__link' to="#">Telegram StoreKom</Link>
        </div>

        <div className="whatsapp">
           <FaWhatsapp /> <Link className='whatsapp__link' to="#">WhatsApp StoreKom</Link>
        </div>
      </div>
      <NavbarWeb />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/products' element={<Products />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/login' element={<Login />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
