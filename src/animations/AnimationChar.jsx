import React from "react";
import { motion } from "framer-motion";

const AnimationChar = ({ text }) => {
  const letters = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1.5) => ({
      opacity: 1,
      transition: { staggerChildren: .8, delayChildren: .5 * i, delay: 1.8},
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 8,
        stiffness: 50,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
      y: 10,
      transition: {
        type: "spring",
        damping: 8,
        stiffness: 50,
      },
    },
  };

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex", fontSize: "2rem", flexWrap: "wrap" }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span variants={child} key={index}>
          {letter}{"\u00A0"}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimationChar;