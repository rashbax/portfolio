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
            <div className="about__col"><p>I'm a frontend developer in building expectional digital experiences. Currently i'm focused on building responsive web applications  Marcus Aurelius, in full Caesar Marcus Aurelius Antoninus Augustus, original name (until 161 ce) Marcus Annius Verus, (born April 26, 121 ce, Rome [Italy]—died March 17, 180, Vindobona [Vienna, Austria] or Sirmium, Pannonia), Roman emperor (161–180), best known for his Meditations on Stoic</p></div>
        </div>
        <div className="about__cv">
          <button className='button'><a target='_blank' rel="noopener noreferrer" href="https://docs.google.com/document/d/1PWBUL1usYOq2MgrqtHto4JPlT0m_P4GZ/edit?usp=share_link&ouid=115490720875093717675&rtpof=true&sd=true">Download Cv</a> <Download className='about__cv-icon' /></button>
        </div>
    </div>
  )
}
