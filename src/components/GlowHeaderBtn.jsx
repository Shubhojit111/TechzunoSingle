import React from 'react';

const GlowHeaderBtn = ({ text, additionalClassName = '' }) => {
  return (
    <button 
      className={`text-transparent leading-[1.2] tracking-tighter text-5xl bg-clip-text bg-linear-to-r from-gray-900 via-white to-gray-900 cursor-pointer font-semibold ${additionalClassName}`}
    >
      {text}
    </button>
  );
};

export default GlowHeaderBtn;
