import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Create from './pages/Creact.js';
import Home from './pages/Home.js';
import Login from './pages/Login.js';
import Profile from './pages/Profile.js';
import Register from './pages/Register.js';
import Updata from './pages/Updata.js';

function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element = {<Register/>}/>
      <Route path='/login' element = {<Login/>}/>
      <Route path='/home' element = {<Home/>}/>
      <Route path='/profile/:id' element = {<Profile/>}/>
      <Route path='/updata/:id' element = {<Updata/>}/>
      <Route path='/create' element = {<Create/>}/>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
