import React from 'react'
import '../Styles/home.scss'
import { ArrowRightAltRounded } from '@mui/icons-material'
import { Link } from 'react-scroll';

export default function Home() {
  return (
    <div name='home' className='home'>
        <div className="home__body">
            <div className="home__texts">
                <h1 className='home__texts-child'>Hi, my name is</h1>
                <h2 className='home__texts-child'>Bahodir Rashidov</h2>
                <h3 className='home__texts-child'>I'm a Frontend Developer.</h3>
                <p className='home__texts-child'>I'm a frontend developer in building expectional digital experiences. Currently i'm focused on building responsive web applications</p>
            </div>
            <div className="home__button">
            <Link activeClass='navbar__active' className='navbar__menu-link' to='work' smooth={true} duration={500}> <button className='button'>view work<span><ArrowRightAltRounded/></span></button></Link>
            </div>
        </div>     
    </div>
  )
}
