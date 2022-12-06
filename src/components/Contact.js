import React from 'react'
import Navbar from './Navbar'
import thinkingman from './images/thinkingman.webp'
import Footer from './Footer'
function Contact() {
  return (
    <>
        <Navbar />
        <div className='contactContainer'>
          <div className='contactText'>
            <h1 className='topContactText'>Have a Quention?</h1>
            <h1 className='secondContactText'>We are here to Help!</h1>
            <p className='contactPara'>If you have any quentions feel free to reach out to us on details given below.</p>
            <div className='contactButton'> <span className='contactButtonText'>For addmission details mail us on</span> nancyportworks@gmail.com </div>
            <div className='contactButton'> <span className='contactButtonText'>For general queries call us on</span> 9205623750 </div>
          </div>

          <img className='contactImage' src={thinkingman}  alt="contactImage"/>
        </div>

        <Footer />
    </>
  )
}

export default Contact