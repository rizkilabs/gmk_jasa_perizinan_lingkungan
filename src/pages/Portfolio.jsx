import React from "react";
import ReactPlayer from "react-player";
import portfolio1 from "../assets/portfolio/portfolio1.jpg";
import portfolio2 from "../assets/portfolio/portfolio2.jpg";
import portfolio3 from "../assets/portfolio/portfolio3.jpg";
import Navbar from "../components/Navbar";
import MotionWrapper from "../components/MotionWrapper";

const Portfolio = () => {
  return (
    <>
      <Navbar />
      <MotionWrapper>
        <section className="container" style={{ marginTop: "120px" }}>
          <h2>Portfolio</h2>

          {/* Video Section */}
          <div className="my-4">
            <ReactPlayer
              url="/videos/portfolio-video.mp4"
              width="100%"
              controls
            />
          </div>

          {/* Photo Grid */}
          <div className="row mt-4">
            {[portfolio1, portfolio2, portfolio3].map((img, idx) => (
              <div key={idx} className="col-md-4 mb-3">
                <img
                  src={img}
                  alt={"portfolio-" + idx}
                  className="img-fluid rounded shadow"
                />
              </div>
            ))}
          </div>
        </section>
      </MotionWrapper>
    </>
  );
};

export default Portfolio;
