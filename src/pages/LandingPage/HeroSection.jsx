import React from "react";
import ReactPlayer from "react-player";
import MotionWrapper from "../components/MotionWrapper";

const HeroSection = () => {
  return (
    <section
      className="position-relative text-center text-white"
      style={{ height: "90vh", overflow: "hidden" }}
    >
      <ReactPlayer
        url="/assets/hero-bg.mp4"
        playing
        loop
        muted
        width="100%"
        height="100%"
        className="position-absolute top-0 start-0"
      />
      <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>
      <MotionWrapper>
        <h1 className="fw-bold display-4 mb-3">
          Solusi AI untuk Lingkungan yang Lebih Baik 🌿
        </h1>
        <p className="lead mb-4">
          Kami bantu perusahaan wujudkan kepatuhan lingkungan dengan mudah dan
          cepat.
        </p>
        <a href="#layanan" className="btn btn-toska px-4 py-2">
          Lihat Layanan
        </a>
      </MotionWrapper>
    </section>
  );
};

export default HeroSection;
