import React from 'react';
// import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Home from './Components/Home';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Timesheet from './Components/Timesheet';
import {Routes,Route} from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className='App'>
      <ul>
        <li><a href='/home'>Home</a></li>
        <li><a href='/signup'>Signup</a></li>
        <li><a href='/login'>Login</a></li>
        <li><a href='/timesheet'>Timesheet</a></li>
      </ul>
        <Routes>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/timesheet' element={<Timesheet/>}></Route>
        </Routes>
    </div>
  );
}
export default App;