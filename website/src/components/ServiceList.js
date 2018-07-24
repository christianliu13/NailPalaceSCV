import React from 'react';

const ServiceList = (props) => {
  console.log(props.services.length);

      for (var i = 0; i < props.services.length; i++) {
    	<div>
          <h4>{props.services[i].title} {props.services[i].price}</h4>
          <p>{props.services[i].desc}</p>
          {console.log("test")}
          </div>
  return (

    }
  )
}

export default ServiceList;