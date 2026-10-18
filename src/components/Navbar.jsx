// src/components/Navbar.jsx
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/Bloombash Logo.png";

const navLinks = [
  { label: "Services", type: "scroll", target: "services" },
  { label: "About Us", type: "route", target: "/about" },
  { label: "Industries", type: "scroll", target: "industries" },
  { label: "Values", type: "scroll", target: "values" },
  { label: "Contact", type: "route", target: "/contact" },
];

const scrollToSection = id =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  // Track which scroll-section is in view (only matters on "/")
  useEffect(() => {
    if (location.pathname !== "/") {
      setActiveSection("");
      return;
    }

    const scrollTargets = navLinks
      .filter(link => link.type === "scroll")
      .map(link => link.target);

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const id = entry.target.id;
          if (entry.isIntersecting) {
            setActiveSection(id);
          } else {
            // clear only if this section was the active one
            setActiveSection(prev => (prev === id ? "" : prev));
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 },
    );

    scrollTargets.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  // Scroll to a section after navigating home from another page
  useEffect(() => {
    if (location.pathname === "/" && location.state?.scrollTo) {
      scrollToSection(location.state.scrollTo);
      window.history.replaceState({}, ""); // so a refresh doesn't re-scroll
    }
  }, [location]);

  const isLinkActive = link => {
    if (link.type === "route") return location.pathname === link.target;
    return location.pathname === "/" && activeSection === link.target;
  };

  const handleNavClick = link => {
    if (link.type === "scroll") {
      if (location.pathname === "/") {
        scrollToSection(link.target);
      } else {
        navigate("/", { state: { scrollTo: link.target } });
      }
    } else {
      navigate(link.target);
    }
    setMenuOpen(false);
  };

  const handleGetStarted = () => {
    navigate("/start-a-project");
    setMenuOpen(false);
  };

  return (
    <nav className='w-full bg-[#EAEAF880] relative z-50 top-0 p-2'>
      <div className='flex items-center justify-between mx-auto max-w-312 h-15 md:h-20 px-4 sm:px-6'>
        {/* Logo */}
        <img
          src={logo}
          alt='Bloombash Logo'
          width={183}
          height={40}
          onClick={() => navigate("/")}
          className={`h-8 sm:h-10 w-auto cursor-pointer ${
            mounted ? "anim-visible" : "anim-hidden"
          }`}
          style={{
            animation: mounted
              ? "fadeInLeft 0.7s cubic-bezier(0.22,1,0.36,1) both"
              : "none",
          }}
        />
        {/* Nav Links — desktop */}
        <ul className='hidden lg:flex items-center gap-8 xl:gap-8'>
          {navLinks.map((link, index) => (
            <li
              key={link.label}
              className={mounted ? "anim-visible" : "anim-hidden"}
              style={{
                animation: mounted
                  ? `fadeInDown 0.6s cubic-bezier(0.22,1,0.36,1) ${
                      0.1 + index * 0.08
                    }s both`
                  : "none",
              }}>
              <button
                onClick={() => handleNavClick(link)}
                className={`cursor-pointer font-semibold xl:text-base leading-none font-inter transition-colors ${
                  isLinkActive(link)
                    ? "text-purple-700"
                    : "text-[#020A23] hover:text-purple-700"
                }`}>
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA Button — desktop */}
        <button
          onClick={handleGetStarted}
          className={`hidden lg:block px-4 py-2.5 rounded-2xl text-white font-semibold text-base xl:text-lg cursor-pointer hover:opacity-90 transition-opacity ${
            mounted ? "anim-visible" : "anim-hidden"
          }`}
          style={{
            background: "linear-gradient(95.25deg, #472187 3%, #7C3AED 100%)",
            animation: mounted
              ? "fadeInRight 0.7s cubic-bezier(0.22,1,0.36,1) 0.2s both"
              : "none",
          }}>
          Get Started
        </button>

        {/* Hamburger — mobile/tablet */}
        <button
          className='lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.25 cursor-pointer z-50'
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label='Toggle menu'
          aria-expanded={menuOpen}>
          <span
            className={`block w-6 h-0.5 bg-[#020A23] rounded transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#020A23] rounded transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#020A23] rounded transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-black/40 transition-opacity duration-300 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile menu panel */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-70 sm:w-80 bg-white shadow-2xl z-40 flex flex-col pt-24 pb-8 px-6 transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}>
        <ul className='flex flex-col gap-2'>
          {navLinks.map(link => (
            <li key={link.label} className='border-b border-gray-100'>
              <button
                onClick={() => handleNavClick(link)}
                className={`w-full text-left cursor-pointer font-semibold text-base py-3 transition-colors ${
                  isLinkActive(link)
                    ? "text-purple-700"
                    : "text-[#020A23] hover:text-purple-700"
                }`}>
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={handleGetStarted}
          className='mt-8 w-5/10 px-2 py-2.5 rounded-2xl text-white font-semibold text-base cursor-pointer hover:opacity-90 transition-opacity'
          style={{
            background: "linear-gradient(95.25deg, #472187 3%, #7C3AED 100%)",
          }}>
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
