import React from 'react'
import './Header.scss'
import video from '../../assets/header-background.mp4'
import { MdArrowForwardIos, MdOutlineArrowForward } from 'react-icons/md'

const Header = () => {
    const [hover, setHover] = React.useState(false)
    return (
        <div className="header" id='header'>
            <div className="header-container">
                <div className="background-video">
                    <video loop muted autoPlay playsInline>
                        <source src={video} />
                    </video>

                </div>

                <div className="header-content">
                    <div className='fill'></div>
                    <h1>We Conquer the Digital</h1>
                    <a href="#contact"
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                        className="header-btn btn-light"
                    >
                        Contactează-ne {hover ? <MdOutlineArrowForward /> : <MdArrowForwardIos />}
                    </a>
                </div>
            </div>

            <svg className="arrows">
                <path className="a1" d="M0 0 L30 32 L60 0"></path>
                <path className="a2" d="M0 20 L30 52 L60 20"></path>
                <path className="a3" d="M0 40 L30 72 L60 40"></path>
            </svg>
        </div>
    )
}

export default Header