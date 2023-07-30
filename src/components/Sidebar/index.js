import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo-a.png' 
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faSkype } from '@fortawesome/free-brands-svg-icons'


const sidebar =() =>  (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt='logo' /> 
            <img className='sub-logo' src={LogoSubtitle} alt='alif' /> 
        </Link>

        <nav>
            <NavLink exact='true' activeclassname="active" to='/'>
                <FontAwesomeIcon icon={faHome} color='#4d4d4e'/>
            </NavLink>

            <NavLink exact='true' activeclassname="active" className='about-link' to='/about'>
                <FontAwesomeIcon icon={faUser} color='#4d4d4e'/>
            </NavLink>

            <NavLink exact='true' activeclassname="active" className='contact-link' to='/contact'>
                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'/>
            </NavLink>
 
        </nav>
        
         
        <ul>
            <li> <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/alif-rahman007/'> 
            <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' ></FontAwesomeIcon> </a></li>
        
            <li> <a target='_blank' rel='noreferrer' href='https://github.com/alifrahman363'> 
            <FontAwesomeIcon icon={faGithub} color='#4d4d4e' ></FontAwesomeIcon> </a></li>
        
            <li> <a target='_blank' rel='noreferrer' href='skype:live:alif'> 
            <FontAwesomeIcon icon={faSkype} color='#4d4d4e' ></FontAwesomeIcon> </a></li>
        </ul>


    </div>
)

export default sidebar