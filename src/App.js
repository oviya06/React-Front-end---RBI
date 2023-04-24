import ForgotUser from './pages/forgot';
import ForgotPassword from "./pages/fpass";
import NewUser from "./pages/newuser";
import Desk from './pages/desk';
import Loan from './pages/loan';
import Login from './pages/login';
import Appointment from './pages/appointment';
import Schedule from './pages/schedule';
import Offer from './pages/offer';
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Desk/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/forgotu" element={<ForgotUser/>}></Route>
      <Route path="/forgotp" element={<ForgotPassword/>}></Route>
      <Route path="/loan" element={<Loan/>}></Route>
      <Route path="/newuser" element={<NewUser/>}></Route>
      <Route path="/appoint" element={<Appointment/>}></Route>
      <Route path="/offer" element={<Offer/>}></Route>
      <Route path="/schedule" element={<Schedule/>}></Route>
    </Routes>

  );
}

export default App;

