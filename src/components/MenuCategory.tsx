import { motion } from "framer-motion";
import type { MenuCategory as MenuCategoryType } from "../types/menu";
import MenuItemRow from "./MenuItem";

type Props = {
  category: MenuCategoryType;
  expanded?: boolean;
};

const icons: Record<string, string> = {
  mashwiyat: "🍢",
  sawani: "🍽️",
  tawagen: "🍲",
  wagabat: "🍛",
  mo2ablat: "🥗",
  shorba: "🍜",
  roz: "🍚",
  salatat: "🥬",
  sandawitshat: "🥙",
  gril: "🔥",
  "mhamar-moshamar": "🍗",
};

export default function MenuCategory({ category, expanded = false }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      id={`cat-${category.id}`}
      className={
        expanded
          ? "scroll-mt-32 rounded-2xl border border-cream/10 bg-char/50 p-6 sm:p-8"
          : "break-inside-avoid-column mb-5 scroll-mt-32 rounded-2xl border border-cream/10 bg-char/50 p-5 hover:border-ember/30 transition-colors"
      }
    >
      <div className="flex items-center gap-2 mb-1">
        <span className={expanded ? "text-2xl leading-none" : "text-xl leading-none"}>
          {icons[category.id] ?? "🍽️"}
        </span>
        <h3 className={`font-display font-extrabold text-cream ${expanded ? "text-2xl sm:text-3xl" : "text-lg sm:text-xl"}`}>
          {category.name}
        </h3>
      </div>
      {category.description && (
        <p className="text-cream-dim text-xs mb-2">{category.description}</p>
      )}
      <div className="h-px w-full bg-gradient-to-l from-ember via-gold/40 to-transparent my-2.5" />
      <ul>
        {category.items.map((item) => (
          <MenuItemRow key={item.id} item={item} />
        ))}
      </ul>
    </motion.div>
  );
}
