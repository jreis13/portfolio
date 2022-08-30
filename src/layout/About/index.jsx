import React from "react";
import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";

import { images } from "../../constants";

import "./index.scss";

const facts = [
  {
    title: "Work",
    description: "I am looking for a role as a junior frontend developer",
    imgUrl: images.work,
  },
  {
    title: "Location",
    description: "I am currently based in Dublin, Ireland",
    imgUrl: images.location,
  },
  {
    title: "Experience",
    description: "I recently finished an apprenticeship at Subvisual",
    imgUrl: images.subvisual,
  },
  {
    title: "Interests",
    description: "Besides coding, I enjoy photography and music",
    imgUrl: images.polaroid,
  },
];

const About = () => {
  return (
    <>
      <h2 className="head-text">
        More details <span>about me</span>
      </h2>
      <div className="app__profiles">
        {facts.map((fact, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={fact.title + index}
          >
            <img src={fact.imgUrl} alt={fact.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {fact.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {fact.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(About, "about");
