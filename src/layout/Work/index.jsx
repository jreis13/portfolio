import React, { useState } from "react";
// import { AiFillEye, AiFillGithub } from "react-icons/ai";

import { motion } from "framer-motion";

// import { AppWrap } from "../../wrapper";

import "./index.scss";

const Work = () => {
  const [activeFilter] = useState("All");
  const [animateCard] = useState({ y: 0, opacity: 1 });

  const categories = ["Web", "Mobile", "React", "All"];

  const handleWorkFilter = (item) => {};

  return (
    <>
      <h2 className="head-text">
        Here are the <span>projects</span> I've contributed to.
      </h2>

      <div className="app__work-filter">
        {categories.map((category, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(category)}
            className={`app__work-filter-item app__flex p-text ${
              activeFilter === category ? "item-active" : ""
            }`}
          >
            {category}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      ></motion.div>
    </>
  );
};

export default Work;
