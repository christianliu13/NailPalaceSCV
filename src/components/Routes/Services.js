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
        isTable: true,
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
      },
      AdditionalServices: {
        isTable: true,
        category: "Additional Services",
        priceHeading1: null,
        priceHeading2: null,
        img: Pic,
        services: [{
            title: "Gel Color With Manicure",
            price1: null,
            price2: "$21"
          },
          {
            title: "Gel Color Without Manicure",
            price1: null,
            price2: "$23"
          },
          {
            title: "Gel Color French Manicure",
            price1: null,
            price2: "$23"
          },
          {
            title: "Gel Topcoat",
            price1: null,
            price2: "$23"
          },
          {
            title: "Gel Removal",
            price1: null,
            price2: "$23"
          }
        ]
      },
      GelColor: {
        isTable: true,
        category: "Gel Color",
        priceHeading1: null,
        priceHeading2: null,
        img: Pic,
        services: [{
            title: "Nail Repair",
            price1: null,
            price2: "$3"
          },
          {
            title: "French Polish",
            price1: null,
            price2: "$5"
          },
          {
            title: "French Polish Change",
            price1: null,
            price2: "$10"
          },
          {
            title: "Acrylic Nail Removal",
            price1: null,
            price2: "$7"
          },
          {
            title: "Callous Removal",
            price1: null,
            price2: "$7"
          },
          {
            title: "Nail Design",
            price1: null,
            price2: "$3 up"
          },
          {
            title: "Polish Change (hands)",
            price1: null,
            price2: "$5 up"
          },
          {
            title: "Polish Change (toes)",
            price1: null,
            price2: "$8 up"
          },
          {
            title: "Paraffin Wax (hands)",
            price1: null,
            price2: "$8"
          },
          {
            title: "Paraffin Wax (feet)",
            price1: null,
            price2: "$10"
          },
          {
            title: "(Prices for artificial nail services may vary)",
            price1: null,
            price2: null
          }
        ]
      },
      Waxing: {
        isTable: true,
        category: "Waxing",
        priceHeading1: null,
        priceHeading2: null,
        img: Pic,
        services: [{
            title: "Eye Brows",
            price1: null,
            price2: "$15"
          },
          {
            title: "Lip",
            price1: null,
            price2: "$10"
          },
          {
            title: "Chin",
            price1: null,
            price2: "$15"
          },
          {
            title: "Full Leg",
            price1: null,
            price2: "$55"
          },
          {
            title: "Half Leg",
            price1: null,
            price2: "$35"
          },
          {
            title: "Full Arm",
            price1: null,
            price2: "$40 up"
          },
          {
            title: "Half Arm",
            price1: null,
            price2: "$28 up"
          },
          {
            title: "Full Face",
            price1: null,
            price2: "$45"
          },
          {
            title: "Under Arm",
            price1: null,
            price2: "$15"
          },
          {
            title: "Bikini",
            price1: null,
            price2: "$30 up"
          },
          {
            title: "Back",
            price1: null,
            price2: "$35 up"
          }
        ]
      },
      skinCare: {
        isTable: false,
        category: "Skin Care",
        priceHeading1: null,
        priceHeading2: null,
        img: Pic,
        services: [{
            title: "Basic European Facial",
            price: "$50",
            desc: "Enjoy a cleansing and complementary skin analysis, followed by blackhead removal, light exfoliation, massage, mask & moisture."
          }
        ]
      },
      eyeWork: {
        isTable: true,
        category: "Eye Work",
        priceHeading1: null,
        priceHeading2: null,
        img: Pic,
        services: [{
            title: "Eyebrows Tinted",
            price1: null,
            price2: "$20"
          },
          {
            title: "Eyelashes Tinted",
            price1: null,
            price2: "$20"
          },
          {
            title: "Eyelashes Tinted Bottom",
            price1: null,
            price2: "$20"
          },
          {
            title: "Eyelashes Tinted Top & Bottom",
            price1: null,
            price2: "$30"
          }
        ]
      },
      permanentMakeup: {
        isTable: true,
        category: "Permanent Makeup",
        priceHeading1: null,
        priceHeading2: null,
        img: Pic,
        services: [{
            title: "Eyebrows",
            price1: null,
            price2: "$250"
          },
          {
            title: "Eyebrows Hairstroke",
            price1: null,
            price2: "$350"
          },
          {
            title: "Eyeliner Bottom",
            price1: null,
            price2: "$200"
          },
          {
            title: "Eyeliner Top",
            price1: null,
            price2: "$200"
          },
          {
            title: "Full Lip",
            price1: null,
            price2: "$350"
          },
          {
            title: "Lip Liner",
            price1: null,
            price2: "$200"
          }
        ]
      }
    }
  }



  render() {
    return (
      <section>
    		<ServiceSection service={this.state.naturalNailCare}/>
        <ServiceSection service={this.state.pedicure}/>
        <ServiceSection service={this.state.nailEnhancements}/>
        <ServiceSection service={this.state.GelColor}/>
        <ServiceSection service={this.state.AdditionalServices}/>
        <ServiceSection service={this.state.Waxing}/>
        <ServiceSection service={this.state.skinCare}/>
        <ServiceSection service={this.state.eyeWork}/>
        <ServiceSection service={this.state.permanentMakeup}/>
      </section>
    );
  }
}

export default Services;