import React from 'react'
import './navbar.css'
import logo from '../../assets/logo111.jpg';
// import contactImg from '../../assets/logo11.jpg'
import { Link } from 'react-scroll';
// import menu from '../../'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logoNameContainer">
                {/* <img src={logo} alt="Logo" className='logo' /> */}
                <span className="name">Priya Deshmukh</span>
            </div>
            <div className="desktopMenu">
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">
                    Home
                </Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={18} duration={500} className="desktopMenuListItem">
                    About
                </Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">
                    Projects
                </Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={100} duration={500} className="desktopMenuListItem">
                    Contact
                </Link>
            </div>











            {/* </button> */}




            {/* 
            <img src={menu} alt="Menu" className='mobMenu' />

            <div className="desktopMenu">
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">
                    Home
                </Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={18} duration={500} className="desktopMenuListItem">
                    About
                </Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">
                    Projects
                </Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-70} duration={500} className="desktopMenuListItem">
                    Contact
                </Link>
            </div> */}

        </nav>
    )
}

export default Navbar;