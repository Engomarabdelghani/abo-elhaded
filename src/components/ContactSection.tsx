import { motion } from "framer-motion";
import { Phone, MapPin, MessageCircle } from "lucide-react";
import { restaurant } from "../data/restaurant";
import SectionTitle from "./SectionTitle";

function toWhatsAppLink(phone: string) {
  const digits = phone.replace(/^0/, "20");
  return `https://wa.me/${digits}`;
}

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-16 sm:py-20 px-4">
      <div className="max-w-xl mx-auto text-center">
        <SectionTitle title="تواصل معنا" subtitle="احنا في خدمتك في أي وقت" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href={`tel:${restaurant.phones[0]}`}
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-ember/15 border border-ember/30 text-cream font-display font-bold flex items-center justify-center gap-2 hover:bg-ember/25 transition-colors"
          >
            <Phone size={18} />
            اتصل بينا
          </a>
          <a
            href={toWhatsAppLink(restaurant.phones[0])}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-green-600/90 text-white font-display font-bold flex items-center justify-center gap-2 hover:bg-green-600 transition-colors"
          >
            <MessageCircle size={18} />
            واتساب
          </a>
          <a
            href={restaurant.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 rounded-full border-2 border-gold/60 text-gold font-display font-bold flex items-center justify-center gap-2 hover:bg-gold/10 transition-colors"
          >
            <MapPin size={18} />
            الموقع على الخريطة
          </a>
        </motion.div>
      </div>
    </section>
  );
}
