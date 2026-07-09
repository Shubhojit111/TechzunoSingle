import React from "react";
import { useEffect, useState } from "react";
import Assets from "../assets/Assets";
import { HamburgerIcon } from "lucide-react";
import { Icon } from "@iconify/react";

const Navbar = () => {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Services",
      link: "/services",
    },
    {
      name: "Advantages",
      link: "/advantages",
    },
    {
      name: "Portfolio",
      link: "/portfolio",
    },
    {
      name: "FAQ",
      link: "/faq",
    },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const handleNavClick = (e, link) => {
    e.preventDefault();
    setIsMenuOpen(false);

    let targetId = "";
    if (link === "/") targetId = "home";
    else if (link === "/services") targetId = "services";
    else if (link === "/advantages") targetId = "advantages";
    else if (link === "/portfolio") targetId = "portfolio";
    else if (link === "/faq") targetId = "faq";

    if (targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        const offset = 95;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 px-4 lg:px-62 backdrop-blur-[5px] transition-all duration-100
      ${isScrolled ? "pt-4 pb-2" : "pt-6 lg:pt-8"}
      `}
      >
        <div className=" flex items-center justify-between ">
          <div className="logo h-11 lg:h-18 w-auto">
            <img
              className="h-full w-full"
              src={Assets.TechzunoLogo}
              alt="Techzuno Logo"
            />
          </div>

          {/* Nav Links — glass pill */}
          <div className="glass-border glass-bg hidden md:flex items-center gap-8 px-10 py-3.5 rounded-xl">
            {navItems.map((nav, idx) => {
              return (
                <a
                  key={idx}
                  href={nav.link}
                  onClick={(e) => handleNavClick(e, nav.link)}
                  className="text-[13px] font-normal text-white/80 hover:text-white transition-colors tracking-wide"
                >
                  {nav.name}
                </a>
              );
            })}
          </div>

          {/* CTA Button — glass pill */}
          <button className="glass-border glass-bg hidden md:flex px-5 py-2.5 rounded-[48px] text-white text-[13px] font-medium tracking-wide cursor-pointer">
            Book a Consultation
          </button>

          {/* Hamburger trigger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="border p-1 border-white/20 bg-white/10 rounded-full md:hidden cursor-pointer hover:bg-white/20 transition-all z-50 relative"
            aria-label="Toggle menu"
          >
            <Icon
              icon={isMenuOpen ? "material-symbols-light:close" : "material-symbols-light:menu"}
              className="h-5 w-5 text-white"
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-gradient-to-b from-[#000A0B]/98 via-[#041517]/98 to-black/99 backdrop-blur-2xl md:hidden transition-all duration-300 flex flex-col justify-between px-6 pt-28 pb-10 ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-5"
        }`}
      >
        <div className="flex flex-col gap-4">
          {navItems.map((nav, idx) => (
            <a
              key={idx}
              href={nav.link}
              onClick={(e) => handleNavClick(e, nav.link)}
              className={`text-2xl font-light tracking-wide text-white/80 hover:text-white py-3 border-b border-white/5 flex items-center justify-between group transition-all duration-300 ${
                isMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
              }`}
              style={{
                transitionDelay: `${idx * 75}ms`,
              }}
            >
              <span>{nav.name}</span>
              <Icon
                icon="material-symbols-light:arrow-forward-ios-rounded"
                className="h-4 w-4 text-white/40 group-hover:text-white/80 group-hover:translate-x-1 transition-all"
              />
            </a>
          ))}
        </div>

        <div
          className={`flex flex-col gap-4 mt-auto transition-all duration-500 delay-300 ${
            isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <button className="glass-border glass-bg w-full py-4 rounded-[48px] text-white text-[16px] font-medium tracking-wide cursor-pointer text-center">
            Book a Consultation
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
