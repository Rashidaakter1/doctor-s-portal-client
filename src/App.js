
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Reviews from './Pages/Reviews/Reviews';
import Navbar from './Pages/Shared/Navbar/Navbar';
import RequireAuth from './Pages/Shared/RequireAuth/RequireAuth';
import Signup from './Pages/Signup/Signup';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointment from './Pages/Dashboard/MyAppointment';
import MyReviews from './Pages/Dashboard/MyReviews';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-12' >
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/appointment" element={<RequireAuth>
          <Appointment></Appointment>
        </RequireAuth>} />

        <Route path="/dashboard" element={<RequireAuth><Dashboard/></RequireAuth>}>
          <Route  index element={<MyAppointment></MyAppointment>}></Route>
          <Route path='review'  element={<MyReviews></MyReviews>}></Route>
        </Route>
        <Route path="/reviews" element={<Reviews></Reviews>} />
        <Route path="/contact" element={<Contact></Contact>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/signup" element={<Signup></Signup>} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
