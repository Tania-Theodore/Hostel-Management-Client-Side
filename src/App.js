import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Pages/Home';
import LeftNavbar from './Components/LeftNavbar/LeftNavbar';
import Students from './Pages/Students';
import Staffs from './Pages/Staffs';
import Rooms from './Pages/Rooms';
import Complaints from './Pages/Complaints';
import LoginSignup from './Pages/LoginSignup';

function App() {
  const location = useLocation();

  // Determine if the current route is the login/signup page
  const isLoginPage = location.pathname === '/login';

  return (
    <div className="App">
      {!isLoginPage && <Header />}
      <div>
        {!isLoginPage && <LeftNavbar />}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/students' element={<Students />} />
          <Route path='/staffs' element={<Staffs />} />
          <Route path='/rooms' element={<Rooms />} />
          <Route path='/complaints' element={<Complaints />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
