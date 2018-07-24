import React from 'react'; 

function GiftCards (){
  return(
    <section id="giftCards">
	    <div className="body">
		    <div className="row">
		      <div className="col-md-8">
		        <h2>Gift Certificates</h2>
		        <h4>Package</h4>
		        <p>
		          Any amount gift certificate available in store upon request.
		        </p>
		        <h2>Terms & Conditions</h2>
		        <p>
							Gift certificates are non-refundable and only redeemable at Nail Palace Santa Clarita Valley.
							</p>
		      </div>
		    <div className="col-md-4 d-none d-md-block">
		      <img className="img-fluid" src="http://placekitten.com/g/325/514"/>
		    </div>
		  </div>
	  </div>
  </section>
  );
}

export default GiftCards;