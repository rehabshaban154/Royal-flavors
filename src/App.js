
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom'; // Removed unnecessary Router import
import Home from './components/home/Home';
import About from './components/about/About';
import Menu from './components/menu/Menu';
import Booking from './components/Booking/Booking';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Download from './components/download/Download';
import Order from './components/order/Order';

function App() {
  return (
    <div className="App" style={{overflow:'hidden'}}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/booking' element={<Booking />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/download' element={<Download />} />
          <Route path='/order' element={<Order />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
