import React from 'react'
import './Quotes.scss'

const Quotes = ({quote}) => {
  return (
    <div className="quote">
        <div className="quote-container">
            <h1>"{quote}"</h1>
        </div>
    </div>
  )
}

export default Quotes