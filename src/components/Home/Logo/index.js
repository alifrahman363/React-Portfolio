import './index.scss'
import logoLetter from '../../../assets/images/A C.png'
import { useRef } from 'react' 
// import { useEffect } from 'react';

const Logo = () => {

    const bgRef = useRef();
    const outLineLogoRef = useRef() ;
    const solidLogoRef = useRef() ;  

    return(
        <div className='logo-container' ref={bgRef}>
            <img ref={solidLogoRef} className='solid-logo' src={logoLetter} alt='s'/> 

            <svg  version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 792 1152" xmlSpace="preserve"> 
                <path ref={outLineLogoRef} class="st11 svg-container" d="m271.8 655.8-68.5 207.6h-88.1l224.2-659.9h102.8l225.2 659.9h-91.1l-70.5-207.6h-234zm216.4-66.6-64.6-189.9c-14.7-43.1-24.5-82.2-34.3-120.4h-2c-9.8 39.2-20.6 79.3-33.3 119.4l-64.6 190.9h198.8z"/><path ref={outLineLogoRef} class="st11 svg-container" d="m312.1 697.7-68.5 207.6h-88.1l224.2-659.9h102.8l225.2 659.9h-91.1l-70.5-207.6h-234zm216.4-66.5-64.6-189.9c-14.7-43.1-24.5-82.2-34.3-120.4h-2c-9.8 39.2-20.6 79.3-33.3 119.4l-64.6 190.9h198.8zm-416.2 233 41.1 42.5m49.9-43.4 41.1 41.2m331.9-41.2 41.1 41.2m49.9-41.2 41.2 41.2M389.3 278.8l41.1 41.2m-141 269.2 41.2 41.1m157.6-41.1 40.3 42M339.4 203.5l41.1 41.1m61.7-41.1 41.1 41.1"/>
            
            </svg>


        </div>
    )
}

export default Logo