import logo from './logo.svg';
import './App.css';
import Login from './component/Login';
import Register from './component/Register';
import VerifyEmail from './component/VerifyEmail';
import {  Route, Routes } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import {useState,useEffect} from 'react'
import {auth} from './component/Firebase'

import {onAuthStateChanged} from 'firebase/auth'
import Home from './component/Home';
import Showtime from './component/Showtime';
import Seat from './component/Seat';
import MaxSeat from './component/MaxSeat';
import Bookingconfirmation from './component/Bookingconfirmation';
import ConfirmedBooking from './component/ConfirmedBooking';



function App() {
  const [ChosenMovie,setChosenMovie]=useState(null)
  const [currentUser, setCurrentUser] = useState(null)
  const [timeActive, setTimeActive] = useState(false)
  const [category, setSelectedCategory] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [theatreData, setTheatreData] = useState([]);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const newPhotos = [...photos];
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
     })
  }, [])
  
  
  return (
    <div className="App">
      <AuthProvider value={{photos,setPhotos,newPhotos,currentUser,timeActive, ChosenMovie,setTimeActive,category,selectedTime,selectedSeats,setSelectedSeats,setSelectedTime,setSelectedCategory,setChosenMovie,theatreData,setTheatreData}}>
         <Routes>
         
          <Route path="/" element={<Login/>}/>
          <Route path="/Register" element={<Register/>}/>
          <Route path="/VerifyEmail" element={<VerifyEmail/>}/>
          <Route path="/movie" element={<Home/>}/>
          <Route path="/movie/:movieName" element={<Showtime/>}/>
          <Route path="/Seat/:selectedNumber" element={<Seat/>}/>
          <Route path="/SeatSelection" element={<MaxSeat/>}/>
          <Route path="/BookingPage" element={<Bookingconfirmation/>}/>
          <Route path='/confirmBooking' element={<ConfirmedBooking/>}/>
         </Routes>
         </AuthProvider>
    </div>
  );
}

export default App;