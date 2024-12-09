import React from "react";

import Hero from "../Hero/Hero";
import FeaturedGrounds from "../Feature/Feature";
import Footer from "../Footer/Footer";
import Service from "./Service";

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedGrounds />
      <Service />
      <Footer />
    </>
  );
};

export default Home;
