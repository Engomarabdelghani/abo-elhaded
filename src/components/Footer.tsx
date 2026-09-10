import { Phone, MapPin } from "lucide-react";
import logo from "../assets/logo.png";
import { restaurant } from "../data/restaurant";
import { FacebookIcon, InstagramIcon, TikTokIcon } from "./SocialIcons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-cream/10 bg-char/40 px-4 py-12">
      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-center sm:text-start">
        <div className="col-span-2 sm:col-span-1 flex flex-col items-center sm:items-start gap-3">
          <img
            src={logo}
            alt={restaurant.name}
            className="h-20 w-auto object-contain drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
          />
          <div>
            <p className="font-display font-bold text-cream">{restaurant.name}</p>
            <p className="font-display text-gold text-sm mt-0.5">{restaurant.tagline}</p>
          </div>
        </div>

        <div>
          <h4 className="font-display font-bold text-cream mb-3">العنوان</h4>
          <p className="text-cream-dim text-sm leading-relaxed flex items-start justify-center sm:justify-start gap-1.5">
            <MapPin size={16} className="shrink-0 mt-0.5" />
            <span>{restaurant.address.full}</span>
          </p>
        </div>

        <div>
          <h4 className="font-display font-bold text-cream mb-3">للتواصل</h4>
          <ul className="space-y-1.5">
            {restaurant.phones.map((phone) => (
              <li key={phone}>
                <a
                  href={`tel:${phone}`}
                  className="text-cream-dim text-sm hover:text-ember transition-colors inline-flex items-center gap-1.5"
                  dir="ltr"
                >
                  <Phone size={14} />
                  {phone}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-cream mb-3">تابعونا</h4>
          <div className="flex items-center justify-center sm:justify-start gap-2.5">
            <a
              href={restaurant.social.facebook}
              aria-label="فيسبوك"
              className="h-9 w-9 grid place-items-center rounded-full border border-cream/15 text-cream-dim hover:text-ember hover:border-ember/40 transition-colors"
            >
              <FacebookIcon />
            </a>
            <a
              href={restaurant.social.instagram}
              aria-label="انستجرام"
              className="h-9 w-9 grid place-items-center rounded-full border border-cream/15 text-cream-dim hover:text-ember hover:border-ember/40 transition-colors"
            >
              <InstagramIcon />
            </a>
            <a
              href={restaurant.social.tiktok}
              aria-label="تيك توك"
              className="h-9 w-9 grid place-items-center rounded-full border border-cream/15 text-cream-dim hover:text-ember hover:border-ember/40 transition-colors"
            >
              <TikTokIcon />
            </a>
          </div>
        </div>
      </div>

      <p className="text-center text-cream-dim/60 text-xs mt-10">
        © {year} {restaurant.name} — جميع الحقوق محفوظة
      </p>
    </footer>
  );
}
