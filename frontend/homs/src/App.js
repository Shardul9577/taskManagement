import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Bar from './Components/Bar';
import Calender from './Components/Calender';
import Mytask from './Components/Mytask';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Alltasks from './Components/Alltasks';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Bar/>
        <Routes>
          <Route path='/' element={<div style={{display:"flex",justifyContent:"space-evenly", marginTop:"5%"}}><Calender/><Mytask/></div>}/>
        </Routes>
        <Routes>
          <Route path='/mytasks' element={<Alltasks/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
