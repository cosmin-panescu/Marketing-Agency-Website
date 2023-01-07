import React from 'react'
import './Services.scss'
import { services } from '../../utils/information'

const Services = () => {
    return (
        <div className="services" id='servicii'>
            <h1 className='underline'>Te ajutăm cu...</h1>
            <div className="serv-container">
                {services.map((service, id) => {
                    return (
                        <div key={id} className="card">
                            <div className="img" data-text={service.dataText}>
                                <img src={service.src} alt={service.alt} />
                            </div>
                            <div className="content">
                                <div>
                                    <h3>{service.title}</h3>
                                    <p>{service.text}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Services