import React from "react";

const BookYouCallBtn = ({ text = "Book Your Call" }) => {
  return (
    <button className="px-6.5 py-2.5 rounded-full bg-white text-black text-[14px] lg:text-xs tracking-wider cursor-pointer  hover:bg-[#00B5B5] hover:text-white transition-colors font-medium">
      {text}
    </button>
  );
};

export default BookYouCallBtn;
