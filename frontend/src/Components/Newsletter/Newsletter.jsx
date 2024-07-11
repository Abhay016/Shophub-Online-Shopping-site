import React from 'react'
import './Newsletter.css'
const NewsLetter = () => {
  return (
    <div className='flex items-center justify-center'>
    <div className='newsletter'>
        <h1>Get Exclusive offer on Your Email</h1>
        <p>Subscribe to our newsletter</p>
        <div className='newsletter_input'>
            <input type="email" placeholder='Your Email id' />
            <button>Subscribe</button>
        </div>
    </div>
    </div>
  )
}
export default NewsLetter