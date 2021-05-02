import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const ContactForm = () => {
    const [state, handleSubmit] = useForm("https://formspree.io/f/mwkavbbb");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
    return (
        <div>
            <h1 style={{color:'white', marginLeft:'140px', marginTop:'60px', }}>Let's Stay In Touch</h1>
        <div style={{border:'1px solid gray', borderRadius:'5px', backgroundColor:'black', width:'400px', margin:'0 auto', marginTop:'50px', padding:'40px', color:'white'}}>
            <form id="fs-frm" name="simple-contact-form" accept-charset="utf-8" action="https://formspree.io/f/mwkavbbb" method="post">
        <fieldset id="fs-frm-inputs">
            <label for="full-name">Full Name</label><br/>
            <input class="form-control" type="text" name="name" id="full-name" placeholder="First and Last" required=""/>
            <label for="email-address">Email Address</label><br/>
            <input class="form-control" type="email" name="_replyto" id="email-address" placeholder="Email" required=""/>
            <label for="message">Message</label><br/>
            <textarea class="form-control" rows="2" name="message" id="message" placeholder="message" required=""></textarea>
            
            <input class="form-control" type="hidden" name="_subject" id="email-subject" value="Contact Form Submission"/>
        </fieldset>
        <br/>
        <input class="form-control" type="submit" value="Submit"/>
        </form>
        </div>
        </div>
    );
};

export default ContactForm;