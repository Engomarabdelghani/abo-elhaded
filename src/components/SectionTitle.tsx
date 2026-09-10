import { motion } from "framer-motion";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "start";
};

export default function SectionTitle({ title, subtitle, align = "center" }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={align === "center" ? "text-center" : "text-start"}
    >
      <h2 className="font-display text-4xl sm:text-5xl font-bold text-cream leading-tight">
        <span className="brush-stroke">
          <span>{title}</span>
        </span>
      </h2>
      {subtitle && (
        <p className="mt-4 text-cream-dim text-base sm:text-lg max-w-xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
