import React from "react";
import { motion } from "framer-motion";

const Card = (reference) => {
  return (
    <motion.div
      drag
      dragConstraints={{ left: 0, right: 1200, top: 0, bottom: 500 }}
      whileDrag={{ scale: 1.05 }}
      dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
      className="relative"
    >
      <div
        drag
        className="card-main absolute h-[40vh] w-[20vw] rounded-[40px] m-5"
      >
        <div className="top relative h-[7vh] w-full border-b-2 bg-[#FFAA51] rounded-t-[40px]">
        <input placeholder="Your title goes here" type="text" className="bg-transparent p-3 px-6 w-full h-full max-h-[7vh] absolute outline-none font-bold placeholder-gray-500"/>
          <div className="style absolute right-5 bottom-[-56px] h-14 w-10 bg-[#392C2D]">
            <div className="absolute h-7 w-7 rotate-45 bg-[#FEF0A7] bottom-[-13px] right-[6px]"></div>
          </div>
        </div>
        <div className="card-bottom h-[33vh] w-full rounded-b-[40px] bg-[#FEF0A7] absolute -z-30">
          {/* for making lines. */}
          {/* <h1></h1>
          <h1></h1>
          <h1></h1>
          <h1></h1>
          <h1></h1>
          <h1></h1>
          <h1></h1>
          <h1></h1>
          <h1></h1>
          <h1></h1>
          <h1></h1> */}
        </div>
        <textarea placeholder="Your Notes Goes Here" className="bg-[#FEF0A7] p-2 px-3 w-full h-full max-h-[33vh] outline-none placeholder-gray-400"></textarea>
      </div>
    </motion.div>
  );
};

export default Card;
