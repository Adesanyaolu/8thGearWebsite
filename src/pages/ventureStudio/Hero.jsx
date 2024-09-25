import React from 'react'
import NewNavbar from '../ResourcesNew/NewNavbar'
import './ventureStudio.css'

const Hero = () => {
  return (
    <div>
      <div className='relative'>
        <div>
          <NewNavbar />
        </div>
        <div className="venture-studio-hero">
          <div className="venture-studio-hero-text align-self-center justify-content-center px-4 py-2">
            <h1 className="text-white fw-semibold lh-sm">Transforming visionary ideas into thriving sustainable ventures with precision and passion</h1>
            <button className='venture-studio-hero-btn btn border'>Transform Your Idea</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
