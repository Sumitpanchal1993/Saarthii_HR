import React from "react";
import Pic2 from "../assets/About.jpeg";

function About() {
  return (


    <div className="home-container">
          <div className="home-lhs">
            <div className="home-lhs-content">
              <h1>About</h1>
              <p>
            Saarthii HR Consultancy, headquartered in Indore, is a dynamic and
          result-driven human resource consulting firm dedicated to empowering
          organizations with strategic HR solutions. With a strong commitment to
          excellence and client satisfaction, Saarthii specializes in providing
          end-to-end recruitment, talent acquisition, and workforce management
          services across diverse industries. Backed by a team of experienced
          professionals and an extensive network, we act as a trusted partner in
          helping businesses identify, attract, and retain top talent. Our
          approach is rooted in understanding each client’s unique requirements
          and delivering customized HR strategies that align with their
          organizational goals. At Saarthii HR Consultancy, we believe in being
          the guiding force—a true “saarthii”—in our clients’ journey toward
          building high-performing teams and sustainable growth
              </p>
            </div>
          </div>
          <div className="home-rhs">
        <img src={Pic2} alt="Saarthii visual" />
          </div>
        </div>
   
  );
}

export default About;
