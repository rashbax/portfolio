import React from 'react'
import '../Styles/about.scss';
import { Download } from '@mui/icons-material';


export default function About() {
  return (
    <div name='about' className='about'>
        <div className="about__row">
            <div className="about__col"><h1 >About</h1></div>
            <div className="about__col"></div>
            <div className="about__col"><h2>Hi. I'm Bahodir, nice to meet you. Please take a look around</h2></div>
            <div className="about__col"><p>I am a passionate and skilled frontend developer with a keen eye for detail and a love for creating immersive digital experiences. Feel free to explore my portfolio and discover how I can contribute to your next frontend development project. I am always open to new challenges and opportunities to create meaningful digital experiences that leave a lasting impression.
Let's collaborate and bring your vision to life through the power of frontend development. Contact me to discuss your project or to simply say hello. I look forward to connecting with you!</p></div>
        </div>
        <div className="about__cv">
          <button className='button'><a target='_blank' rel="noopener noreferrer" href="https://drive.google.com/file/d/1BI62Etz65Eq1EEQqXQ5dY_zpqdBAuLfk/view?usp=share_link">Download Cv</a> <Download className='about__cv-icon' /></button>
        </div>
    </div>
  )
}
