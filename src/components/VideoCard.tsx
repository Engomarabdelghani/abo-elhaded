import { motion } from "framer-motion";
import { Play } from "lucide-react";
import type { RestaurantVideo } from "../data/videos";
import GrillIllustration from "./GrillIllustration";

type Props = {
  video: RestaurantVideo;
  onPlay: () => void;
  seed?: number;
};

export default function VideoCard({ video, onPlay, seed = 0 }: Props) {
  return (
    <motion.button
      onClick={onPlay}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="group relative w-full text-start overflow-hidden rounded-2xl border border-cream/10 bg-char aspect-[9/16] focus:outline-none focus-visible:ring-2 focus-visible:ring-ember"
      aria-label={`تشغيل فيديو: ${video.title}`}
    >
      {video.src ? (
        <video
          src={video.src}
          poster={video.poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-contain bg-black"
        />
      ) : (
        <GrillIllustration className="absolute inset-0 w-full h-full" seed={seed} tone={seed % 2 === 0 ? "ember" : "gold"} />
      )}
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />

      {video.duration && (
        <span className="absolute top-2.5 left-2.5 bg-black/60 text-cream text-[11px] font-semibold px-2 py-0.5 rounded-md">
          {video.duration}
        </span>
      )}

      <div className="absolute inset-0 flex items-center justify-center">
        <span className="grid place-items-center h-12 w-12 rounded-full bg-cream/90 text-red shadow-lg group-hover:scale-110 transition-transform">
          <Play size={20} fill="currentColor" className="ms-0.5" />
        </span>
      </div>

      <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/75 to-transparent">
        <h3 className="font-display font-bold text-cream text-sm sm:text-base">{video.title}</h3>
      </div>
    </motion.button>
  );
}
