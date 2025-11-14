import TimelineItem from "../../components/about/TimelineItem";
import TeamCard from "../../components/about/TeamCard";
import ClientLogoCarousel from "../../components/about/ClientLogoCarousel";

const AboutPage = () => {
  const timeline = [
    {
      year: "2018",
      title: "Berdiri",
      desc: "Awal berdirinya Geo Mandiri Kreasi.",
    },
    {
      year: "2020",
      title: "Ekspansi",
      desc: "Mulai melayani lebih banyak daerah.",
    },
    {
      year: "2023",
      title: "Digitalisasi",
      desc: "Integrasi sistem layanan berbasis AI.",
    },
  ];

  const teams = [
    {
      name: "Agus Saputra",
      role: "Founder",
      img: "https://i.pravatar.cc/150?img=3",
    },
    {
      name: "Nadia Putri",
      role: "Environmental Specialist",
      img: "https://i.pravatar.cc/150?img=5",
    },
    {
      name: "Dion Firmansyah",
      role: "Compliance Analyst",
      img: "https://i.pravatar.cc/150?img=8",
    },
  ];

  const logos = [
    "https://cdn.worldvectorlogo.com/logos/tokopedia-2.svg",
    "https://cdn.worldvectorlogo.com/logos/gojek.svg",
    "https://cdn.worldvectorlogo.com/logos/bank-bca.svg",
  ];

  return (
    <div className="container py-5" style={{ marginTop: 80 }}>
      <h2 className="fw-bold mb-4">Tentang Kami</h2>
      <p className="text-muted">Perjalanan dan visi Geo Mandiri Kreasi.</p>

      <div className="mt-4">
        {timeline.map((t, i) => (
          <TimelineItem key={i} {...t} />
        ))}
      </div>

      <h4 className="fw-bold mt-5 mb-3">Tim Kami</h4>
      <div className="row g-3">
        {teams.map((t, i) => (
          <div className="col-12 col-md-4" key={i}>
            <TeamCard {...t} />
          </div>
        ))}
      </div>

      <h4 className="fw-bold mt-5 mb-3">Klien Kami</h4>
      <ClientLogoCarousel logos={logos} />
    </div>
  );
};
export default AboutPage;
