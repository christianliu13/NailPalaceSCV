import React from 'react';
import ServiceCat from './ServiceCat';
import ServiceList from './ServiceList';
import ServiceImg from './ServiceImg';

export default function ServiceSection(props) {
	return(
		<div className ="serviceRow row">
			<div className ="col-md-8">
				<ServiceCat cat={props.service.category}/>
				<ServiceList service={props.service}/>
			</div>
			<div className ="col-md-4">
				<ServiceImg pic={props.service.img}/>
			</div>
		</div>
	);
}

