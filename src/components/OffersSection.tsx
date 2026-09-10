import { motion } from "framer-motion";
import { Flame } from "lucide-react";
import type { MenuCategory } from "../types/menu";
import SectionTitle from "./SectionTitle";

type Props = {
  categories: MenuCategory[];
};

function fmt(n: number) {
  return n.toLocaleString("ar-EG");
}

export default function OffersSection({ categories }: Props) {
  // يجمع أي صنف عليه isOffer:true من أي فئة تلقائيًا — مفيش داعي
  // لتكرار البيانات أو تعديل أي حاجة تانية غير الصنف نفسه في menu.ts
  const offers = categories.flatMap((cat) =>
    cat.items.filter((item) => item.isOffer).map((item) => ({ item, categoryName: cat.name }))
  );

  if (offers.length === 0) return null;

  return (
    <section id="offers" className="relative py-16 sm:py-20 px-4">
      <SectionTitle title="عروضنا" subtitle="لفترة محدودة" />

      <div className="mt-10 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {offers.map(({ item, categoryName }, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: i * 0.06 }}
            className="relative rounded-2xl border-2 border-ember/50 bg-gradient-to-b from-ember/10 to-char/50 p-5 overflow-hidden"
          >
            <span className="absolute top-0 end-0 bg-ember text-cream text-xs font-display font-bold px-3 py-1 rounded-bl-xl flex items-center gap-1">
              <Flame size={12} fill="currentColor" />
              عرض
            </span>

            <p className="text-cream-dim text-xs mb-1">{categoryName}</p>
            <h3 className="font-display font-extrabold text-xl text-cream mb-1">{item.name}</h3>
            {item.description && (
              <p className="text-cream-dim text-sm mb-3 leading-relaxed">{item.description}</p>
            )}

            <div className="flex items-baseline gap-2 mt-2">
              {typeof item.offerPrice === "number" ? (
                <>
                  <span className="font-display font-extrabold text-gold text-2xl">
                    {fmt(item.offerPrice)} ج
                  </span>
                  {typeof item.price === "number" && (
                    <span className="text-cream-dim/60 text-sm line-through">{fmt(item.price)} ج</span>
                  )}
                </>
              ) : (
                typeof item.price === "number" && (
                  <span className="font-display font-extrabold text-gold text-2xl">
                    {fmt(item.price)} ج
                  </span>
                )
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
