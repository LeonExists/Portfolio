import './Hero.css'

// Assets
import reactLogo from '../assets/react.svg'


function Hero() {
  return (
    <>
      <div className="section">
        <div className="introduction">
          <img src={reactLogo} alt="React logo" className="icon" />
          <h3 className="text">Hello I'm Leon</h3>
        </div>

        <h1 className="title">Making code and pixel dance in Harmony.</h1>
      </div>
    </>
  )
}

export default Hero
