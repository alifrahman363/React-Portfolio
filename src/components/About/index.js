import { useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGitAlt, faHtml5, faJsSquare, faReact, faVuejs } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => { 
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() =>{
        setTimeout(() => { 
            return setLetterClass('text-animate-hover')
        }, 3000);
    }, [])
    
    return(

        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']} idx={15}/>
                    </h1>
                    <p>
                        I'm very ambitious web-developer looking for a role in established IT company with the opportunity
                        to work with the latest technology on challenging and diverse projects.
                    </p>
                    <p>
                        I'm quietly confident, naturally curious, and perpetually working on improving my chops and design
                        problem at a time.
                    </p>
                    <p>
                        If i need to define myself in one sentence that would be family person, tech-obsessed and a gamer!!!
                    </p>

                </div>

                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faVuejs} color='#DD0031'/>
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faHtml5} color='#F06529'/>
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faCss3} color='#28A4D9'/>
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faReact} color='#5ED4F4'/>
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faJsSquare} color='#EFD81D'/>
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon={faGitAlt} color='#EC4B28'/>
                        </div>
                    </div>
                </div>
            </div>

            <Loader type='pacman'/>

        </>
    )
}

export default About