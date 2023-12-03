import React from 'react';
import logo from './assets/images/logo.svg'
import './App.css';
function App() {
  return (
    <>
      <div className='container-fluid navBar'>
        <div className='row'>
          <div className="col-lg-2 logo logo pt-4 offset-lg-1">
            <img src={logo} alt="" />
          </div>
          <div className="col-lg-2 menu pt-4">
            <ul className='d-flex justify-content-evenly '>
              <li>Home</li>
              <li>About</li>
              <li>belog</li>
            </ul>
          </div>
          <div className="col-lg-2 offset-lg-2 pt-4 menu">
            <ul className='d-flex justify-content-center '>
              <li>Sign in</li>
              <li>Signp</li>
            </ul>
          </div>
          <div className="col-lg-3 pt-3 butn">
            <button className='button'>
              Become a member arrow
            </button>
          </div>
        </div>
      </div>
      <div className='container d-flex justify-content-center'>
        <div className='bar'></div>
        <div className='bar'></div>
        <div className='bar'></div>
        <div className='bar'></div>
      </div>
    </>
  );
}

export default App;
