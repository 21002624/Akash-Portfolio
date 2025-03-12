import React, { useState, useEffect } from 'react';
import "./Header.css";
import CustomizedSwitches from '../Switch/Switch';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header");
      if (window.scrollY >= 80) {
        header.classList.add("show-header");
      } else {
        header.classList.remove("show-header");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="header">
      <nav className="nav container">
        <a href="#home" className="nav__logo">
          Akash
        </a>

        <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => setActiveNav('#home')}
                className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}
              >
                <i className="uil uil-estate nav__icon"></i>Home
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#about"
                onClick={() => setActiveNav('#about')}
                className={activeNav === "#about" ? "nav__link active-link" : "nav__link"}
              >
                <i className="uil uil-user nav__icon"></i>About
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#qualification"
                onClick={() => setActiveNav('#qualification')}
                className={activeNav === "#qualification" ? "nav__link active-link" : "nav__link"}
              >
                <i className="uil uil-scenery nav__icon"></i>Qualification
              </a>
            </li>


            <li className="nav__item">
              <a
                href="#skills"
                onClick={() => setActiveNav('#skills')}
                className={activeNav === "#skills" ? "nav__link active-link" : "nav__link"}
              >
                <i className="uil uil-file-alt nav__icon"></i>Skills
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#services"
                onClick={() => setActiveNav('#services')}
                className={activeNav === "#services" ? "nav__link active-link" : "nav__link"}
              >
                <i className="uil uil-briefcase-alt nav__icon"></i>Projects
              </a>
            </li>

            {/* <li className="nav__item">
              <a
                href="#Certificate"
                onClick={() => setActiveNav('#Certificate')}
                className={activeNav === "#Certificate" ? "nav__link active-link" : "nav__link"}
              >
                <i className="uil uil-briefcase-alt nav__icon"></i>Certificates
              </a>
            </li> */}

            

            <li className="nav__item">
              <a
                href="#contact"
                onClick={() => setActiveNav('#contact')}
                className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"}
              >
                <i className="uil uil-message nav__icon"></i>Contact
              </a>
            </li>

            <li className="nav__item">
              <div className="switch">
                <CustomizedSwitches />  
              </div>
            </li>
          </ul>


          
          <div> 
            <i className='uil uil-times nav__close' onClick={() => setToggle(!toggle)}></i>
          </div>

        </div>

        <div className="nav__toggle" onClick={() => setToggle(!toggle)}>
          <i className='uil uil-apps'></i>
        </div>



      </nav>
    </header>
  );
};

export default Header;
