import React from "react";
import Pic from "../assets/Home.jpg";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="home-lhs">
        <div className="home-lhs-content">
          <h1>SAARTHII</h1>
          <div className="scrollable-text">
            <h2>MISSION</h2>
            <p>
              To deliver specialized, future-ready HR solutions with a strong
              focus on the Environment and Information Technology (IT) sectors.
              We are committed to connecting high-potential talent with
              organizations that are shaping a sustainable and digital future.
              Through tailored recruitment and strategic workforce support, we
              aim to contribute to both environmental progress and technological
              innovation.
            </p>
            <h2>VISION</h2>
            <p>
              To be a leading HR consultancy recognized for our integrity,
              excellence, and commitment to transforming human capital into
              strategic advantage—driving businesses forward and shaping
              meaningful careers across India and beyond.
            </p>
          </div>
        </div>
      </div>

      <div className="home-rhs">
        <img src={Pic} alt="Saarthii visual" />
      </div>
    </div>
  );
}

export default Home;
