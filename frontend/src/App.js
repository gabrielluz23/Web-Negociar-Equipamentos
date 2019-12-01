import React from 'react';
import './App.css';

import logo from './images/logo.jpg';
import Routes from './router';

function App() {

  return (
   <div className="container">
     <img src={logo} alt=""/>
     <div className="content">
       <Routes/>
     </div>
   </div>
  );
}

export default App;
