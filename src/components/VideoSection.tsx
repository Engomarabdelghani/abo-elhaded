import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { videos, type RestaurantVideo } from "../data/videos";
import VideoCard from "./VideoCard";
import VideoModal from "./VideoModal";
import SectionTitle from "./SectionTitle";
import DecorativeBackground from "./DecorativeBackground";

export default function VideoSection() {
  const [active, setActive] = useState<RestaurantVideo | null>(null);
  const [index, setIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const goTo = (i: number) => {
    const clamped = Math.max(0, Math.min(videos.length - 1, i));
    setIndex(clamped);
    const track = trackRef.current;
    const card = track?.children[clamped] as HTMLElement | undefined;
    card?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  };

  return (
    <section id="videos" className="relative py-20 sm:py-28 px-4">
      <DecorativeBackground variant="skewer" className="absolute -z-10 top-8 right-0 w-40 opacity-40 hidden sm:block" />
      <div className="max-w-5xl mx-auto">
        <SectionTitle title="فيديوهاتنا" subtitle="شوف بنفسك أجواء المكان وطريقة التحضير" />

        <div className="relative mt-12">
          <button
            onClick={() => goTo(index + 1)}
            aria-label="الفيديو التالي"
            className="hidden sm:grid place-items-center absolute -start-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-char/80 border border-cream/15 text-cream hover:border-ember/50 hover:text-ember transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => goTo(index - 1)}
            aria-label="الفيديو السابق"
            className="hidden sm:grid place-items-center absolute -end-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-char/80 border border-cream/15 text-cream hover:border-ember/50 hover:text-ember transition-colors"
          >
            <ChevronRight size={20} />
          </button>

          <div
            ref={trackRef}
            className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory -mx-4 px-4"
          >
            {videos.map((v, i) => (
              <motion.div
                key={v.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                animate={{ y: [0, -5, 0] }}
                transition={{
                  opacity: { duration: 0.35, delay: i * 0.06 },
                  y: { duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: i * 0.18 },
                }}
                className="shrink-0 w-[72%] sm:w-[45%] lg:w-[30%] snap-center"
              >
                <VideoCard video={v} onPlay={() => setActive(v)} seed={i} />
              </motion.div>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-center gap-2">
            {videos.map((v, i) => (
              <button
                key={v.id}
                aria-label={`الانتقال لفيديو ${i + 1}`}
                onClick={() => goTo(i)}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-6 bg-ember" : "w-2 bg-cream/25"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <VideoModal video={active} onClose={() => setActive(null)} />
    </section>
  );
}
