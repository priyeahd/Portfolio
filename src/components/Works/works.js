import React from "react";
import './works.css';
import Project1 from '../../assets/book-store.png';
import Project2 from '../../assets/emotion-detection.png';
import Project3 from '../../assets/iot-classroom.png';
import Project4 from '../../assets/lab-management-sys.png';

const Works = () => {
    return (
        <section id='works'>
            <h2 className="workstitle">
                My Projects<br />
            </h2>
            <span className="worksDesc">
                I take pride in paying attention to the smallest details and making
                sure that my work
                is pixel perfect.I am excited to bring my skills and experince to help
                businesses achieve their goals
                and create a strong online presence.
            </span>
            <div className="worksImgs">
                <p >Online Book Store Project </p>
                <img src={Project1} alt="" className="worksImg" />

                <p >Emotion detection Website</p>
                <img src={Project2} alt="" className="worksImg" />

                <p >Managing classroom using IOT</p>
                <img src={Project3} alt="" className="worksImg" />

                <p >Lab management System</p>
                <img src={Project4} alt="" className="worksImg" />
            </div>


        </section>
    );
}

export default Works;