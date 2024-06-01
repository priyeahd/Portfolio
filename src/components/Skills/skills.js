import React from 'react';
import './skills.css';



const skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">
                About Me
            </span>
            <span className="skillDesc">
                I'm an Computer Science Engineering Graduate from Dayton University.

                I have completed my Bachelors in Computer Science Engineering from S.B.Jain , Nagpur.

                <span              >I was a Analyst @ HCLTECH and a Software Egineering Intern @ Radicle.
                </span>
                <p>

                    I have always been a creative person and you can see the creativity shine through my  handmade gifts!

                </p>
                <p>
                    If I am not working you will find me cooking a new recipe or traveling to a new city.
                </p>


                <button className="resumeButton">
                    <a href="https://drive.google.com/file/d/1Gdni3WlddtqjPMwro-AMTz6ChqNmnsXs/view" target="_blank" rel="noopener noreferrer">
                        Download Resume
                    </a>
                </button>




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

        </section >
    );
}


export default skills;