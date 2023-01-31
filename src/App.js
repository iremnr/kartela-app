//import logo from './login_page.png';

import './style.css'
import Bootstrap from './Bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import User_menu from './components/user_menu';
import Yonetici_menu from './components/yonetici_menu';
import AddRoom from './components/AddRoom';
import AddSession from './components/AddSession';
import { Routes, Route, Link, NavLink } from 'react-router-dom';


function App() {
  return (
    /*<div className="App">
      <div className="login_img">
        <img src="/login_page.png" alt="" />
      </div>
      <div>
        <Bootstrap />
      </div>
      

    </div>*/
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/menu" element={<User_menu />} />
          <Route path="/yonetici-menu" element={<Yonetici_menu />} />
          <Route path="/seans-ekle" element={<AddSession />} />
          <Route path="/oda-ekle" element={<AddRoom />} />
       </Routes>
      
  

    

  );
}

export default App;
