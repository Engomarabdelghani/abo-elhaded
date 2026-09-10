import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import { restaurant } from "../data/restaurant";

const links = [
  { href: "#home", label: "الرئيسية" },
  { href: "#videos", label: "الفيديوهات" },
  { href: "#menu", label: "المنيو" },
  { href: "#contact", label: "تواصل معنا" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-ink/90 backdrop-blur-md shadow-lg shadow-black/40" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 h-16 sm:h-20">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNav("#home");
          }}
          className="flex items-center gap-2"
          aria-label={restaurant.name}
        >
          <span className="h-9 w-9 sm:h-11 sm:w-11 shrink-0 drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]">
            <img src={logo} alt={restaurant.name} className="h-full w-full object-contain" />
          </span>
          <span className="font-display font-bold text-cream text-sm sm:text-lg hidden xs:inline">
            {restaurant.name}
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8 font-display font-semibold text-cream">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(l.href);
                }}
                className="relative hover:text-ember transition-colors py-1 after:absolute after:bottom-0 after:right-0 after:h-[2px] after:w-0 after:bg-ember after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-cream p-2 -m-2"
          aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <ul className="md:hidden bg-ink/98 backdrop-blur-md border-t border-red/30 px-6 py-4 flex flex-col gap-4 font-display font-semibold text-cream text-lg">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(l.href);
                }}
                className="block py-2"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
