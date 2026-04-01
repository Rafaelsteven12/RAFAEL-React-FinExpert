import { Calculator } from "lucide-react";
import { useEffect, useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = ["Services", "About", "Pricing", "Contact"];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md"
          : "bg-transparent" // BLUE initial
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* LOGO */}
        <a
          href="#"
          className={`flex items-center gap-2 ${
            scrolled ? "text-slate-900" : "text-white"
          }`}
        >
          <div
            className={`flex h-8 w-8 items-center justify-center rounded-md text-sm font-bold ${
              scrolled ? "bg-blue-600 text-white" : "bg-blue-600 text-white"
            }`}
          >
            <Calculator/>
          </div>
          <span className="text-lg font-semibold">FinExpert</span>
        </a>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={`text-sm font-medium transition ${
                scrolled
                  ? "text-slate-700 hover:text-blue-600"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {link}
            </a>
          ))}

          <a
            href="#contact"
            className={`rounded-lg px-5 py-2.5 text-sm font-semibold transition ${
              scrolled
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-white text-blue-600 hover:bg-slate-100"
            }`}
          >
            Get Started
          </a>
        </nav>

        {/* BURGER */}
        <button
          className={`relative z-50 flex h-10 w-10 items-center justify-center md:hidden ${
            scrolled ? "text-slate-900" : "text-white"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`absolute h-0.5 w-6 transition-all duration-300 ${
              scrolled ? "bg-slate-900" : "bg-white"
            } ${menuOpen ? "rotate-45" : "-translate-y-2"}`}
          ></span>

          <span
            className={`absolute h-0.5 w-6 transition-all duration-300 ${
              scrolled ? "bg-slate-900" : "bg-white"
            } ${menuOpen ? "opacity-0" : "opacity-100"}`}
          ></span>

          <span
            className={`absolute h-0.5 w-6 transition-all duration-300 ${
              scrolled ? "bg-slate-900" : "bg-white"
            } ${menuOpen ? "-rotate-45" : "translate-y-2"}`}
          ></span>
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          menuOpen ? "max-h-96 py-4" : "max-h-0"
        } ${scrolled ? "bg-white" : "bg-[#1d4ed8]"}`}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className={`border-b pb-3 text-sm font-medium ${
                scrolled
                  ? "border-slate-200 text-slate-700"
                  : "border-white/20 text-white"
              }`}
            >
              {link}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className={`mt-2 rounded-lg px-5 py-3 text-center text-sm font-semibold ${
              scrolled
                ? "bg-blue-600 text-white"
                : "bg-white text-blue-600"
            }`}
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;