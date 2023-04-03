import logo from './logo.svg';
import './App.css';
import Home from './home/Home';
import About from './about/About';
import Policy from './policy/Policy';
import Suggestion from './suggestion/Suggestion';
import Login from './login/Login';
import Registration from './registration/Registration'
import Register2 from './register2/Register2'
import Header from './header/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div>
      
    <Header />
    
     <Router>
    
     <Routes>
    <Route path="" element={<Home />} />
    <Route path="home" element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="policy" element={<Policy />} />
    <Route path="suggestion" element={<Suggestion />} />
    <Route path="login" element={<Login />} />
    <Route path="registration" element={<Registration />} />
    <Route path="register2" element={<Register2 />} />
    <Route path="*" element={<Home />} />
    </Routes> 
   </Router> 
   
    </div>

    
  );
}

export default App;
