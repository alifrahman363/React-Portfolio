import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser' 
// import { MapContainer, Marker, Popup,TileLayer } from 'react-leaflet'
import { MapContainer, TileLayer } from 'react-leaflet'

import "leaflet/dist/leaflet.css";

const Contact =() => { 
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() =>{
        setTimeout(() => { 
            return setLetterClass('text-animate-hover')
        }, 4000);
    }, [])

    const sendEmail = (e) =>{
        e.preventDefault()
        emailjs.sendForm(
            'service_w3yjto6',
            'template_akyamkd',
            refForm.current,
            'mH12hAugcJMz-4mR0'
            ).then(
                () =>{
                    alert('Message sent successfully!')
                    window.location.reload(false)
                },
                ()=>{
                  alert('Failed to send the message. Try again')   
                }
            ) 
    }

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>  
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={[ 'C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']} idx={15}/>
                    </h1>
                    <p>
                        I am interested in freelancing opportunities - especially ambitious or large projects.
                        However, if you have other requests or questions, don't hesitate to contact me using the form below.
                    </p>   
 
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type='text' name='name' placeholder='Name' required/>  
                                </li>
                                <li className='half'>
                                    <input type='email' name='email' placeholder='Email' required/>  
                                </li>
                                <li>
                                    <input type='text' name='subject' placeholder='Subject' required/> 
                                </li>
                                <li>
                                    <textarea type='text' name='message' placeholder='Message' required></textarea>  
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value='SEND'/>  
                                </li>
                            </ul>
                        </form>  
                    </div>  
                </div>
                 
                 <div className='info-map'>
                    Alif Rahman, <br/>
                    Bangladesh, <br/>
                    6, Laldighi West, Jashore, Bangladesh <br/>
                    <span>alifrahman363@gmail.com</span>
                    
                 </div>

                 <div className='map-wrap'>\
                    <MapContainer center={[23.1648, 89.2116]} zoom={13} >
                        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
                        {/* <Marker position={[23.1648, 89.2116]}>
                            <Popup>Alif lives here. Visit for a cup of tea!</Popup>  
                        </Marker> */}
                    </MapContainer>
                 </div>
            </div>
            <Loader type='pacman'/>
        </>
    )
}

export default Contact
 
