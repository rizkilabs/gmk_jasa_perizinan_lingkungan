import React from "react";
import MotionWrapper from "../components/MotionWrapper";
import Layout from "../components/Layout";

function About() {
  return (
    <Layout>
      <MotionWrapper>
        <div className="container py-5">
          <h1>About Page - Geo Mandiri Kreasi</h1>
          <p>Selamat datang di website jasa perizinan lingkungan.</p>
        </div>
      </MotionWrapper>
    </Layout>
  );
}

export default About;
