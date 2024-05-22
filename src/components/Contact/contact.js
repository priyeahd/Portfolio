import React from 'react'
import './contact.css';
import GitHub from '../../assets/git.png';
import LinkedIn from '../../assets/linked-in.png';
import Gmail from '../../assets/g-mail.png';


const Contact = () => {

    return (
        <section>
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me </h1>

                <span className="contactDesc" > Please fill out the form below
                    to discuss any work opportunities</span>

                <form className='contactForm'>
                    <input type="text" className="name" placeholder='Your Name' />
                    <input type='email' className='email' placeholder='Your Email' />
                    <textarea class='msg' name="message" rows="5" placeholder='Your Message'></textarea>
                    <button type='submit' value='Send' className="submitBtn">Submit</button>

                    <div className="links">
                        <img src={GitHub} alt="Github" className="link" />
                        <img src={LinkedIn} alt="LinkedIn" className="link" />
                        <img src={Gmail} alt="Gmail" className="link" />
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Contact;