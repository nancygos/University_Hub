import React from 'react';
import Home from './components/Home';
import Contact from "./components/Contact";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import {BrowserRouter, Route, Routes} from 'react-router-dom';

// colleges
import Diploma from './components/colleges/Diploma';
import Btech from './components/colleges/Btech';
import Mtech from './components/colleges/Mtech';
import Bcom from './components/colleges/Bcom';
import Bba from './components/colleges/Bba';
import Mba from './components/colleges/Mba';
import Mcom from './components/colleges/Mcom';
import Ba from './components/colleges/Ba';
import Bca from './components/colleges/Bca';
import Bfa from './components/colleges/Bfa';
import Bpharma from './components/colleges/Bpharma';
import Llb from './components/colleges/Llb';
import Llm from './components/colleges/Llm';
import Ma from './components/colleges/Ma';
import Mbbs from './components/colleges/Mbbs';
import Mca from './components/colleges/Mca';
import Mpharma from './components/colleges/Mpharma';
import Pg from './components/colleges/Pg';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>

      <Routes>
        <Route path ='/' element ={<Home />} />
        <Route path='contact' element={<Contact />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<SignUp />} />

        {/* colleges */}
        <Route path='btech' element={<Btech />} />
        <Route path='bba' element={<Bba />} />
        <Route path='mtech' element={<Mtech />} />
        <Route path='diploma' element={<Diploma />} />
        <Route path='bcom' element={<Bcom />} />
        <Route path='mba' element={<Mba />} />
        <Route path='mcom' element={<Mcom />} />
        <Route path='ba' element={<Ba />} />
        <Route path='bca' element={<Bca />} />
        <Route path='bfa' element={<Bfa />} />
        <Route path='bpharma' element={<Bpharma />} />
        <Route path='llb' element={<Llb />} />
        <Route path='llm' element={<Llm />} />
        <Route path='ma' element={<Ma />} />
        <Route path='mbbs' element={<Mbbs />} />
        <Route path='mca' element={<Mca />} />
        <Route path='pg' element={<Pg />} />
        <Route path='mpharma' element={<Mpharma />} />
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
