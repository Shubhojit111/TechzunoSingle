import React from "react";
import GlowHeaderBtn from "./GlowHeaderBtn";
import BookYouCallBtn from "./BookYouCallBtn";

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
            className="px-20 lg:px-12 py-2.5 lg:py-1.5"
            style={{
              background:
                "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.45) 50%, rgba(255,255,255,0) 100%)",
            }}
          >
            <span className="text-white text-[18px] lg:text-[16px] font-light tracking-wide">
              Our Unfair Advantage
            </span>
          </div>
        </div>

        <GlowHeaderBtn
          text={
            <>
              What We Provide <br className="block lg:hidden" />
              That <br className="hidden lg:block" />
              Others Don't
            </>
          }
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-8 lg:mt-20 ">
          {/* Adv 1 */}
          {advantages.map((adv, idx) => {
            return (
              <div
                key={adv.id}
              className="flex flex-col items-center group px-16 lg:px-5"
              >
                <div className="text-[160px] md:text-[250px] font-extrabold text-transparent bg-clip-text bg-linear-to-b from-white to-[#015E57] leading-none mb-1 group-hover:scale-110 transition-transform duration-500"
                style={{ fontFamily: 'Arial, sans-serif' }}>
                  {adv.id}
                </div>
                <h3 className="text-[22px] lg:text-[20px] font-bold text-white mb-2">
                  {adv.title}
                </h3>
                <p className="text-white/80 text-[18px] lg:text-[14px] leading-normal mx-auto line-clamp-4 lg:line-clamp-none ">
                  {adv.desc}
                </p>
              </div>
            );
          })}
        </div>
        <div className="mx-auto pt-16">
          <BookYouCallBtn />
        </div>
      </div>
    </section>
  );
};

export default Advantages;
