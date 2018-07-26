import React from 'react';

function ServiceTable(props){
	return(
    <tr>
    	<td className="serviceTitle">{props.servicess.title}</td>
    	<td>{props.servicess.price1}</td>
    	<td>{props.servicess.price2}</td>
    </tr>
	);
}

export default ServiceTable;