import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import github from '../../assets/github.svg'
import linkedin from '../../assets/linkedin.svg'
import facebook from '../../assets/facebook.svg'
import instagram from '../../assets/instagram.svg'

const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "a7207971-d04b-43b9-8cce-5c7eb65c71ff");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
      };
  return (
        <div id='contact' className='contact'>
            <div className="contact-title">
                <h1>Get in touch</h1>
                <img src={theme_pattern} alt="theme_pattern" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>I'm currently avaliable to take on new project, so feel free to send me a message about anything that you want me to work on.You can contact a</p>
                    <div className="contact-details">
        <div className="contact-detail">
            <a href="https://github.com/Kavindu80" target="_blank" rel="noopener noreferrer">
                <img src={github} alt="GitHub" />
            </a>
        </div>
        <div className="contact-detail">
            <a href="https://www.linkedin.com/in/kavindu-liyanage-bb4a06276?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="LinkedIn" />
            </a>
        </div>
        <div className="contact-detail">
            <a href="https://www.facebook.com/share/9sn41Wxv1iBtqUUi/?mibextid=qi2Omg" target="_blank" rel="noopener noreferrer">
                <img src={facebook} alt="Facebook" />
            </a>
        </div>
        <div className="contact-detail">
            <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
                <img src={instagram} alt="Instagram" />
            </a>
        </div>
    </div>

            </div>
            <form  onSubmit={onSubmit} className='contact-right'>
                <label htmlFor="">Your Name</label>
                <input type="text" name="" id="" placeholder='Enter your name' />
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter your email' />
                <label htmlFor="">Write your message here</label>
                <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
                <button type='submit' className='contact-submit'>Submit now</button>
            </form>    
        </div>

    </div>
  )
}

export default Contact