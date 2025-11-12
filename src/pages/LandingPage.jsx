import React from "react";
import MotionWrapper from "../components/MotionWrapper";
import Layout from "../components/Layout";

function LandingPage() {
  return (
    <Layout>
      <MotionWrapper>
        <div className="container py-5">
          <h1>Landing Page</h1>
          <p>Selamat datang di Geo Mandiri Kreasi.</p>
        </div>
      </MotionWrapper>
    </Layout>
  );
}

export default LandingPage;
