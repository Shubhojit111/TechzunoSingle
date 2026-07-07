import React from "react";
import Assets from "../assets/Assets";
import GlowHeaderBtn from "./GlowHeaderBtn";
import { User2 } from "lucide-react";
import { Icon } from "@iconify/react";

const Hero = () => {
  const features = [
    {
      title: "Custom Development",
      description:
        "Tailored solutions built around your business goals and audience.",
      icon: "material-symbols-light:dashboard-customize-outline-rounded",
    },
    {
      title: "Fast Load Times",
      description:
        "Optimized performance for better user experience and SEO rankings.",
      icon: "tabler:reload",
    },
    {
      title: "Modern Technology",
      description:
        "Latest frameworks and libraries for secure, future-proof products.",
      icon: "streamline-plump:deepfake-technology-1",
    },
  ];

  return (
    <section
      id="home"
      className="relative h-full w-full flex flex-col items-center justify-start overflow-hidden"
    >
      <div className="hero-bg absolute top-0 z-0">
        <img src={Assets.HeroBg} alt="hero-bg" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full w-full mx-auto lg:px-62  text-center pt-48">
        <h1 className="text-4xl md:text-5xl lg:text-[54px] text-white mb-5 leading-[1.4] tracking-[0.08rem] ">
          BUILD HIGH-PERFORMANCE WEB & APP
          <br /> SOLUTIONS WITH{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">
            REACT &amp; NEXT.JS.
          </span>
        </h1>
        <p className="text-white tracking-wide text-lg md:text-[16px] mx-auto mb-12 font-light">
          Seamless, scalable &amp; responsive digital solutions tailored to your
          unique needs <br /> using modern tech stacks.
        </p>
        <button className="glass-border glass-bg px-7 py-4 rounded-[48px] ">
            <span className="text-[14px] md:text-[20px] f text-white tracking-[0.04rem]">
              Schedule Your Free Consultation
            </span>
        </button>
      </div>

      <div className="hero bottom mt-30 z-0  relative">
        <img src={Assets.HeroFooter} alt="hero-mockup" />
        {/* <div className="absolute bottom-0 left-0 w-full border h-[30%] bg-linear-to-right from-transparent via-black/5 via-black/60 to-black/95"></div> */}
      </div>

      <section id="features" className="-mt-11 pb-22 relative lg:px-62 ">
        <div className="mx-auto w-full text-center">
          <GlowHeaderBtn text={"Why Techzuno?"} additionalClassName="mb-14" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {features.map((feature, idx) => (
              <div key={idx} className=" relative h-full w-full hover:-translate-y-2 transition-transform duration-300 ">
                <div className="absolute rounded-xl top-0 left-0 -z-10 h-full w-full ">
                  <img
                    src={Assets.CardBgGlass}
                    alt="h-full w-full object-cover"
                  />
                </div>
                <div className="h-full w-full flex flex-col items-center text-center z-10 py-8 px-8 ">
                  <div className="mb-3">
                    <Icon icon={feature.icon} color="white" className="w-14 h-14" />
                  </div>
                  <h3 className="text-[18px] lg:text-[24px] tracking-[0.06rem] text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-white font-extralight text-[13px] tracking-[0.05rem] leading-[1.4]">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Hero;
