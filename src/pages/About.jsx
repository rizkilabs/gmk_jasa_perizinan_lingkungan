import React from "react";
import Layout from "../components/Layout";
import MotionWrapper from "../components/MotionWrapper";
import { Briefcase, Target, Users } from "lucide-react";
import { motion } from "framer-motion";
import AboutPhoto from "../assets/about-photo.jpg";
import ChatbotWidget from "./LandingPage/ChatbotWidget";

// === TeamCard ===
import TeamCard from "../components/about/TeamCard";

// === Import foto tim ===
import p1 from "../assets/team/person1.png";
import p2 from "../assets/team/person2.png";
import p3 from "../assets/team/person3.png";
import p4 from "../assets/team/person4.png";
import p5 from "../assets/team/person5.png";
import p6 from "../assets/team/person6.png";
import p7 from "../assets/team/person7.png";

// Timeline reusable item
function TimelineItem({ icon: Icon, title, desc }) {
  return (
    <motion.div
      className="d-flex gap-3 mb-4 p-3 rounded-4 shadow-sm timeline-item"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      style={{
        background: "rgba(255, 255, 255, 0.85)",
        border: "1px solid rgba(0,0,0,0.05)",
      }}
    >
      <div
        className="rounded-circle d-flex align-items-center justify-content-center icon-wrapper"
        style={{
          width: 55,
          height: 55,
          background: "var(--gray)",
          boxShadow: "0 0 12px rgba(0, 191, 166, 0.2)",
        }}
      >
        <Icon size={28} className="service-icon" />
      </div>

      <div>
        <h5 className="fw-semibold mb-1">{title}</h5>
        <p className="mb-0 text-muted">{desc}</p>
      </div>
    </motion.div>
  );
}

function ClientLogoCarousel() {
  const logos = [
    "/assets/clients/client1.png",
    "/assets/clients/client2.png",
    "/assets/clients/client3.png",
    "/assets/clients/client4.png",
  ];

  return (
    <div className="overflow-hidden mt-5 about-client-carousel">
      <motion.div
        className="d-flex gap-5 align-items-center"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 15, ease: "linear", repeat: Infinity }}
      >
        {[...logos, ...logos].map((logo, i) => (
          <img
            key={i}
            src={logo}
            alt="client"
            className="client-logo"
            style={{
              width: 140,
              filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.15))",
              transition: "transform 0.9s",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.1)")
            }
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        ))}
      </motion.div>
    </div>
  );
}

function About() {
  // 3 Row sesuai permintaan
  const row1 = [
    { photo: p1, name: "Retna Candra N.", role: "AI Engineer" },
    { photo: p2, name: "Aura Putri L.", role: "AI Engineer" },
    { photo: p3, name: "Intanalina Nabilah L.", role: "AI Engineer" },
    { photo: p4, name: "Prida Adis R.", role: "AI Engineer" },
  ];

  const row2 = [
    { photo: p5, name: "Mochamad Rizki", role: "Software Architect" },
    { photo: p6, name: "John Timotius S.", role: "Software Engineer" },
  ];

  const row3 = [{ photo: p7, name: "Rafi Ahnaf F.", role: "AI Engineer" }];

  return (
    <Layout>
      <MotionWrapper>
        <div className="container py-4" style={{ marginTop: "70px" }}>
          {/* Header */}
          <div className="text-center mb-5">
            <h1 className="fw-bold service-title-section">
              Tentang PT. Geo Mandiri Kreasi
            </h1>
            <p className="mt-2 service-desc-section">
              Penyedia jasa perizinan lingkungan terpercaya untuk bisnis di
              seluruh Indonesia.
            </p>

            {/* About Photo Section */}
            <div className="text-center my-4">
              <img
                src={AboutPhoto}
                alt="Tentang Kami"
                style={{
                  width: "100%",
                  maxWidth: "550px",
                  borderRadius: "20px",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
                }}
              />
            </div>
          </div>

          {/* Timeline Section */}
          <section className="mb-5">
            <h3 className="fw-semibold mb-4 service-title-section">
              Perjalanan Kami
            </h3>

            <TimelineItem
              icon={Briefcase}
              title="Didirikan"
              desc="PT. Geo Mandiri Kreasi berdiri untuk membantu perusahaan memenuhi standar perizinan lingkungan."
            />

            <TimelineItem
              icon={Target}
              title="Visi Kami"
              desc="Memberikan layanan yang cepat, akurat, dan sesuai regulasi terbaru."
            />

            <TimelineItem
              icon={Users}
              title="Tim Profesional"
              desc="Didukung tenaga ahli lingkungan dengan pengalaman lebih dari 5 tahun."
            />
          </section>

          {/* TEAM SECTION */}
          <section className="mt-5 mb-5 text-center">
            <h3 className="fw-semibold service-title-section">Tim Kami</h3>

            {/* ROW 1 – 4 orang */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "40px",
                marginTop: "35px",
                flexWrap: "wrap",
              }}
            >
              {row1.map((m, i) => (
                <TeamCard key={i} photo={m.photo} name={m.name} role={m.role} />
              ))}
            </div>

            {/* ROW 2 – 2 orang */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "50px",
                marginTop: "45px",
                flexWrap: "wrap",
              }}
            >
              {row2.map((m, i) => (
                <TeamCard key={i} photo={m.photo} name={m.name} role={m.role} />
              ))}
            </div>

            {/* ROW 3 – 1 orang */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "50px",
              }}
            >
              <TeamCard
                photo={row3[0].photo}
                name={row3[0].name}
                role={row3[0].role}
              />
            </div>
          </section>

          {/* Client Section */}
          <section className="mt-5 text-center">
            <h3 className="fw-semibold service-title-section-client">
              Telah Dipercaya Oleh
            </h3>
            <ClientLogoCarousel />
          </section>
        </div>
      </MotionWrapper>
    </Layout>
  );
}

export default About;
