import React from 'react'
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Akash</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#skills" className="footer__link">Skills</a>
                </li>

                <li>
                    <a href="#qualification" className="footer__link">Qualification</a>
                </li>
            </ul>

            <div className="footer__social">
            <a href="https://www.instagram.com/akzhxx_?igsh=MW44MGlxMWpna3Jtdw==" className="footer__social-link" rel="noopener noreferrer" target="_blank">
            <i class="uil uil-instagram"></i>
                </a>

                <a href="https://www.linkedin.com/in/im-akasharul/" className="footer__social-link" rel="noopener noreferrer" target="_blank">
                    <i class="uil uil-dribbble"></i>
                </a>

                <a href="https://github.com/21002624" className="footer__social-link" rel="noopener noreferrer" target="_blank">
                    <i class="uil uil-github-alt"></i>
                </a>
            </div>
             <span className="footer__copy">Developed by Akash</span>
        </div>
    </footer>
  )
}

export default Footer
