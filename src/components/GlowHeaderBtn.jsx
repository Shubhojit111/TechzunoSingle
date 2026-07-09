import React from 'react';

const GlowHeaderBtn = ({ text, additionalClassName = '' }) => {
  return (
    <button 
      className={`text-transparent leading-[1.3] tracking-[-0.05em] text-[32px] lg:text-5xl bg-clip-text bg-linear-to-r from-white/5  via-white to-95% to-white/70 cursor-pointer font-semibold ${additionalClassName}`}
    >
      {text}
    </button>
  );
};

export default GlowHeaderBtn;
