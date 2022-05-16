import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import './App.css';
import Apropos from './Pages/Apropos';
import affiche from './image/affiche.png'
import Landing from './components/Landing';
import Navigation from './components/Navigation';
import Contact from './Pages/Contact';

function App() {
  return (
    <div className="App">
   {/* <div style={{ backgroundImage: `url(${affiche})`, position:'fixed',minWidth:'100%',minHeight:'100%',backgroundSize:'cover',backgroundPosition:'center'}}  > </div> */}
   <Navigation/>
  
  <Routes>
 <Route path='/' element={<Landing/>} />
 <Route path='/contacts-Us' element={<Contact/>} />
 <Route path='/Apropos' element={<Apropos/>} />


 
  </Routes>
  <Footer/>
    </div>
  );
}

export default App;
