import React from 'react';
import ServiceData from './ServiceData';
import ServiceTable from './ServiceTable';

const ServiceList =(props)=>  {

	const isTable = props.service.isTable;
  if (isTable ===true ) { //if data structure is table return table
    return (
      <div>
        <table className ="table table-sm">
					<thead>
						<tr>
							<th scope="col"></th>
							<th scope="col">{props.service.priceHeading1}</th>
							<th scope="col">{props.service.priceHeading2}</th>
						</tr>
					</thead>
					<tbody>
						{props.service.services.map((props, index)=> {
			  			return <ServiceTable key={index} servicess={props}/>;
			  		})}
					</tbody>
				</table>
			</div>
		);
	} else {
		return (
	  	<div>
		  	{props.service.services.map((props, index)=> {
		  		return <ServiceData key={index} servicess={props}/>;
		  	})}
	  	</div>
  	);
	}	
}

export default ServiceList;