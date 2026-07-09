import React from "react";
import GlowHeaderBtn from "./GlowHeaderBtn";
import Assets from "../assets/Assets";
import BookYouCallBtn from "./BookYouCallBtn";

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
    <section className="pb-16 relative">
      <div className="mx-auto w-full text-center px-5 lg:px-62">
        <GlowHeaderBtn text="Our Services" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-10">
          {servicesList.map((service, idx) => (
            <div
              key={idx}
              className="relative group overflow-hidden rounded-2xl h-[380px] border lg:h-[392px] flex items-end"
            >
              <div className="h-full w-full absolute top-0 left-0 z-10">
                <img
                src={service.img}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 "
              />
              </div>

              <div className="z-20 h-[55%] lg:h-[50%] w-full backdrop-blur-[3px]  flex flex-col pt-2 pb-3 lg:pt-4 px-8 text-center ">
                <h3 className="text-[22px] lg:text-[19px] font-bold text-white mb-2.5">
                  {service.title}
                </h3>
                <p className="text-slate-300 text-[18px] lg:text-[13px] mb-4.5 px-6 line-clamp-3">{service.desc}</p>
                <div>
                  <BookYouCallBtn />
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
