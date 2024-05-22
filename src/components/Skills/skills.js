import React from 'react';
import './skills.css';
import UIDesign from '../../assets/uii-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';


const skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">
                What I do
            </span>
            <span className="skillDesc">
                I am a skilled and passionate web designer with experince
                in I am a skilled and passionate web designer
                with experience in creating visually appealing and user friendly
                website.I jave a strong understanding of design and keen eye on details.
                I am proficient in HTML ,CSS and Javacsript ,as well as design software
                such as Adobe Photoshop and illustrator

            </span>

            <div className="skillBars">
                <div className='skillBar'>
                    <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>
                            UI/UX Design
                        </h2>
                        <p>
                            This is a Demo text,you can write your own content here
                        </p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>
                            Website Design
                        </h2>
                        <p>
                            This demo text can be changed while making the production ready website

                        </p>
                    </div>

                </div>
                <div className="skillBar">
                    <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                    <div className='skillBarText'>
                        <h2>
                            App Design
                        </h2>
                        <p>
                            This demo text can be changed while making the production ready website
                        </p>
                    </div>

                </div>
            </div>

        </section>
    );
}


export default skills;