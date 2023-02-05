//import logo from './login_page.png';

import './style.css'
import Bootstrap from './Bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import User_menu from './components/user_menu';
import SessionList from './components/SessionList';
import Yonetici_menu from './components/yonetici_menu';
import AddRoom from './components/AddRoom';
import AddSession from './components/AddSession';
import { Routes, Route, Link, NavLink } from 'react-router-dom';
import Sessions from './components/Sessions';
import CreateAct from './components/CreateAct';
import Calendar from './components/Calendar';
import Clients from './components/Clients'
import AddTherapist from './components/AddTherapist'


function App() {
  return (


      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/menu" element={<User_menu />} />
          <Route path="/yonetici-menu" element={<Yonetici_menu />} />
          <Route path="/seans-ekle" element={<AddSession />} />
          <Route path="/oda-ekle" element={<AddRoom />} />
          <Route path="/seanslarim" element={<Sessions/>} />
          <Route path="/seans-liste" element={<SessionList/>} />
          <Route path="/terapist-ekle" element={<AddTherapist/>} />
          <Route path="/danisanlarim" element={<Clients/>} />
       </Routes>
      

  );
}

export default App;
