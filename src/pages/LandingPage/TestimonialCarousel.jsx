import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Fade from "react-bootstrap/Fade";
import "bootstrap-icons/font/bootstrap-icons.css";
// import "../../styles/TestimonialCarousel.css";

const testimonials = [
  {
    name: "Andi Pratama",
    position: "CEO, PT Maju Bersama",
    text: "Layanan cepat dan profesional. Sangat membantu bisnis kami!",
    rating: 5,
    image: "https://i.pravatar.cc/100?img=1",
  },
  {
    name: "Siti Rahmawati",
    position: "Manajer Proyek, Geo Mandiri Kreasi",
    text: "Tim Geo Mandiri Kreasi sangat responsif dan informatif!",
    rating: 4,
    image: "https://i.pravatar.cc/100?img=2",
  },
  {
    name: "Budi Santoso",
    position: "Pengusaha",
    text: "Proses izin lingkungan jadi jauh lebih mudah!",
    rating: 5,
    image: "https://i.pravatar.cc/100?img=3",
  },
];

const TestimonialCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => setIndex(selectedIndex);

  return (
    <section className="container testi-section py-4 position-relative">
      <h2 className="text-center fw-bold mb-4">Kata Klien Kami</h2>

      <Carousel
        fade
        interval={1500}
        activeIndex={index}
        onSelect={handleSelect}
        indicators={true}
        nextIcon={<span className="carousel-control-next-icon custom-arrow" />}
        prevIcon={<span className="carousel-control-prev-icon custom-arrow" />}
      >
        {testimonials.map((t, i) => (
          <Carousel.Item key={i}>
            <Fade in={index === i} timeout={9000}>
              <div className="d-flex justify-content-center">
                <div
                  className="card testimonial-card shadow-lg border-0 rounded-4 p-5 text-center"
                  style={{
                    maxWidth: "750px",
                    minHeight: "400px",
                  }}
                >
                  <img
                    src={t.image}
                    alt={t.name}
                    className="rounded-circle mx-auto mb-3"
                    width="100"
                    height="100"
                  />
                  <div className="mb-2">
                    {[...Array(t.rating)].map((_, idx) => (
                      <i
                        key={idx}
                        className="bi bi-star-fill text-warning me-1"
                      ></i>
                    ))}
                  </div>
                  <p className="fst-italic mb-2 fs-5">“{t.text}”</p>
                  <h6 className="fw-bold mb-0">{t.name}</h6>
                  <small className="text-muted">{t.position}</small>
                </div>
              </div>
            </Fade>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};

export default TestimonialCarousel;
