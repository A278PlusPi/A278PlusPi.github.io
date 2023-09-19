import './App.css';

import Bio from './components/Bio';
import Homepage from './components/Homepage';

/*
import Portfolio from './components/Portfolio';
import Education from './components/Education';
import Math from './components/Math';
import Links from './components/Links';
import Miscellaneous from './components/Miscellaneous';
import Brand from './components/Brand';
import Updates from './components/Updates';
import Contact from './components/Contact';
*/

import { BrowserRouter as Router, Routes, Route, Outlet, Link, NavLink } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Routes>         
          <Route index element = {<Homepage/>} />
          <Route path="/aboutme" element={<Bio/>} />
      </Routes>    
    </div>
  );
}