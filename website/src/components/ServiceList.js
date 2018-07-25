import React from 'react';
import ServiceData from './ServiceData';
import ServiceTable from './ServiceTable';

const ServiceList = (props) => {
	
	if(props.isTable) { //if data structure is table return table
			return 
			<div>
				<thead>
					<tr>
						<th scope="col"></th>
						<th scope="col">Full Set</th>
						<th scope="col">Fill</th>
					</tr>
				</thead>
				<tbody>
						{props.services.map((props)=> {
			  			return 
			  			<ServiceTable service={props}/>;
			  		})}
				</tbody>
			} 
			{
		  	<div>
			  	{props.services.map((props)=> {
			  		return <ServiceData service={props}/>;
			  	})}
		  	</div>
  		}	
}

export default ServiceList;