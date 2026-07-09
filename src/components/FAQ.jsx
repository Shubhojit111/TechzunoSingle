import React, { useState } from "react";
import GlowHeaderBtn from "./GlowHeaderBtn";
import { ArrowUp } from "lucide-react";
import { Icon } from "@iconify/react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "What happens on the call?",
      answer:
        "We discuss your project goals, technical requirements, and how our team can help you achieve success.",
    },
    {
      question: "What information should I prepare?",
      answer:
        "Having a brief overview of your business goals, target audience, and any existing technical infrastructure is helpful.",
    },
    {
      question: "What are Techzuno's development solutions?",
      answer:
        "We specialize in React, Next.js, React Native, Python, and scalable cloud architectures.",
    },
    {
      question: "What topics are covered in the meeting agenda?",
      answer:
        "We cover project scope, timeline expectations, budget estimates, and technical feasibility.",
    },
    {
      question: "How do participants share progress on their assignments?",
      answer:
        "We use modern agile tools like Jira/Linear and provide weekly sprint updates and demos.",
    },
    {
      question: "What challenges are typically discussed during the meeting?",
      answer:
        "We address potential technical bottlenecks, scalability concerns, and integration requirements.",
    },
    {
      question: "How are follow-up tasks delegated at the end of the call?",
      answer:
        "You'll receive a detailed proposal and action plan outlining the next steps and responsibilities.",
    },
  ];

  return (
    <section id="faq" className="py-12 w-full relative px-5 lg:px-62">
      <div className="w-full text-center ">
        <GlowHeaderBtn text={<>FAQ</>} />

        <div className="space-y-3 mt-6">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="glass-bg glass-border rounded-[20px] overflow-hidden "
            >
              <button
                className="w-full px-4 lg:px-8 py-3 lg:py-5 flex justify-between cursor-pointer items-center focus:outline-none transition-colors"
                onClick={() => setActiveIndex(activeIndex === idx ? -1 : idx)}
              >
                <span className="text-left font-normal text-[18px] lg:text-[22px] text-white/90 tracking-wide">
                  {faq.question}
                </span>
                <Icon
                  icon="weui:arrow-outlined"
                  className={` h-6 lg:h-10 w-auto text-white/70 transform transition-transform duration-300 ${activeIndex === idx ? "rotate-270" : "rotate-90"}`}
                />
              </button>
              <div
                className={`px-4 lg:px-8 max-w-[85%] overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === idx ? "max-h-40 py-2 pb-6 opacity-100" : "max-h-0 opacity-0"}`}
              >
                <p className=" text-left text-white/50 text-[14px] lg:text-[18px] tracking-wide">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
