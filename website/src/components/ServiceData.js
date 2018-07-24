import React from 'react';

function ServiceData(props){
	return(
	    	<div>
          <h4>{props.service.title} {props.service.price}</h4>
          <p>{props.service.desc}</p>
        </div>
	);
}

export default ServiceData;