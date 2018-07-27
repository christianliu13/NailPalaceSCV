import React from 'react';

function About() {
  return(
    <section id="about">
      <div className="body">
        <div className="row">
          <div className="col-md-8">
            <h2>Quality Service</h2>
            <p>
              Nail Palace offers a variety of services for both men and women. Our professional staff use only the highest quality products and are committed to providing the latest in nail care.
            </p>
            <h2>Health and Safety</h2>
            <p>
              Our commitment to your health and overall well-being is our highest priority. As part of this commitment to excellent sanitation, all of our instruments are sterilzied and disinfected after each use.
            </p>
            <p>
              We also carry the one and only Contego Spa Designs Patented 100% disposable liners and airjet guaranteeing you safe and quality service.
            </p>
            <img className="img-fluid" src="http://placekitten.com/g/600/235" alt="Contego AirJet is the best"/>
          </div>

          <div className="col-md-4 d-none d-md-block">
            <img className="img-fluid" src="http://placekitten.com/g/325/508" alt="Example"/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;