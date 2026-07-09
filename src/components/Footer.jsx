import { Icon } from "@iconify/react";
import Assets from "../assets/Assets";

export default function Footer() {
  return (
    <footer className="bg-black relative overflow-hidden text-white pb-16 border-t pt-6 lg:pt-10">
      {/* Background Watermark Text */}
      <div className="absolute inset-0 flex justify-center items-center md:items-end pointer-events-none select-none z-0 opacity-10">
        <h1
          className="font-black text-[40vw] md:text-[18vw] leading-[0.85] md:leading-none tracking-tighter flex flex-col md:flex-row items-center justify-center"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          {"TECHZUNO".split("").map((char, index) => (
            <span key={index} className="py-2 lg:py-0 lg:px-2">
              {char}
            </span>
          ))}
        </h1>
      </div>

      {/* Footer Content */}
      <div className="relative z-10 px-5 lg:px-62 mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <img src={Assets.TechzunoLogo} alt="Techzuno" />
          </div>
          <p className="text-white/80 text-lg mb-2">
            <span className="flex gap-1">
              <Icon icon="lsicon:location-outline" classname="text-[#B8FAFF]" />
              12/1A SD Christopher Road
              <br /> Bidhannagar South Kolkata -<br /> 700010
            </span>
          </p>
          <p className="text-white/80 text-lg mb-2 flex items-center gap-1">
            <Icon
              icon="material-symbols-light:call-outline-sharp"
              classname="text-[#B8FAFF]"
            />
            P. +91 6290345020
          </p>
          <p className="text-white/80 text-lg flex items-center gap-1">
            <Icon
              icon="material-symbols-light:mail-outline-sharp"
              classname="text-[#B8FAFF]"
            />
            E. info@techzuno.com
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-[26px] lg:text-[16px] mb-4">
            Company
          </h4>
          <ul className="space-y-2 text-[16px] lg:text-sm text-white/80">
            <li>
              <a href="/about" className="hover:text-cyan-400 underline">
                About
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-cyan-400 underline">
                Services
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:text-cyan-400 underline">
                Blog
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-[26px] lg:text-[16px] mb-4">
            Services
          </h4>
          <ul className="space-y-3 text-[16px] lg:text-sm text-white/80">
            <li>
              <a
                href="/services/mobile-apps"
                className="hover:text-cyan-400 underline"
              >
                ios/Android app
              </a>
            </li>
            <li>
              <a href="/services/web" className="hover:text-cyan-400 underline">
                Web Development
              </a>
            </li>
            <li>
              <a href="/services/app" className="hover:text-cyan-400 underline">
                App Development
              </a>
            </li>
            <li>
              <a
                href="/services/design"
                className="hover:text-cyan-400 underline"
              >
                UI/UX Design
              </a>
            </li>
            <li>
              <a
                href="/services/ecom"
                className="hover:text-cyan-400 underline"
              >
                E-Commerce
              </a>
            </li>
            <li>
              <a href="/services/seo" className="hover:text-cyan-400 underline">
                SEO & Performence Optimization
              </a>
            </li>
            <li>
              <a
                href="/services/business"
                className="hover:text-cyan-400 underline"
              >
                Business Solutions
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-[26px] lg:text-[16px] mb-4">
            Support
          </h4>
          <ul className="space-y-2 text-[16px] lg:text-sm text-white/80">
            <li>
              <a href="/services/web" className="hover:text-cyan-400 underline">
                Help and FAQ
              </a>
            </li>
            <li>
              <a href="/services/app" className="hover:text-cyan-400 underline">
                Contact us
              </a>
            </li>
            <li>
              <a
                href="/services/design"
                className="hover:text-cyan-400 underline"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/services/seo" className="hover:text-cyan-400 underline">
                Terms and Conditions
              </a>
            </li>
            <li>
              <a href="/services/seo" className="hover:text-cyan-400 underline">
                Refund Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
