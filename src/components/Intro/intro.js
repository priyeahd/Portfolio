import React from "react";
import './intro.css'
import bg from '../../assets/unnamed.png';

import { Link } from 'react-scroll';

const Intro = () => {
    return (
        <section id="intro" >

            <div className="introContent" >
                <div className="introTextColumn">

                    <span className="hello">Hello, </span>
                    <span className="introText">I'm <span className="introName">Priya Deshmukh</span></span>
                    <p className="introPara">Website Designer and Backend Developer </p>
                    <p className="introPara">Looking for new grad roles! </p>




                </div>
            </div>

            <img src={bg} alt="Profile" className="bg" />



        </section >
    )
}

export default Intro;