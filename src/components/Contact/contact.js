import React, { } from 'react'
import './contact.css';
import GitHub from '../../assets/git.png';
import LinkedIn from '../../assets/linked-in.png';
import Gmail from '../../assets/g-mail.png';



const Contact = () => {



    return (
        <section>
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me </h1>

                <div className="links">
                    <a href="https://github.com/priyeahd?tab=repositories">
                        <img src={GitHub} alt="Github" className="link" />
                    </a>
                    <a href="https://www.linkedin.com/in/priya-deshmukh">
                        <img src={LinkedIn} alt="LinkedIn" className="link" />
                    </a>
                    <a href="mailto:priyadeshm155@gmail.com">
                        <img src={Gmail} alt="Gmail" className="link" />
                    </a>
                </div>

            </div>
        </section>
    );

}

export default Contact;