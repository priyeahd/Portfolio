import React from 'react';
import './skills.css';



const skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">
                About Me
            </span>
            <span className="skillDesc">
                Working as ReactJs Developer with 3 years of experience. Responsible for developing and maintaining ReactJs application.
                Extensive experience in developing web pages using HTML,CSS,JavaScript,ReactJs. Having bit experience in MERN stack development.
                Similarly, have experience in working in Java ,Python. Experience in Version Control tools like GIT.

            </span>

            <div className="skillBars">




                {/* <div className='skillBar'>

                    <div className="skillBarText">
                        <div className="infoContainer">
                            <div className="labels">
                                <h2>Full Name :</h2>
                                <h2>University :</h2>
                                <h2>Languages :</h2>
                                <h2>Address :</h2>
                                <h2>Country :</h2>
                            </div>
                            <div className="answers">
                                <h2>Priya Ajay Deshmukh</h2>
                                <h2>University of Dayton</h2>
                                <h2>English, Marathi, Hindi</h2>
                                <h2>Dayton, Ohio</h2>
                                <h2>United States</h2>
                            </div>
                        </div>

                    </div>
                </div> */}

                {/* <div className="skillBar">

                    <div className="skillBarText">

                        <button className="resumeButton">
                            <a href="https://drive.google.com/file/d/1egugJaqScKcqJ09lWtzT0M9zPQJvUT62/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                                Download Resume
                            </a>
                        </button>

                    </div>

                </div> */}

            </div>

        </section>
    );
}


export default skills;