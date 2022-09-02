import React from "react";
import intro from "../media/3dintro.jpg";

const Home = () => {
  return (
    <div className="home__container" id="home">
      <img src={intro} alt="desktop setup" className="home" />
    </div>
  );
};

export default Home;
