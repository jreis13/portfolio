import React from "react";

import { About, Footer, Hero, Skills, Work } from "./sections";
import { Navbar } from "./components";

import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Skills />
      <Footer />
    </div>
  );
};

export default App;
