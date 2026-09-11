import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";
import type { RestaurantVideo } from "../data/videos";

type Props = {
  video: RestaurantVideo | null;
  onClose: () => void;
};

export default function VideoModal({ video, onClose }: Props) {
  useEffect(() => {
    if (!video) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [video, onClose]);

  return (
    <AnimatePresence>
      {video && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
          role="dialog"
          aria-modal="true"
          aria-label={video.title}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.94, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.94, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              aria-label="إغلاق الفيديو"
              className="absolute -top-12 left-0 sm:-left-2 text-cream p-2 hover:text-ember transition-colors"
            >
              <X size={28} />
            </button>

            <div className="aspect-[9/16] max-h-[calc(100vh-2rem)] sm:aspect-video sm:max-h-none w-full rounded-xl overflow-hidden bg-char border border-red/30">
              {video.src ? (
                <video src={video.src} controls autoPlay playsInline className="w-full h-full object-contain bg-black" />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center text-center px-6 gap-2"
                  style={{ background: "linear-gradient(135deg, var(--color-burgundy), var(--color-red))" }}
                >
                  <p className="font-display font-bold text-cream text-lg">{video.title}</p>
                  <p className="text-cream-dim text-sm">سيتم إضافة الفيديو قريبًا</p>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
