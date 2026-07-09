import React, { useEffect, useRef } from "react";
import GlowHeaderBtn from "./GlowHeaderBtn";
import BookYouCallBtn from "./BookYouCallBtn";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

  const badgeRef = useRef(null);
  const headerRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const ctaBtnRef = useRef(null);

  useEffect(() => {
    // Animate badge
    const badgeCtx = gsap.context(() => {
      gsap.fromTo(
        badgeRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: badgeRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    // Animate header
    const headerCtx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    // Animate cards staggered
    const cardsCtx = gsap.context(() => {
      if (cardsContainerRef.current) {
        gsap.fromTo(
          cardsContainerRef.current.children,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: cardsContainerRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    });

    // Animate CTA Button
    const ctaCtx = gsap.context(() => {
      gsap.fromTo(
        ctaBtnRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ctaBtnRef.current,
            start: "top 95%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => {
      badgeCtx.revert();
      headerCtx.revert();
      cardsCtx.revert();
      ctaCtx.revert();
    };
  }, []);

  return (
    <section id="advantages" className="pb-22 lg:px-62 relative overflow-hidden">
      <div className="w-full mx-auto text-center">
        {/* Pixel-perfect badge for "Our Unfair Advantage" */}
        <div ref={badgeRef} className="flex justify-center mb-8 opacity-0">
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

        <div ref={headerRef} className="opacity-0">
          <GlowHeaderBtn
            text={
              <>
                What We Provide <br className="block lg:hidden" />
                That <br className="hidden lg:block" />
                Others Don't
              </>
            }
          />
        </div>
        <div ref={cardsContainerRef} className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-8 lg:mt-20">
          {/* Adv 1 */}
          {advantages.map((adv) => {
            return (
              <div
                key={adv.id}
                className="flex flex-col items-center group px-16 lg:px-7 opacity-0"
              >
                <div
                  className="text-[160px] md:text-[250px] font-extrabold text-transparent bg-clip-text bg-linear-to-b from-white to-[#015E57] leading-none mb-1 group-hover:scale-110 transition-transform duration-500"
                  style={{ fontFamily: "Arial, sans-serif" }}
                >
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
        <div ref={ctaBtnRef} className="mx-auto pt-16 opacity-0">
          <BookYouCallBtn />
        </div>
      </div>
    </section>
  );
};

export default Advantages;
