import React from 'react';

function Contact() {
return(
  <section id="contact">
  <div className="row">
    <div className="col-md-7">
      <h2>Contact Nail Palace</h2>
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <h4>Visit Us</h4>
          <p>27600 Bouquet Cyn Rd #128<br/>Saugus, CA 91350<br/>(Across from Albersons)</p>
          <p>T: 661-296-8828<br/>E: tavicky88@yahoo.com</p>
        </div>

        <div className="col-md-6 col-sm-12">
          <h4>Opening Hours</h4>
          <p>Monday – Friday:<br/>9:30 am – 7:00 pm</p>
          <p>Saturday:<br/>9:00 am – 5:30 pm</p>
      		<p>Sunday:<br/>Closed</p>
      		<p>WALK-INS WELCOME</p>
        </div>

      </div>
      <form>
        <input className="form-control" type="text" placeholder="Vicky Ta"/>
        <input className="form-control" type="text" placeholder="tavicky88@gmail.com"/>
        <input className="form-control" type="text" placeholder="Phone"/>
        <input className="form-control" type="text" placeholder="Subject"/>
        <textarea className="form-control" rows="3" placeholder="Message"></textarea>
        <button id="contactBtn">Send</button>
      </form>

      
    </div>
  </div>
  </section>    
      );
  }

  export default Contact;