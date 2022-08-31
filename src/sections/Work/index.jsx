import React, { useState } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";

import { motion } from "framer-motion";

import { images } from "../../constants";

import { AppWrap } from "../../wrapper";

import "./index.scss";

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const categories = ["Web", "Mobile", "React", "All"];

  const [works, setWorks] = useState([
    {
      title: "Wheel of Fortune",
      description: "Spin to win 🎡",
      codeLink: "https://github.com/Subvisual-Academy/subvisuwheel",
      link: "https://subvisuwheel.netlify.app/",
      imgUrl: images.wheel,
      tags: ["Mobile", "React", "All"],
    },
    {
      title: "ThirstTrail",
      description: "Your pocket cocktail builder 🍹",
      codeLink: "https://github.com/jreis13/ThirstTrail",
      link: "http://www.thirsttrail.me/",
      imgUrl: images.thirsttrail,
      tags: ["Mobile", "Web", "All"],
    },
    {
      title: "Portfolio",
      description: "You're already here 😅",
      codeLink: "https://github.com/jreis13/portfolio",
      link: "/",
      imgUrl: images.portfolio,
      tags: ["React", "Web", "Mobile", "All"],
    },
  ]);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setWorks([
          {
            title: "Wheel of Fortune",
            description: "Spin to win 🎡",
            codeLink: "https://github.com/Subvisual-Academy/subvisuwheel",
            link: "https://subvisuwheel.netlify.app/",
            imgUrl: images.wheel,
            tags: ["Mobile", "React", "All"],
          },
          {
            title: "ThirstTrail",
            description: "Your pocket cocktail builder 🍹",
            codeLink: "https://github.com/jreis13/ThirstTrail",
            link: "http://www.thirsttrail.me/",
            imgUrl: images.thirsttrail,
            tags: ["Mobile", "Web", "All"],
          },
          {
            title: "Portfolio",
            description: "You're already here 😅",
            codeLink: "https://github.com/jreis13/portfolio",
            link: "/",
            imgUrl: images.portfolio,
            tags: ["React", "Web", "Mobile", "All"],
          },
        ]);
      } else if (item === "Web") {
        setWorks([
          {
            title: "ThirstTrail",
            description: "Your pocket cocktail builder 🍹",
            codeLink: "https://github.com/jreis13/ThirstTrail",
            link: "http://www.thirsttrail.me/",
            imgUrl: images.thirsttrail,
            tags: ["Mobile", "Web", "All"],
          },
          {
            title: "Portfolio",
            description: "You're already here 😅",
            codeLink: "https://github.com/jreis13/portfolio",
            link: "/",
            imgUrl: images.portfolio,
            tags: ["React", "Web", "Mobile", "All"],
          },
        ]);
      } else if (item === "Mobile") {
        setWorks([
          {
            title: "Wheel of Fortune",
            description: "Spin to win 🎡",
            codeLink: "https://github.com/Subvisual-Academy/subvisuwheel",
            link: "https://subvisuwheel.netlify.app/",
            imgUrl: images.wheel,
            tags: ["Mobile", "React", "All"],
          },
          {
            title: "ThirstTrail",
            description: "Your pocket cocktail builder 🍹",
            codeLink: "https://github.com/jreis13/ThirstTrail",
            link: "http://www.thirsttrail.me/",
            imgUrl: images.thirsttrail,
            tags: ["Mobile", "Web", "All"],
          },
          {
            title: "Portfolio",
            description: "You're already here 😅",
            codeLink: "https://github.com/jreis13/portfolio",
            link: "/",
            imgUrl: images.portfolio,
            tags: ["React", "Web", "Mobile", "All"],
          },
        ]);
      } else if (item === "React") {
        setWorks([
          {
            title: "Wheel of Fortune",
            description: "Spin to win 🎡",
            codeLink: "https://github.com/Subvisual-Academy/subvisuwheel",
            link: "https://subvisuwheel.netlify.app/",
            imgUrl: images.wheel,
            tags: ["Mobile", "React", "All"],
          },
          {
            title: "Portfolio",
            description: "You're already here 😅",
            codeLink: "https://github.com/jreis13/portfolio",
            link: "/",
            imgUrl: images.portfolio,
            tags: ["React", "Web", "Mobile", "All"],
          },
        ]);
      }
    }, 500);
  };

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
      >
        {works.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={work.imgUrl} alt={work.title} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                <a href={work.link} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>

                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {work.description}
              </p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(Work, "work");
