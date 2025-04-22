import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './Pages/Homepage';
import About from './Pages/About';
import Menu from './Pages/Menu';
import Reservations from './Pages/Reservations/Reservations';
import Order from './Pages/Order';
import Login from './Pages/Login';
import Confirmation from './Pages/Confirmation';

function App() {
  return (
    <>
      <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />

          <Route path="/about" element={<About />} />
          <Route path="/about" element={<Menu />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/order" element={<Order />} />
          <Route path="/login" element={<Login />} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;
