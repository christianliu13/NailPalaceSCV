import React from 'react';


export default class Service extends React.Component {
	constructor(props){
		super(props);
			this.props= {
				NaturalNailCare: {
					category:"Natural Nail Care",
					img: "",
					services: [
					{
						title: "Basic Manicure $12",
						price: "$12",
						desc: "Great when you're in a hurry. Nails are soaked, shaped, & buffed. Lotion is applied and nails are polished."
					},
					{
						title: "Sea Salt Manicure $17",
						price: "$12",
						desc: "Hands and arms are exfoliated with a sea salt scrub followed by an aromatherapy massage."
					},
					{
						title: "Hot Oil Manicure $18",
						price: "$12",
						desc: "Best manicure for dry hands and nails. Nails are immersed in warm oil and lotion, then wrapped in electric mitts. Our basic manicure follows."
					}
					]


				}

			}
	};

  render() {
    return (
      <section>
      </section>
    );
  }
}