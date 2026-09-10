import { motion } from "framer-motion";
import { restaurant } from "../data/restaurant";
import logo from "../assets/logo.png";

export default function AboutSection() {
  return (
    <section className="relative py-16 sm:py-20 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <motion.img
          src={logo}
          alt=""
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="h-20 w-auto object-contain mx-auto mb-4 drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]"
          aria-hidden="true"
        />
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-display font-bold text-2xl sm:text-3xl text-cream"
        >
          عن أبو الحديد
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 text-cream-dim leading-relaxed text-base sm:text-lg"
        >
          {restaurant.about}
        </motion.p>
      </div>
    </section>
  );
}
