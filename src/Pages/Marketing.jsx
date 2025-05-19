import React from 'react';
import Card from '../Components/Card';
import './Marketing.css'; // We'll create this CSS for layout
import { FaCubes    } from "react-icons/fa";
import {  GrAnnounce } from "react-icons/gr";
import {  HiOutlineBanknotes } from "react-icons/hi2";
import {  IoLocationOutline } from "react-icons/io5";


const cardData = [
  {
    title: 'SERVICE',
    description: 'We provide specialized HR services—including talent acquisition, interim HR leadership, and workforce planning—tailored for the Environment and IT sectors.',
    image: <FaCubes/>,
  },
  {
    title: 'PRICE',
    description: ' Our pricing model features flexible retainer, project-fee, and successfee structures, with tiered discounts for high-volume engagements.',
    image: <HiOutlineBanknotes />,
  },
  {
    title: 'PROMOTION',
    description: 'We drive visibility through LinkedIn thought-leadership posts, targeted ads, industry webinars on “Green HR” and “Tech Talent Trends,” and partnerships with bodies like CII and NASSCOM, complemented by client referral incentives.',
    image: <GrAnnounce  />,
  },
  {
    title: 'LOCATION',
    description: 'We drive visibility through LinkedIn thought-leadership posts, targeted ads, industry webinars on “Green HR” and “Tech Talent Trends,” and partnerships with bodies like CII and NASSCOM, complemented by client referral incentives.',
    image: <IoLocationOutline/>,
  },
]
function Marketing() {
  return (
    <>
      <div className="marketing-header">
        <h1>Marketing Plan.</h1>
        <p>
          At Saarthii HR Consultancy, we leverage targeted strategies to reach and serve clients in
          the Environment and IT sectors, connecting them with the right talent for sustainable
          growth and digital innovation.
        </p>
      </div>

      <div className="card-grid">
        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
          />
        ))}
      </div>
    </>
  );
}

export default Marketing;
