import React, { useEffect, useState } from 'react'
import './Navbar.scss'

const Navbar = () => {
    const [active, setActive] = useState(false);
    const [show, setShow] = useState(false);

    // close mobile navbar when clicking a link
    const closeMenu = () => {
        setActive(!active)
    }

    // show the navbar after 100px
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setShow(true);
            } else {
                setShow(false)
            };
        });
        return () => {
            window.removeEventListener('scroll', null)
        }
    }, []);

    return (
        <div className="navbar">
            <nav className={`${active && 'active'} ${show && 'show'}`}>
                <div className="nav-container">
                    <a href="#header"><h1 className="nav-logo">Amaisse</h1></a>

                    <div className="nav-menu">
                        <a className={`${active && 'active'}`} href="#desprenoi">Despre Noi</a>
                        <a className={`${active && 'active'}`} href="#servicii">Servicii</a>
                        <a className={`${active && 'active'}`} href="#resources">Resurse</a>
                        <a className={`${active && 'active'}`} href="#faq">FAQ</a>
                    </div>

                    <a href="#contact" className='nav-btn btn-light'>Contact</a>

                    <button
                        className={`hamburger ${active && 'active-hamburger'}`}
                        onClick={() => setActive(!active)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </nav>
            <div className={`nav-menu-mobile ${active && 'active'}`}>
                <a className={`${active && 'active'}`} onClick={closeMenu} href="#desprenoi">Despre Noi</a>
                <a className={`${active && 'active'}`} onClick={closeMenu} href="#servicii">Servicii</a>
                <a className={`${active && 'active'}`} onClick={closeMenu} href="#resources">Resurse</a>
                <a className={`${active && 'active'}`} onClick={closeMenu} href="#faq">FAQ</a>
                <a onClick={closeMenu} href="#contact" className={`nav-btn btn-light ${active && 'active'}`}>Contact</a>
            </div>
        </div>
    )
}

export default Navbar