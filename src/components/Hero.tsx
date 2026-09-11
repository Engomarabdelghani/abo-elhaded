import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Play, UtensilsCrossed } from "lucide-react";
import logo from "../assets/logo.png";
import { restaurant } from "../data/restaurant";
import { videos } from "../data/videos";
import HeroBackdrop from "./HeroBackdrop";
import GrillIllustration from "./GrillIllustration";
import VideoModal from "./VideoModal";

export default function Hero() {
  const [playHero, setPlayHero] = useState(false);
  const scrollTo = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  const heroVideo = videos[0];

  return (
    <section
      id="home"
      className="relative overflow-hidden px-4 pt-28 pb-16 sm:pt-32 sm:pb-24"
    >
      <div className="absolute inset-0 -z-10 bg-ink" />
      <HeroBackdrop className="absolute inset-0 -z-10 w-full h-full" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-14 items-center">
        {/* Text column — renders on the right in RTL */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center md:text-start"
        >
          <div className="flex items-center justify-center md:justify-start mb-3">
            <img
              src={logo}
              alt={restaurant.name}
              className="h-24 sm:h-28 w-auto object-contain drop-shadow-[0_0_28px_rgba(201,57,30,0.5)]"
            />
          </div>

          <h1 className="font-display font-extrabold text-cream leading-[1.2] text-3xl sm:text-5xl">
            أهلاً وسهلاً في
            <br />
            <span className="brush-stroke mt-1 inline-block">
              <span>{restaurant.name}</span>
            </span>
          </h1>

          <p className="mt-5 font-display text-gold text-lg sm:text-xl font-bold">
            {restaurant.tagline} .. طعم ما بيتنسيش
          </p>

          <p className="mt-4 text-cream-dim leading-relaxed max-w-md mx-auto md:mx-0">
            {restaurant.description}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-3">
            <button
              onClick={() => scrollTo("#videos")}
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-ember text-cream font-display font-bold text-base sm:text-lg shadow-lg shadow-ember/30 hover:brightness-110 active:scale-95 transition flex items-center justify-center gap-2"
            >
              <Play size={20} fill="currentColor" />
              شاهد فيديوهاتنا
            </button>
            <button
              onClick={() => scrollTo("#menu")}
              className="w-full sm:w-auto px-7 py-3.5 rounded-full border-2 border-gold/60 text-gold font-display font-bold text-base sm:text-lg flex items-center justify-center gap-2 hover:bg-gold/10 active:scale-95 transition"
            >
              <UtensilsCrossed size={20} />
              استعرض المنيو
            </button>
          </div>
        </motion.div>

        {/* Framed video card — renders on the left in RTL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-[360px] sm:max-w-[400px]"
        >
          {/* rough painted frame behind the card */}
          <div className="absolute -inset-3 rounded-[2rem] bg-ember/90 -rotate-1 shadow-[0_18px_45px_rgba(199,67,39,0.35)]" />
          <div className="absolute -inset-3 rounded-[2rem] border-2 border-gold/50 rotate-1 pointer-events-none" />

          <button
            onClick={() => setPlayHero(true)}
            aria-label="تشغيل فيديو المطعم"
            className="group relative block w-full aspect-[9/16] rounded-[1.7rem] overflow-hidden border-[5px] border-ink shadow-[0_20px_55px_rgba(0,0,0,0.35)] focus:outline-none"
          >
            {heroVideo?.src ? (
              <video
                src={heroVideo.src}
                poster={heroVideo.poster}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="absolute inset-0 h-full w-full object-cover object-center bg-black"
              />
            ) : (
              <GrillIllustration className="absolute inset-0 w-full h-full" seed={2} tone="ember" />
            )}
            <div className="absolute inset-0 bg-black/25 group-hover:bg-black/15 transition-colors" />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="grid place-items-center h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-cream/90 text-red shadow-xl group-hover:scale-110 transition-transform">
                <Play size={30} fill="currentColor" className="ms-1" />
              </span>
            </span>
          </button>
        </motion.div>
      </div>

      <motion.button
        aria-label="انتقل للأسفل"
        onClick={() => scrollTo("#videos")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1, duration: 0.6 }, y: { repeat: Infinity, duration: 1.8, ease: "easeInOut" } }}
        className="hidden sm:flex absolute bottom-4 left-1/2 -translate-x-1/2 text-cream-dim"
      >
        <ChevronDown size={26} />
      </motion.button>

      <VideoModal video={playHero ? heroVideo : null} onClose={() => setPlayHero(false)} />
    </section>
  );
}
