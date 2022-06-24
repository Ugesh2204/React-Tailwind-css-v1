import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Home from  './pages/Home';
import About from './pages/About';

function App() {
  return (
    <>
  
    <Navbar/>

    <Routes>
       
       <Route  path='/' element = {<Home/>}/>
       <Route path='/about' element = {<About/>}/>
   
   </Routes>
  
    
 

  
  </>

  );
}

export default App;

