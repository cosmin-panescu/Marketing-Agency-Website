import React from 'react'
import './Footer.scss'

const Footer = () => {
    return (
        <footer>
            <div className="footer-wrapper">
                <ul className='text'>
                    <li className='list-title'>AMAISSE AGENCY</li>
                    <li>
                        Suntem PARTENERI de creștere pentru nevoile, dorințele și aspirațiile tale. Cucerim internetul prin serviciile noastre, iar misiunea noastră principală este să ajutăm companiile să ajungă la cel mai înalt nivel din mediul online.
                    </li>
                </ul>

                <ul className='legal'>
                    <li className='list-title'>LEGAL</li>
                    <li>Firmă: PĂNESCU VASILE-COSMIN</li>
                    <li>CUI: 12345678</li>
                </ul>

                <ul className='contacte'>
                    <li className='list-title'>CONTACT</li>
                    <li><a href="https://www.instagram.com/amaisse.agency/">Instagram</a></li>
                    <li><a href="https://www.facebook.com/agencyamaisse">Facebook</a></li>
                    <li>contact@amaisse.com</li>
                    <li>+40 712345678</li>
                </ul>
            </div>
            <h3>Copyright © 2022 Amaisse. All rights reserved</h3>
        </footer>
    )
}

export default Footer