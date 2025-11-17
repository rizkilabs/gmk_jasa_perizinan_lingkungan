import React from "react";
import Layout from "../components/Layout";
import MotionWrapper from "../components/MotionWrapper";
import {
  HeroSection,
  ServicePreview,
  CTASection,
  TestimonialCarousel,
  ChatbotWidget,
} from "./LandingPage/index.jsx";

function LandingPage() {
  return (
    <>
      {" "}
      <Layout>
        <MotionWrapper>
          <HeroSection />
          <ServicePreview />
          <CTASection />
          <TestimonialCarousel />
        </MotionWrapper>
      </Layout>
      
    </>
  );
}

export default LandingPage;
