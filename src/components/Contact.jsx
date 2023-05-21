import React from 'react'
import { GitHub } from '@mui/icons-material'
import { Instagram } from '@mui/icons-material'
import { Telegram } from '@mui/icons-material'
import '../Styles/contact.scss'

export default function Contact() {
  return (
    <div name='contact' className='contact'>
        <div className="contact__body">
            <div className="contact__head">
                <h1 className='titleborder'>Contact</h1>
                <p>// Submit the form or shoot me an email - bahrashid199@gmail.com</p>
            </div>
            <div className="contact__main">
                <form method='POST' action="https://getform.io/f/0fe99b76-f791-4410-8fbe-d400e55308be">
                    <input type="text" name="name" placeholder='name'/>
                    <input type="text" name="email" placeholder='email'/>
                    <textarea   name="message"  placeholder='message' />
                    <button type='Submit' className='button'>Send message</button>
                </form>
            </div>
            <div className="contact__social">
                <div className="contact__social-body">
                <a target='_blank' rel="noopener noreferrer" href="https://www.instagram.com/bakhodirrashidov_/"><Instagram className='contact__social-icon'/></a>
                <a target='_blank' rel="noopener noreferrer" href="https://github.com/rashbax"><GitHub className='contact__social-icon'/></a>
                <a target='_blank' rel="noopener noreferrer" href="https://t.me/bakhodirrashidov"><Telegram className='contact__social-icon'/></a>
                </div>
            </div>
        </div>
    </div>
  )
}
