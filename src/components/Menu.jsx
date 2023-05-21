import React from 'react'
import { Link } from 'react-scroll'
import {HomeOutlined } from '@mui/icons-material'
import { InfoOutlined } from '@mui/icons-material'
import { ContactPageOutlined } from '@mui/icons-material'
import { EngineeringOutlined } from '@mui/icons-material'
import { BusinessCenterOutlined } from '@mui/icons-material'
import '../Styles/menu.scss'

export default function Menu() {
  return (
    <div className='menu'>
        <div className="menu__body">
            <ul className="menu__list">
                <li className="menu__item"><Link spy={true} activeClass='active' className='menu__link' to='home' smooth={true} duration={500}><HomeOutlined className='menu__icon'/><span>Home</span></Link></li>
                <li className="menu__item"><Link spy={true} activeClass='active' className='menu__link'  to='about' smooth={true} duration={500}><InfoOutlined className='menu__icon'/><span>About</span></Link></li>
                <li className="menu__item"><Link spy={true} activeClass='active' className='menu__link' to='skills' smooth={true} duration={500}><EngineeringOutlined className='menu__icon'/><span>Skills</span></Link></li>
                <li className="menu__item"><Link spy={true} activeClass='active' className='menu__link' to='work' smooth={true} duration={500}><BusinessCenterOutlined className='menu__icon'/><span>Work</span></Link></li>
                <li className="menu__item"><Link spy={true} activeClass='active' className='menu__link' to='contact' smooth={true} duration={500}><ContactPageOutlined className='menu__icon'/><span>Contact</span></Link></li>
            </ul>
        </div>
    </div>
  )
}
