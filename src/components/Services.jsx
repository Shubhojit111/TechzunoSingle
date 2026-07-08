import React from "react";
import GlowHeaderBtn from "./GlowHeaderBtn";
import Assets from "../assets/Assets";

const Services = () => {
  const servicesList = [
    {
      title: "Web Development",
      desc: "Create responsive, modern websites using React, Next.js, and other cutting-edge technologies.",
      img: Assets.Service1,
    },
    {
      title: "App Development",
      desc: "Create responsive, modern websites using React, Next.js, and other cutting-edge technologies.",
      img: Assets.Service2,
    },
    {
      title: "E-Commerce Development",
      desc: "Create responsive, modern websites using React, Next.js, and other cutting-edge technologies.",
      img: Assets.Service3,
    },
    {
      title: "Python Development",
      desc: "Create responsive, modern websites using React, Next.js, and other cutting-edge technologies.",
      img: Assets.Service4,
    },
    {
      title: "CMS Development",
      desc: "Create responsive, modern websites using React, Next.js, and other cutting-edge technologies.",
      img: Assets.Service5,
    },
    {
      title: "WordPress Development",
      desc: "Create responsive, modern websites using React, Next.js, and other cutting-edge technologies.",
      img: Assets.Service6,
    },
  ];

  return (
    <section className="pb-24 relative">
      <div className="mx-auto w-full text-center px-62">
        <GlowHeaderBtn text="Our Services" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-15">
          {servicesList.map((service, idx) => (
            <div
              key={idx}
              className="relative group overflow-hidden rounded-2xl lg:h-[392px] flex items-end "
            >
              <div className="h-full w-full absolute top-0 left-0 z-10">
                <img
                src={service.img}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 "
              />
              </div>

              <div className="z-20 max-h-1/2 h-1/2 w-full backdrop-blur-[5px]  flex flex-col py-4 px-8 text-center rounded-2xl">
                <h3 className="text-[19px] font-bold text-white mb-1.5">
                  {service.title}
                </h3>
                <p className="text-slate-300 text-[13px] mb-4.5 px-6">{service.desc}</p>
                <div>
                  <button className="px-5 py-2 rounded-full bg-white text-black text-xs tracking-wider cursor-pointer  hover:bg-[#00B5B5] hover:text-white transition-colors font-medium">
                    Book Your Call
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
