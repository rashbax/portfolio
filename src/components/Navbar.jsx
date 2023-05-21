import React from 'react';
import '../indexx.scss'
import '../Styles/navbar.scss'
import logo from '../logos/br.png'
import { Instagram } from '@mui/icons-material';
import { GitHub } from '@mui/icons-material';
import { Download } from '@mui/icons-material';
import { Telegram } from '@mui/icons-material';
import { Link } from 'react-scroll';


export default function Navbar() {
  
  return (
    <div className='navbar'>
          <div className='navbar__body'>
            <div className="navbar__logo">
              <img src={logo} alt="x" />
            </div>
            <div className="navbar__menu">
                <ul className='navbar__menu-list'>
                  <li className="navbar__menu-item"><Link spy={true} activeClass='navbar__active' className='navbar__menu-link' to='home' smooth={true} duration={500}>Home</Link></li>
                  <li className="navbar__menu-item"><Link spy={true}  activeClass="navbar__active" className='navbar__menu-link' to='about' smooth={true} duration={500}>About</Link></li>
                  <li className="navbar__menu-item"><Link spy={true} activeClass="navbar__active" className='navbar__menu-link' to='skills' smooth={true} duration={500}>Skills</Link></li>
                  <li className="navbar__menu-item"><Link spy={true} activeClass='navbar__active' className='navbar__menu-link' to='work' smooth={true} duration={500}>Work</Link></li>
                  <li className="navbar__menu-item"><Link spy={true} activeClass='navbar__active' className='navbar__menu-link' to='contact' smooth={true} duration={500}>Contact</Link></li>
                </ul>
            </div>
          </div>
        <div className="social__icons">
          <ul className="social__icons-list">
            <li className="social__icons-item instagram">
              <a target='_blank' rel="noopener noreferrer" href="https://www.instagram.com/bakhodirrashidov_/">Instagram <Instagram className='social-icon'/></a>
            </li>
            <li className="social__icons-item github">
              <a target='_blank' rel="noopener noreferrer" href="https://github.com/rashbax">Github <GitHub className='social-icon'/></a>
            </li>
            <li className="social__icons-item telegram">
              <a target='_blank' rel="noopener noreferrer" href="t.me/bakhodirrashidov">Telegram <Telegram className='social-icon'/></a>
            </li>
            <li className="social__icons-item resume">
              <a target='_blank' rel="noopener noreferrer" href="https://docs.google.com/document/d/1PWBUL1usYOq2MgrqtHto4JPlT0m_P4GZ/edit?usp=share_link&ouid=115490720875093717675&rtpof=true&sd=true">Dowload CV<Download className='social-icon'/></a>
            </li>
          </ul>
        </div>
    </div>
  )
}
