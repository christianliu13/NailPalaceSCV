import React from 'react';

function ServiceTable(props){
	return(
	    	<div>
	        <tr>
	        	<td>{props.service.title}</td>
	        	<td>{props.service.price1}</td>
	        	<td>{props.service.price2}</td>
	        </tr>
        </div>
	);
}

export default ServiceTable;