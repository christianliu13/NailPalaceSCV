import React from 'react';
import ServiceList from '../../components/ServiceList';
import ServiceCat from '../../components/ServiceCat';
import ServiceImg from '../../components/ServiceImg';
import Pic from '../../components/Images/cat.jpeg';


class Services extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      naturalNailCare: {
        category: "Natural Nail Care",
        img: Pic,
        services: [{
            title: "Basic Manicure",
            price: "$12",
            desc: "Great when you're in a hurry. Nails are soaked, shaped, & buffed. Lotion is applied and nails are polished."
          },
          {
            title: "Sea Salt Manicure",
            price: "$12",
            desc: "Hands and arms are exfoliated with a sea salt scrub followed by an aromatherapy massage."
          },
          {
            title: "Hot Oil Manicure",
            price: "$12",
            desc: "Best manicure for dry hands and nails. Nails are immersed in warm oil and lotion, then wrapped in electric mitts. Our basic manicure follows."
          }
        ]
      }
    }
  }



  render() {
    return (
      <section>
    		<div className ="row">
  				<div className ="col-md-8">
  					<ServiceCat cat={this.state.naturalNailCare.category}/>
						<ServiceList services={this.state.naturalNailCare.services}/>
					</div>
					<div className ="col-md-4">
						<ServiceImg pic={this.state.naturalNailCare.img}/>
					</div>
 				</div>
      </section>
    );
  }
}
console.log(this.state);
export default Services;