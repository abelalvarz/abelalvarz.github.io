import Link from '../styled-components/Link'
import '../themes/navigation.css'
import '../themes/globalPages.css'
import logo from '/Logo.png'
import { useState } from 'react'
const NavigationComponent = () => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    return (
        <div className={`navigation-container ${isMobileMenuOpen ? 'mobile-nav' : ''}`}>
            <div className="logo-container">
                <img src={logo} />
            </div>
            <div className={`nav-content ${isMobileMenuOpen ? 'mobile' : ''}`}>
                <ul>
                    <li>
                        <Link
                            to="home"
                            activeClass='active'
                            spy={true}
                            smooth={true}
                            duration={500}
                        >HOME</Link>
                    </li>
                    <li>
                        <Link
                            to="about"
                            activeClass='active'
                            spy={true}
                            smooth={true}
                            duration={500}>ABOUT ME</Link>
                    </li>
                    <li>
                        <Link to="projects"
                            activeClass='active'
                            spy={true}
                            smooth={true}
                            duration={500}>PROJECTS</Link>
                    </li>
                    <li>
                        <Link to="contact"
                            activeClass='active'
                            spy={true}
                            smooth={true}
                            duration={500}>CONTACT</Link>
                    </li>
                </ul>
            </div>
            <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
                <span>&#9776;</span>
            </div>
        </div>
    )
}

export default NavigationComponent
