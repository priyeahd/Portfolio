import React from "react";
import './intro.css'
import bg from '../../assets/unnamed.png';
import btnImg from '../../assets/hiremee.png'
import { Link } from 'react-scroll';

const Intro = () => {
    return (
        <section id="intro">

            <div className="introContent">

                <span className="hello">Hello, </span>
                <span className="introText">I'm <span className="introName">Priya </span><br />Website Designer</span>
                <p className="introPara">I am a skilled and passionate web designer
                    with experience in<br />creating visually appealing and user friendly
                    website.</p>
                <Link><button className="btn"> <img src={btnImg} alt="Hire" className='btnImg' />Hire Me</button></Link>

            </div>

            <img src={bg} alt="Profile" className="bg" />



        </section >
    )
}

export default Intro;