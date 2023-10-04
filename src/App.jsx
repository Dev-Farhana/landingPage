import { useState } from 'react';

import './App.css';

function App() {

  return (
    <>

    <nav className='container'> 
      <div className='logo'>
        <img src="https://st3.depositphotos.com/16030310/18317/v/450/depositphotos_183172678-stock-illustration-letters-logo-initial-logo-identity.jpg" alt="logo" width={60} />
      </div>
      <ul>
        <li>Menu </li>
        <li> Location</li>
        <li> About</li>
        <li> Contact</li>
      </ul>
      <button> Log In </button>
    </nav>

    <div className='hero container'>
      <div className='hero-content'>
        <h3>
          Your Feet deserve <br />
          the best <span> Comfort</span> <br />
          of your <span> Own</span>  Shoes.
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus laboriosam voluptatibus illum soluta maiores, vero molestiae minima.
        </p>
        <div className='btns'>
          <button className='primary-btn'> Shop Now </button> 
          <button className='secondary-btn'> Category </button>      
        </div>
        
      </div>

      <div className='hero-img'>
        <img src="/src/assets/shoe.png" alt="image" />
      </div>
      
    </div>
    </>
  )
}

export default App
