import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Register from './pages/Register/Register';
import LogIn from './pages/Login/LogIn';
import Home from './pages/Home/Home';
import Navbar from './compoments/Navbar';
import Client from './pages/Client/client';
import Admin from './pages/Admin/Admin';
import USERS from './pages/Admin/USERS';
import Feeds from './pages/Admin/Feeds';
import Loader from './pages/Login/Loader';
function App() {
  return (
    <div className="App">
       < Navbar/>
         <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<LogIn />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path='/profile'  element={<Client />} />
        <Route exact path='/admin'  element={<Admin />} />
        <Route exact path='/users'  element={<USERS />} />
        <Route exact path='/loader' element={<Loader />} />
        <Route exact path='/feeds' element={<Feeds />} />
      </Routes>
    </div>
  );
}

export default App;
