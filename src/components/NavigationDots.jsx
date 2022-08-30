/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */

import React from "react";

const links = ["home", "about", "work", "skills", "contact"];

const NavigationDots = ({ active }) => (
  <div className="app__navigation">
    {links.map((item, index) => (
      <a
        href={`#${item}`}
        key={item + index}
        className="app__navigation-dot"
        style={active === item ? { backgroundColor: "#7f3645" } : {}}
      />
    ))}
  </div>
);

export default NavigationDots;
