import React from 'react';

export default function ServiceImg(props) {
	return(
		<div>
			<img className ="serviceImage img-fluid"
			src ={props.pic} alt="Example"/>
		</div>
	);
}

