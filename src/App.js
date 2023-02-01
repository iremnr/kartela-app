//import logo from './login_page.png';

import './style.css'
import Bootstrap from './Bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import User_menu from './components/user_menu';
import Yonetici_menu from './components/yonetici_menu';
import { Routes, Route, Link, NavLink } from 'react-router-dom';

function App() {
  return (


      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/menu" element={<User_menu />} />
          <Route path="/yonetici-menu" element={<Yonetici_menu />} />
       </Routes>
      

  );
}

export default App;
