import {
BrowserRouter,
Route,
Routes
} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchUser } from './redux/slices/authSlice';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
    const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(fetchUser());
    }
  }, [dispatch]);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
