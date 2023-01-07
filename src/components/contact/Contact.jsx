import React, { useRef, useState } from 'react';
import './Contact.scss'
import emailjs from '@emailjs/browser';
import { HiOutlineMail } from 'react-icons/hi'
import { BsTelephone, BsInstagram, BsFacebook } from 'react-icons/bs'
import { MdOutlineContentCopy } from 'react-icons/md'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { RiSendPlaneFill } from 'react-icons/ri'
import { IoMdSend } from 'react-icons/io'
import Swal from 'sweetalert2'

const Contact = () => {
  // succesful message sent notif
  const Succes = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 4000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  // error message sent notif
  const Error = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 4000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  const [hover, setHover] = useState(false)

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pzaepjj', 'template_f17slj8', form.current, 'M97RRa0OXN5MZovyl')
      .then((result) => {
        Succes.fire({ // succesful message sent notif
          icon: 'success',
          title: 'Mesajul tău a fost trimis 😎'
        })
        e.target.reset();
      }, (error) => {
        Error.fire({ // error message sent notif
          icon: 'error',
          title: 'Ceva nu merge bine 🤔',
        })
      });
  };

  return (
    <div className="contact" id='contact'>
      <div className="square s1"></div>
      <div className="square s2"></div>
      <div className="square s3"></div>
      <div className="square s4"></div>
      <div className="square s5"></div>
      <div className="contact-title">
        <h1 className='underline'>Ia o pauză</h1>
        <h1 className='underline'>și scrie-ne</h1>
      </div>
      <div className="contact-wrapper">
        <div className="social">
          <a href='https://www.instagram.com/amaisse.agency/' target='_blank'><BsInstagram className='social-icon' /></a>
          <a href='https://www.facebook.com/agencyamaisse' target='_blank'><BsFacebook className='social-icon' /></a>
        </div>

        <div className="contact-info">
          <div>
            <HiOutlineMail className='icon' />
            <h3>contact@amaisse.com</h3>
            <CopyToClipboard text='contact@amaisse.com'>
              <MdOutlineContentCopy className="icon clipboard" />
            </CopyToClipboard>
          </div>
          <div>
            <BsTelephone className='icon' />
            <h3>0712 345 678</h3>
            <CopyToClipboard text='+40 079 9526 060'>
              <MdOutlineContentCopy className="icon clipboard" />
            </CopyToClipboard>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="name-email">
            <input required={true} type="text" name="user_name" placeholder='Numele' />
            <input required={true} type="email" name="user_email" placeholder='Adresa de email' />
          </div>
          <textarea required={true} name="message" placeholder='Mesajul tău' />
          <button
            type="submit"
            value="Send"
            className='btn-light contact-btn'
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            Trimite {hover ? <RiSendPlaneFill /> : <IoMdSend />}
          </button>
        </form>

      </div>
    </div >
  )
}

export default Contact