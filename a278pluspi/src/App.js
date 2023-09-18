import './App.css';

/*
import Bio from './components/Bio';
import Portfolio from './components/Portfolio';
import Education from './components/Education';
import Math from './components/Math';
import Links from './components/Links';
import Miscellaneous from './components/Miscellaneous';
import Brand from './components/Brand';
import Updates from './components/Updates';
import Contact from './components/Contact';

import {Routes, Route, Outlet, Link} from "react-router-dom";
*/

function App() {
  return (
    <div className="App">
      Hello and welcome all to my site! Here you can explore many of the best aspects of “me” by clicking one of the buttons below.
      <div className="button_container">
        <div className="button_set">
          <button className="button_red">About me<br/><span style = {{fontSize:"12px"}}>Coming soon</span></button>
          <button className="button_red">My projects and work experience<br/><span style = {{fontSize:"12px"}}>Coming soon</span></button>
          <button className="button_red">My course history<br/><span style = {{fontSize:"12px"}}>Coming soon</span></button>
          <button className="button_blue">My mathematical stuff<br/><span style = {{fontSize:"12px"}}>Coming soon</span></button>
          <button className="button_blue">Links to useful websites<br/><span style = {{fontSize:"12px"}}>Coming soon</span></button>
          <button className="button_blue">Miscellaneous<br/><span style = {{fontSize:"12px"}}>Coming soon</span></button>
          <button className="button_orange">My branding (A278+π)<br/><span style = {{fontSize:"12px"}}>Coming soon</span></button>
          <button className="button_orange">Site updates<br/><span style = {{fontSize:"12px"}}>Coming soon</span></button>
          <button className="button_orange">Contact me<br/><span style = {{fontSize:"12px"}}>Coming soon</span></button>
        </div>
      </div>
    </div>
  );
}

export default App;