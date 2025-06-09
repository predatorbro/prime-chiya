import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    // Observe all sections
    const sections = ["hero", "home", "featured", "menu", "explore", "contact"];
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  const isActive = (section) => activeSection === section;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Left Links */}
        <div className="hidden md:flex gap-6 text-lg font-medium">
          <a 
            href="#hero" 
            className={`${isActive("hero") ? "text-[var(--primary)]" : "text-black hover:text-[var(--primary)]"}`}
          >
            Home
          </a>
          <a 
            href="#home" 
            className={`${isActive("home") ? "text-[var(--primary)]" : "text-black hover:text-[var(--primary)]"}`}
          >
            About
          </a>
          <a 
            href="#featured" 
            className={`${isActive("featured") ? "text-[var(--primary)]" : "text-black hover:text-[var(--primary)]"}`}
          >
            Featured
          </a>
        </div>

        {/* Logo */}
        <a href="#hero" className="text-2xl font-bold font-serif italic text-[var(--primary)]">
          Prime Chiya
        </a>

        {/* Right Links */}
        <div className="hidden md:flex gap-6 text-lg font-medium">
          <a 
            href="#menu" 
            className={`${isActive("menu") ? "text-[var(--primary)]" : "text-black hover:text-[var(--primary)]"}`}
          >
            Menu
          </a>
          <a 
            href="#explore" 
            className={`${isActive("explore") ? "text-[var(--primary)]" : "text-black hover:text-[var(--primary)]"}`}
          >
            Insights
          </a>
          <a 
            href="#contact" 
            className={`${isActive("contact") ? "text-[var(--primary)]" : "text-black hover:text-[var(--primary)]"}`}
          >
            Contact Us
          </a>
        </div>

        {/* Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl">
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 pb-4 flex flex-col gap-3 text-lg font-medium">
          <a 
            href="#hero" 
            className="hover:text-[var(--primary)]"
            onClick={toggleMenu}
          >
            Home
          </a>
          <a 
            href="#home" 
            className="hover:text-[var(--primary)]"
            onClick={toggleMenu}
          >
            About
          </a>
          <a 
            href="#featured" 
            className="hover:text-[var(--primary)]"
            onClick={toggleMenu}
          >
            Featured
          </a>
          <a 
            href="#menu" 
            className="hover:text-[var(--primary)]"
            onClick={toggleMenu}
          >
            Menu
          </a>
          <a 
            href="#explore" 
            className="hover:text-[var(--primary)]"
            onClick={toggleMenu}
          >
            Insights
          </a>
          <a 
            href="#contact" 
            className="hover:text-[var(--primary)]"
            onClick={toggleMenu}
          >
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
}
