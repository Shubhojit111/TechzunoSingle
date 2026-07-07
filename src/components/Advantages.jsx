import React from "react";
import GlowHeaderBtn from "./GlowHeaderBtn";

const Advantages = () => {
  const advantages = [
    {
      id: 1,
      title: "Optimised Code",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset ",
    },
    {
      id: 2,
      title: "Custom UI/UX",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset ",
    },
    {
      id: 3,
      title: "Native Integrations",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset ",
    },
  ];

  return (
    <section className="pb-22 lg:px-62 relative overflow-hidden">
      <div className="w-full mx-auto text-center">
        {/* Pixel-perfect badge for "Our Unfair Advantage" */}
        <div className="flex justify-center mb-8">
          <div
            className="px-12 py-1.5"
            style={{
              background:
                "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.45) 50%, rgba(255,255,255,0) 100%)",
            }}
          >
            <span className="text-white text-[16px] font-normal tracking-wide">
              Our Unfair Advantage
            </span>
          </div>
        </div>

        <GlowHeaderBtn
          text={
            <>
              What We Provide That
              <br />
              Others Don't
            </>
          }
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20 ">
          {/* Adv 1 */}
          {advantages.map((adv, idx) => {
            return (
              <div
                key={adv.id}
                className="flex flex-col items-center group px-8"
              >
                <div className="text-8xl md:text-[250px] font-black text-transparent bg-clip-text bg-linear-to-b from-white to-[#015E57] leading-none mb-1 group-hover:scale-110 transition-transform duration-500">
                  {adv.id}
                </div>
                <h3 className="text-xl font-bold text-white mb-1">
                  {adv.title}
                </h3>
                <p className="text-white/80 text-[14px] leading-normal mx-auto">
                  {adv.desc}
                </p>
              </div>
            );
          })}
        </div>
        <div className="mx-auto pt-16">
          <button className="px-5 py-2 rounded-full font-semibold bg-white text-black text-xs tracking-wider hover:bg-cyan-400 hover:text-white transition-colors">
            Book Your Call
          </button>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
