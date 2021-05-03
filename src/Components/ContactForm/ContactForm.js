import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import facebook from '../../icon/facebook (1).png'
import twitter from '../../icon/twitter (1).png'
import linkedin from '../../icon/linkedin (1).png';
import github from '../../icon/github (1).png';
import './ContactForm.css'

const ContactForm = () => {
    const [state, handleSubmit] = useForm("mwkavbbb");
  if (state.succeeded) {
      return <p>Thanks for for yor message. <br/> i will replay back as soon as possible</p>;
  }
    return (
        <div style={{padding:'10px'}}>
            <h1 style={{color:'wheat', marginLeft:'100px', marginTop:'60px', }}>Let's Stay In Touch</h1>
            <div className="row">
            <div className="col-md-5">
            <div  className="message"  style={{border:'1px solid gray', borderRadius:'5px', backgroundColor:'black', width:'400px', marginTop:'50px', padding:'20px', color:'wheat'}}>
                <form id="fs-frm" name="simple-contact-form" accept-charset="utf-8" action="https://formspree.io/f/mwkavbbb" method="post">
                <fieldset id="fs-frm-inputs">
                    <label for="full-name">Full Name</label><br/>
                    <input class="form-control" type="text" name="name" id="full-name" placeholder="First and Last" required=""/>
                    <label for="email-address">Email Address</label><br/>
                    <input class="form-control" type="email" name="_replyto" id="email-address" placeholder="Email" required=""/>
                    <label for="message">Message</label><br/>
                    <textarea class="form-control" rows="1" name="message" id="message" placeholder="message" required=""></textarea>
                    
                    <input class="form-control" type="hidden" name="_subject" id="email-subject" value="Contact Form Submission"/>
                </fieldset>
                <br/>
                <input class="form-control" style={{backgroundColor:'tomato'}} type="submit" value="Submit"/>
                </form>
            </div>
            </div>
            <div style={{textAlign:'center', marginTop:'55px', color:'wheat'}} className="col-md-6">
                <h1>Stay Connected</h1>
                <h5>Kishoreganj, Bangladesh</h5>
                <p>mhktushar018@gmail.com</p>
                <p>+8801940258802</p>

                <div style={{marginTop:'30px'}} className="social-icon">
                    <img style={{width:'50px', marginLeft:'15px'}} src={facebook} alt=""/>
                    <img style={{width:'50px', marginLeft:'15px'}} src={linkedin} alt=""/>
                    <img style={{width:'50px', marginLeft:'15px'}} src={twitter} alt=""/>
                    <img style={{width:'50px', marginLeft:'15px'}} src={github} alt=""/>
                </div>
            </div>
            </div>
        </div>
    );
};

export default ContactForm;