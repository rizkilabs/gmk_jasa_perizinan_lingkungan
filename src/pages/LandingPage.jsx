import React from "react";
import MotionWrapper from "../components/MotionWrapper";
import Layout from "../components/Layout";
import {
  HeroSection,
  ServicePreview,
  CTASection,
  TestimonialCarousel,
  ChatbotWidget,
} from "./LandingPage";

function LandingPage() {
  return (
    <Layout>
      <MotionWrapper>
        <HeroSection />
        <ServicePreview />
        <CTASection />
        <TestimonialCarousel />
        <ChatbotWidget />
      </MotionWrapper>
    </Layout>
  );
}

export default LandingPage;
