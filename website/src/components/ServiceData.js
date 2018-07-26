import React from 'react';

function ServiceData(props){
	return(
	    	<div>
          <h4>{props.servicess.title} {props.servicess.price}</h4>
          <p>{props.servicess.desc}</p>
        </div>
	);
}

export default ServiceData;