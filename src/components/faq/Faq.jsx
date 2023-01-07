import React, { useState } from 'react'
import './Faq.scss'
import { questions } from '../../utils/information'
import { FaLongArrowAltRight } from 'react-icons/fa'

const Faq = () => {
    const [selected, setSelected] = useState(null);

    const toggle = index => {
        if (selected === index) {
            return setSelected(null)
        }
        setSelected(index)
    }

    return (
        <div className="faq" id='faq'>
            <h1 className='underline'>Întrebări frecvente</h1>
            <h1 className='bck bkg-1'>?</h1>
            <h1 className='bck bkg-2'>?</h1>
            <h1 className='bck bkg-3'>?</h1>
            <div className="faq-wrapper">
                {questions.map((question, index) => {
                    return (
                        <div className="question" key={index}>
                            <div className="title" onClick={() => toggle(index)}>
                                <FaLongArrowAltRight className='arrow-icon' />
                                <h2 className={`${selected === index && 'show'}`}>
                                    {question.question}
                                </h2>
                                <span>{selected === index ? '-' : '+'}</span>
                            </div>
                            <div className={`content ${selected === index && 'show'}`}>
                                <p>{question.answer}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Faq