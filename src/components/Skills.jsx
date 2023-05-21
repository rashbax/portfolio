import React from 'react';
import react from '../logos/react.png'
import html from '../logos/html.png'
import css from '../logos/css.png'
import sass from '../logos/sass.png'
import github from '../logos/github.png'
import git from '../logos/git.png'
import jqry from '../logos/jqry.png'
import js from '../logos/js.png'
import '../Styles/skills.scss'


export default function Skills() {
  return (
    <div name='skills' className='skills'>
        <div className="skills__body">
            <div className="skills__head">
                <h1 className='titleborder'>experience</h1>
                <p>// These are technologies I've worked with</p>
            </div>
            <div className="skills__main">
                <div className="skills__main-row">
                    <div className="skills__main-col">
                        <div className="skills__main-img"><img src={html} alt="x" /></div>
                        <div className="skills__main-title">HTML</div>
                    </div>
                    <div className="skills__main-col">
                        <div className="skills__main-img"><img src={css} alt="x" /></div>
                        <div className="skills__main-title">CSS</div>
                    </div>
                    <div className="skills__main-col">
                        <div className="skills__main-img"><img src={sass} alt="x" /></div>
                        <div className="skills__main-title">SASS</div>
                    </div>
                    <div className="skills__main-col">
                        <div className="skills__main-img"><img src={js} alt="x" /></div>
                        <div className="skills__main-title">JavaScript</div>
                    </div>
                    <div className="skills__main-col">
                        <div className="skills__main-img"><img src={jqry} alt="x" /></div>
                        <div className="skills__main-title">JQuery</div>
                    </div>
                    <div className="skills__main-col">
                        <div className="skills__main-img"><img src={react} alt="x" /></div>
                        <div className="skills__main-title">React</div>
                    </div>
                    <div className="skills__main-col">
                        <div className="skills__main-img"><img src={git} alt="x" /></div>
                        <div className="skills__main-title">Git</div>
                    </div>
                    <div className="skills__main-col">
                        <div className="skills__main-img"><img src={github} alt="x" /></div>
                        <div className="skills__main-title">GitHub</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
