import './App.css';
import './HeaderNav';
import {NavBar} from './HeaderNav';
import { useState } from 'react';
import {AsideContentBar} from './AsideContentBar'

function App() {
  const [asideName,setAsideName] = useState("HTML");
  const [contentName,setContentName] = useState("Introduction");

  function setName(n)
  {
    setAsideName(n);
    console.log(asideName);

  }

  return (
  <body>
    <h3>Web Development and Programming Languages</h3>
    <NavBar setAsideName={setName}/>
    <div className="middle" >
      <AsideContentBar asideName={asideName} />
      <p>Coming Soon .....!</p>
    </div>
  </body>
  );
}

export default App;
