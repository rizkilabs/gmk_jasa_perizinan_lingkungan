import ContactForm from "../../components/contact/ContactForm";
import WhatsAppButton from "WhatsAppButton";

const ContactPage = () => {
  return (
    <div className="container py-5" style={{ marginTop: 100 }}>
      <h2 className="fw-bold mb-4">Kontak Kami</h2>
      <p className="text-muted">
        Hubungi kami untuk pertanyaan atau konsultasi.
      </p>

      <div className="row g-4 mt-2">
        <div className="col-12 col-lg-6">
          <ContactForm />
          <WhatsAppButton phone="6281234567890" />
        </div>

        <div className="col-12 col-lg-6">
          <div className="ratio ratio-16x9 rounded-4 overflow-hidden shadow-sm">
            <iframe
              src="https://maps.google.com/maps?q=jakarta&t=&z=13&ie=UTF8&iwloc=&output=embed"
              allowFullScreen=""
              loading="lazy"
              title="google-maps"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactPage;
