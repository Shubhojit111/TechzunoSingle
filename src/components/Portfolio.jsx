import React from "react";
import Assets from "../assets/Assets";
import GlowHeaderBtn from "./GlowHeaderBtn";

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      title: "Cyber Security",
      image: Assets.Portfolio1,
    },
    {
      id: 2,
      title: "Cyber Security",
      image: Assets.Portfolio2,
    },
    {
      id: 3,
      title: "Cyber Security",
      image: Assets.Portfolio3,
    },
  ];

  const duplicatedPortfolio = [...portfolioItems, ...portfolioItems];

  return (
    <section className=" h-fit sm:h-[55vh] relative mt-8 lg:mt-12 ">
      
      <div className="h-full relative">
        <div className="absolute top-0 left-0 w-full h-full ">
          <img
            src={Assets.PortfolioBg}
            alt="Testimonial Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="mx-auto relative z-10 h-full flex flex-col sm:flex-row gap- sm:gap-14">
          <div className="min-w-[30%] w-full text-center lg:w-[30%] h-full  items-center justify-end  ">
            <GlowHeaderBtn
              text={
                <>
                  Our Work
                  <br />
                  Portfolio
                </>
              }
              additionalClassName="lg:text-[50px]"
            />
          </div>

          <div className="w-full lg:w-[70%] h-full overflow-hidden relative">
            <div className="portfolio-track flex gap-3 lg:gap-5 h-full">
              {duplicatedPortfolio.map((items, id) => {
                return (
                  <div
                    key={id}
                    className=" glass-border glass-bg w-[150px] lg:w-[420px] my-6 lg:my-10 rounded-2xl sm:rounded-3xl flex items-center justify-center overflow-hidden p-3 lg:p-6 shrink-0"
                  >
                    <div className="rounded-xl sm:rounded-3xl overflow-hidden  relative">
                      <img
                        src={items.image}
                        alt={items.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
