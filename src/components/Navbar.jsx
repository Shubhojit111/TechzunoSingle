import React from "react";
import { useEffect, useState } from "react";
import Assets from "../assets/Assets";

const Navbar = () => {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Products",
      link: "/products",
    },
    {
      name: "Pricing",
      link: "/pricing",
    },
    {
      name: "Blog",
      link: "/blog",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav className={`fixed top-0 left-0 w-full z-50 lg:px-62 backdrop-blur-[5px] transition-all duration-100
    ${isScrolled ? "pt-4 pb-2" : "pt-10"}
    `}>
      <div className=" flex items-center justify-between ">
        <div className="logo h-18 w-auto">
          <img
            className="h-full w-full"
            src={Assets.TechzunoLogo}
            alt="Techzuno Logo"
          />
        </div>

        {/* Nav Links — glass pill */}
        <div className="glass-border glass-bg hidden md:flex items-center gap-8 px-12 py-3.5 rounded-xl">
          {navItems.map((nav, idx) => {
            return (
              <a
                key={idx}
                href={nav.link}
                className="text-[14px] font-normal text-white/80 hover:text-white transition-colors tracking-wide"
              >
                {nav.name}
              </a>
            );
          })}
        </div>

        {/* CTA Button — glass pill */}
        <button className="glass-border glass-bg px-5 py-2.5 rounded-[48px] text-white text-[13px] font-medium tracking-wide">
          Book a Consultation
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
