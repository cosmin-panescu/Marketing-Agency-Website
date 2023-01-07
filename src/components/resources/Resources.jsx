import React, { useState } from 'react'
import './Resources.scss'
import eBook from '../../assets/ebook1.png'
import eBookPDF from '../../assets/Web-Development-eBook.pdf'

const Resources = () => {
    return (
        <section className="resources" id="resources">
            <h1 className='underline'>Învață cu noi</h1>

            <div className="resources-container">
                <div className="resources-card">
                    <div className="resources-card-image">
                        <img src={eBook} alt="Web Dev eBook" />
                    </div>

                    <div className="resources-card-details">
                        <div className="resources-card-details-content">
                            <h3>Ghid pentru a începe în Web Development</h3>
                            <p> &nbsp; &nbsp; &nbsp; &nbsp; Acest eBook îți oferă atât drumul exact pe care trebuie să îl urmezi pentru a deveni un Web Developer, cât și cele mai bune recomandări de resurse gratuite, de unde poți învăța absolut tot. </p>
                            <a href={eBookPDF} download="Web Development eBook" className="card-download" target="_blank">Download</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resources