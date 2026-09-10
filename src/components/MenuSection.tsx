import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import type { MenuCategory as MenuCategoryType } from "../types/menu";
import MenuCategoryBlock from "./MenuCategory";
import SectionTitle from "./SectionTitle";
import DecorativeBackground from "./DecorativeBackground";

type Props = {
  categories: MenuCategoryType[];
};

const ALL = "all";

export default function MenuSection({ categories }: Props) {
  const [active, setActive] = useState<string>(ALL);
  const [query, setQuery] = useState("");

  const searched = useMemo(() => {
    if (!query.trim()) return null;
    const q = query.trim();
    return categories
      .map((cat) => ({
        ...cat,
        items: cat.items.filter((item) => item.name.includes(q) || cat.name.includes(q)),
      }))
      .filter((cat) => cat.items.length > 0);
  }, [categories, query]);

  const visibleCategories = useMemo(() => {
    if (searched) return searched;
    if (active === ALL) return categories;
    return categories.filter((cat) => cat.id === active);
  }, [categories, active, searched]);

  const isSingle = !searched && active !== ALL;

  return (
    <section id="menu" className="relative py-20 sm:py-28 px-4">
      <DecorativeBackground variant="leaf" className="absolute -z-10 bottom-10 left-0 w-48 opacity-30 hidden sm:block" />
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="المنيو" subtitle="أطباقنا المميزة" />

        {/* search */}
        <div className="mt-8 relative max-w-sm mx-auto">
          <Search size={18} className="absolute top-1/2 -translate-y-1/2 end-4 text-cream-dim" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="دور على طبق..."
            aria-label="بحث في المنيو"
            className="w-full bg-char/60 border border-cream/15 rounded-full py-2.5 pe-11 ps-4 text-cream placeholder:text-cream-dim/70 focus:outline-none focus:border-ember/60 transition-colors"
          />
        </div>

        {/* category nav */}
        {!query && (
          <div className="mt-6 -mx-4 px-4 sm:mx-0 sm:px-0 overflow-x-auto no-scrollbar">
            <div className="flex sm:flex-wrap sm:justify-center gap-2 w-max sm:w-auto mx-auto">
              <button
                onClick={() => setActive(ALL)}
                className={`shrink-0 px-4 py-2 rounded-full font-display font-semibold text-sm sm:text-base transition-all ${
                  active === ALL
                    ? "bg-ember text-cream shadow-md shadow-ember/30"
                    : "bg-char/50 text-cream-dim border border-cream/10 hover:border-ember/40"
                }`}
              >
                الكل
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActive(cat.id)}
                  className={`shrink-0 px-4 py-2 rounded-full font-display font-semibold text-sm sm:text-base transition-all ${
                    active === cat.id
                      ? "bg-ember text-cream shadow-md shadow-ember/30"
                      : "bg-char/50 text-cream-dim border border-cream/10 hover:border-ember/40"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        )}

        {isSingle ? (
          <div className="mt-10 max-w-2xl mx-auto">
            {visibleCategories.map((cat) => (
              <MenuCategoryBlock key={cat.id} category={cat} expanded />
            ))}
          </div>
        ) : (
          <div className="mt-10 columns-1 sm:columns-2 lg:columns-3 gap-5">
            {visibleCategories.length === 0 ? (
              <p className="text-center text-cream-dim">لا يوجد أطباق مطابقة للبحث</p>
            ) : (
              visibleCategories.map((cat) => <MenuCategoryBlock key={cat.id} category={cat} />)
            )}
          </div>
        )}
      </div>
    </section>
  );
}
