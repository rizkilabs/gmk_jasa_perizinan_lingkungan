import { MessageCircle } from "lucide-react";

const WhatsAppButton = ({ phone }) => {
  return (
    <a
      href={`https://wa.me/${phone}`}
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn-success w-100 d-flex align-items-center justify-content-center gap-2 mt-3"
    >
      <MessageCircle size={18} /> WhatsApp Admin
    </a>
  );
};
export default WhatsAppButton;
