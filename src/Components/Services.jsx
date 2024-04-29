// MedicalServices.js
import React from "react";
import "../Style/Services.css";

const MedicalServices = () => {
  const medicalServices = [
    {
      id: 1,
      title: "Primary Care",
      description:
        "Comprehensive healthcare for individuals and families. primary care is the-to-day healthcare given by a health care provider.Typically this provideer acts as the first contact and prinicapal point of continuing care for patinent within a healthcarre system,and co-ordinate other specified care that the patient may need  ",
      image: "/bodytext-BI-1.avif",
    },
    {
      id: 2,
      title: "Specialized Clinics",
      description:
        "Specialized services for various medical conditions. as a docter myself i have a perfect place for not just me and my family but also for my patients to come get treatment for so many day hair n skin problems for all age group ",
      image:
        "/nurse-care-elderly-senior-woman-home-retirement-people-recovery-wheelchair_43300-4364.avif",
    },
    {
      id: 3,
      title: "Emergency Care",
      description:
        "24/7 emergency medical services fisrt aid is emergency care given to an ill or injured person before medical helip ariives  its goals are to prevent death and prevent injures from beccoming worse.",
      image: "/SUB04018-scaled.webp",
    },
  ];

  return (
    <div className="services-container">
      {/* <h2>Our Medical Services</h2> */}
      <ul className="services-list">
        {medicalServices.map((service) => (
          <li key={service.id} className="service-item">
            <div className="service-image">
              <img src={service.image} alt={service.title} />
            </div>
            <div className="service-details">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MedicalServices;
