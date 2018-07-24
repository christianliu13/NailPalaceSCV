import React from 'react';
import ServiceData from './ServiceData';

const ServiceList = (props) => {
   
  return (
  	<div>
  	{props.services.map((props)=> {
  		return <ServiceData service={props}/>
  	})}
  	</div>
  	);
}

export default ServiceList;