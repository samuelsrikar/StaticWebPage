import logo from './logo.svg';
import './App.css';
import './HeaderNav';
import {NavBar} from './HeaderNav';
import './AsideContentBar';
import {AsideContentBar} from './AsideContentBar';
import { useState } from 'react';

function App() {
  const [i,SetI] =useState(false);
   
  return (
  <body>
    <h3>Web Development and Programming Languages</h3>
    <NavBar i={i} setI={SetI} />
    <p id="p-tag"></p>
    {/* <AsideContentBar ContentItems={['a','b','c']} /> */}
  </body>
  );
}

export default App;
