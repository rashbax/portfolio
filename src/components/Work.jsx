import React from 'react'
import folio from '../logos/folio.png'
import baxa from '../logos/baxa.png'
import auth from '../logos/auth.png'
import cycle from '../logos/cycle.png'
import forecast from '../logos/forecast.png'
import clock from '../logos/clock.png'
import '../Styles/work.scss'
import { ArrowRightAltRounded } from '@mui/icons-material'

export default function Work() {
  return (
    <div name='work' className='work'>
        <div className="work__body">
            <div className="work__head">
                <h1 className='titleborder'>Work</h1>
                <p >// Check out some of my recent work</p>
            </div>
            <div className="work__main">
                <div className="work__main-row">
                    <div className="work__main-col" >
                        <div className="work__main-img">
                            <img src={folio} alt="x" />
                        </div>
                        <div className="work__main-items">
                        <div className="work__title">Portfolio website</div>
                        <a className='work__main-link' target='_blank' rel="noopener noreferrer" href="https://rashbax.github.io/folio/">Demo <ArrowRightAltRounded className='work__main-icon'/></a>
                        </div>
                    </div>
                    <div className="work__main-col" >
                    <div className="work__main-items">
                        <div className="work__main-img">
                            <img src={clock} alt="x" />
                        </div>
                        <div className="work__title">Clock website</div>
                        <a className='work__main-link' target='_blank' rel="noopener noreferrer" href="https://rashbax.github.io/Clock/">Demo <ArrowRightAltRounded className='work__main-icon'/></a>
                        </div>
                    </div>
                    <div className="work__main-col" >
                    <div className="work__main-img">
                            <img src={cycle} alt="x" />
                        </div>
                    <div className="work__main-items">
                        <div className="work__title">Cycle Shop</div>
                        <a className='work__main-link' target='_blank' rel="noopener noreferrer" href="https://rashbax.github.io/cycle/">Demo <ArrowRightAltRounded className='work__main-icon'/></a>
                        </div>
                    </div>
                    <div className="work__main-col" >
                    <div className="work__main-img">
                            <img src={auth} alt="x" />
                        </div>
                    <div className="work__main-items">
                        <div className="work__title">Authentication WebApp</div>
                        <a className='work__main-link' target='_blank' rel="noopener noreferrer" href="https://rashbax.github.io/authapp/">Demo <ArrowRightAltRounded className='work__main-icon'/></a>
                        </div>
                    </div>
                    <div className="work__main-col" >
                    <div className="work__main-img">
                            <img src={baxa} alt="x" />
                        </div>
                    <div className="work__main-items">
                        <div className="work__title">SweetShop</div>
                        <a className='work__main-link' target='_blank' rel="noopener noreferrer" href="https://rashbax.github.io/baxa1/">Demo <ArrowRightAltRounded className='work__main-icon'/></a>
                        </div>
                    </div>
                    <div className="work__main-col" >
                    <div className="work__main-img">
                            <img src={forecast} alt="x" />
                        </div>
                    <div className="work__main-items">
                        <div className="work__title">Forecast WebApp</div>
                        <a className='work__main-link' target='_blank' rel="noopener noreferrer" href="https://rashbax.github.io/WeatherApp/">Demo <ArrowRightAltRounded className='work__main-icon'/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
