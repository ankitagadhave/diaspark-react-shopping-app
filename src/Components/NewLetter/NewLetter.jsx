import React from 'react'
import './NewLetter.css'
const NewLetter = () =>{
     return (
        <div className='newletter'>
            <h1>Get Exclusive Offeers On Yuor Email </h1>
            <p>Subscribe to our newletter and stay updated</p>
            <div>
                <input type="email" placeholder='Your Email Id'/>
                <button>Subscribe</button>
            </div>

        </div>
     )
}

export default NewLetter