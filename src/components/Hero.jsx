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
    <>
      <section
        id="home"
        className="relative h-full w-full flex flex-col items-center justify-start overflow-hidden "
      >
        <div className="hero-bg absolute bottom-0 lg:top-0 z-0">
          <img src={Assets.HeroBg} alt="hero-bg" />
        </div>
        
        <div className="hero-bg h-full w-full absolute md:hidden z-0">
          <img src={Assets.HeroBgMobile} alt="hero-bg" className="w-full h-full object-cover"/>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full w-full mx-auto px-4 lg:px-62  text-center pt-28 lg:pt-48">
          <h1 className="text-[37px] md:text-5xl lg:text-[54px] text-white mb-5 leading-[1.4] tracking-[0.08rem] ">
            BUILD HIGH-PERFORMANCE WEB & APP
            <br /> SOLUTIONS WITH REACT &amp; NEXT.JS.
          </h1>
          <p className="text-white tracking-wide text-lg md:text-[16px] mx-auto mb-8 lg:mb-12 font-light">
            Techzuno Solutions transforms your complex ideas into fast, scalable
            digital <br className="hidden md:block" /> realities{" "}
            <span className="hidden md:inline-block">
              using React, Next.js, Python, Shopify, and WordPress.
            </span>
          </p>
          <button className="glass-border glass-bg px-7 py-4 cursor-pointer rounded-[48px] ">
            <span className="text-[16px] md:text-[20px] f text-white tracking-[0.04rem]">
              Schedule Your Free Consultation
            </span>
          </button>
        </div>

        <div className="hero mt-10 -mb-8 sm:mb-0 lg:mt-32  z-0  relative">
          <img src={Assets.G505} alt="hero-mockup" />
          {/* <div className="absolute bottom-0 left-0 w-full border h-[30%] bg-linear-to-right from-transparent via-black/5 via-black/60 to-black/95"></div> */}
        </div>
      </section>

      <section
        id="features"
        className="mt-20 lg:-mt-24 pb-22 relative px-5 lg:px-62 "
      >
        <div className="mx-auto w-full text-center">
          <GlowHeaderBtn
            text={"Why Techzuno?"}
            additionalClassName="mb-8 lg:mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className=" relative bg-linear-to-b from-[#223232] to-[#000A0B] glass-border rounded-[16px] h-full w-full hover:-translate-y-2 transition-transform duration-300 "
              >
                {/* <div className="absolute rounded-xl top-0 left-0 -z-10 h-full w-full ">
                  <img
                    src={Assets.CardBgGlass}
                    alt="h-full w-full object-cover"
                  />
                </div> */}
                <div className="h-full w-full flex flex-col items-center text-center z-10 py-10 lg:py-8 px-8 ">
                  <div className="mb-7 lg:mb-3">
                    <Icon
                      icon={feature.icon}
                      color="white"
                      className="w-14 h-14"
                    />
                  </div>
                  <h3 className="text-[20px] lg:text-[24px] tracking-[0.06rem] text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-white font-extralight text-[18px] lg:text-[13px] tracking-[0.05rem] leading-[1.4]">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
