import React from "react";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a
          href="https://www.linkedin.com/in/joao-francisco-reis/"
          target="_blank"
          rel="noreferrer"
          style={{ marginTop: 4 }}
        >
          <FaLinkedinIn />
        </a>
      </div>
      <div>
        <a
          href="https://github.com/jreis13"
          target="_blank"
          rel="noreferrer"
          style={{ marginTop: 4 }}
        >
          <FaGithub />
        </a>
      </div>
      <div>
        <a
          href="https://twitter.com/eljozy"
          target="_blank"
          rel="noreferrer"
          style={{ marginTop: 4 }}
        >
          <BsTwitter />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
