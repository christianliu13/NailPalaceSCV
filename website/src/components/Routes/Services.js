import React from 'react';
import ServiceSection from '../../components/ServiceSection';
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
      },
      pedicure: {
        category: "Pedicure",
        img: Pic,
        services: [{
            title: "Basic Pedicure",
            price: "$18",
            desc: "Not much time? A fast, yet thorough pedicure. Toes are shaped and buffed. Followed by a massage and polish. (For best results, add callus remover for an additional $7)."
          },
          {
            title: "Basic Manicure and Pedicure Combo",
            price: "$28",
            desc: null
          },
          {
            title: "Deluxe Spa Pedicure",
            price: "$38",
            desc: "Let us pamper you! Have your feet wrapped in a cool masque followed by sea serum. Then sit back & enjoy your massage."
          },
          {
            title: "Basic Spa Pedicure",
            price: "$25",
            desc: "Toes are soaked, shaped, and buffed. Lotion is applied and toes polished."
          }
        ]
      },
       nailEnhancements: {
        category: "Nail Enhancements",
        priceHeading1: "Full Set",
        priceHeading2: "Fill",
        img: Pic,
        services: [{
            title: "Acrylic",
            price1: "$28",
            price2: "$21"
          },
          {
            title: "French",
            price1: "$33",
            price2: "$23"
          },
          {
            title: "Glitter French",
            price1: "$35",
            price2: "$23"
          },
          {
            title: "Pink & White",
            price1: "$35",
            price2: "$23"
          },
          {
            title: "Design Tips",
            price1: "$45",
            price2: "$23"
          },
          {
            title: "Color Acrylic",
            price1: "$45",
            price2: "$23"
          },
          {
            title: "Acrylic",
            price1: "$45",
            price2: "$23"
          },
          {
            title: "Back Fill \"Pink & White\"",
            price1: null,
            price2: "$28"
          },
          {
            title: "(Prices for artificial nail services may vary)",
            price1: null,
            price2: null
          },
        ]
      }


    }
  }



  render() {
    return (
      <section>
    		<ServiceSection service={this.state.naturalNailCare}/>
        <ServiceSection service={this.state.pedicure}/>
      </section>
    );
  }
}
console.log(this.state);
export default Services;