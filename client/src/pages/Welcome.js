import React from 'react';
import logo from '../assets/logo.png'; 
import '../styles.css';
import video from '../assets/background.mp4';
import { Link } from 'react-router-dom';


function Welcome() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      
      <video autoPlay loop muted className='wrapr'>
        <source src={video} type="video/mp4" />
      </video>

      <img src={logo} className="w-64 h-64" alt="App Logo" />

      <div className="mt-8">
      <Link to='/login'>
        <button className="px-4 py-2 text-white bg-ea3c12 rounded">
          Login
        </button>
      </Link>
        
        <Link to='/signup'>
            <button className="px-4 py-2 bg-ea9937 text-white rounded ml-4">
            Sign Up
            </button>
        </Link>
        
      </div>
    </div>
  );
}

export default Welcome;