import React from 'react';

function ServiceTable(props){
	return(
    <tr>
    	<td className="serviceTitle">{props.servicess.title}</td>
    	<td className="serviceColPrice">{props.servicess.price1}</td>
    	<td className="serviceColPrice">{props.servicess.price2}</td>
    </tr>
	);
}

export default ServiceTable;