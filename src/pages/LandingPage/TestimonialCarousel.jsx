import React from "react";
import Carousel from "react-bootstrap/Carousel";

const testimonials = [
  {
    name: "Andi",
    text: "Layanan cepat dan profesional. Sangat membantu bisnis kami!",
  },
  {
    name: "Siti",
    text: "Tim Geo Mandiri Kreasi sangat responsif dan informatif!",
  },
  { name: "Budi", text: "Proses izin lingkungan jadi jauh lebih mudah!" },
];

const TestimonialCarousel = () => (
  <section className="container py-5">
    <h2 className="text-center fw-bold mb-4">Kata Klien Kami</h2>
    <Carousel>
      {testimonials.map((t, i) => (
        <Carousel.Item key={i}>
          <div className="text-center">
            <p className="lead fst-italic mb-2">“{t.text}”</p>
            <h6 className="fw-bold">- {t.name}</h6>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  </section>
);

export default TestimonialCarousel;
