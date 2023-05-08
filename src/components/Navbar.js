import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {

  // Top으로 이동
  function moveToTop() {
    window.scrollTo({
      top: 0, 
      behavior: 'smooth', 
    })
  }

  // About으로 이동
  function moveToAbout() {
    window.scrollTo({
      top: 1140, 
      behavior: 'smooth',
    })
  }

  // Service로 이동
  function moveToService() {
    window.scrollTo({
      top: 2000, 
      behavior: 'smooth',
    })
  }
  
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={moveToTop}>
            RULB
            {/* <i class="fas fa-regular fa-eraser fa-bounce"/> */}
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item' onClick={moveToTop}>
              <Link to='/' className='nav-links'>
                Home
              </Link>
            </li>
            <li className='nav-item' onClick={moveToAbout}>
              <Link
                className='nav-links'
              >
                About
              </Link>
            </li>
            <li className='nav-item' onClick={moveToService}>
              <Link
                className='nav-links'
              >
                Service
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='nav-links'
              > <i className='fas fa-sharp fa-regular fa-globe' />
              </Link>              
            </li>
          </ul>
        </div>
      </nav>
    </>
  );

  }

export default Navbar;