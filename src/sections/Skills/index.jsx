import React from "react";

import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";

import { images } from "../../constants";

import { AppWrap, MotionWrap } from "../../wrapper";

import "./index.scss";

const Skills = () => {
  const skills = [
    { name: "React", icon: images.react },
    { name: "JavaScript", icon: images.javascript },
    { name: "SCSS", icon: images.sass },
    { name: "Git", icon: images.git },
    { name: "HTML", icon: images.html },
    { name: "CSS", icon: images.css },
    { name: "Figma", icon: images.figma },
  ];

  const experiences = [
    {
      name: "Student",
      company: "Le Wagon Lisbon",
      description:
        "Graduated from Le Wagon's Web Development Bootcamp where I learned Ruby, Rails, HTML, JavaScript and CSS.",
      year: "2021",
    },
    {
      name: "Apprentice",
      company: "Subvisual",
      description:
        "Attended Subvisual's Summer Camp where I developed and shipped to production a Wheel of Fortune to be used by the company in hiring events & hackatons.",
      year: "2022",
    },
  ];

  return (
    <>
      <h2 className="head-text">
        Skills <span>&</span> Experience
      </h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div className="app__flex">
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences.map((experience) => (
            <motion.div className="app__skills-exp-item" key={experience.year}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                <>
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    className="app__skills-exp-work"
                    data-tip
                    data-for={experience.name}
                    key={experience.name}
                  >
                    <h4 className="bold-text">{experience.name}</h4>
                    <p className="p-text">{experience.company}</p>
                  </motion.div>
                  <ReactTooltip
                    id={experience.name}
                    effect="solid"
                    arrowColor="#fff"
                    className="skills-tooltip"
                  >
                    {experience.description}
                  </ReactTooltip>
                </>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
