import React from "react";
import ProjectsItem from "./ProjectsItem";
import test from "../../media/test.jpg";
import holidaze from "../../media/holidaze.JPG";
import ecommerce from "../../media/ecommrece2.JPG";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <h2>Projects</h2>
      <p>
        A few of my projects from when I went to Noroff, and also from my spare
        time.
      </p>
      <ProjectsItem
        image={holidaze}
        title="Holidaze"
        info="A hotel booking site made for my last exam at Noroff. We made our own API 
        with <BoldText>world</BoldText>Strapi and made it public with heroku, also built with ReactJS. The Hotel site has a visitor site including Search bar with auto dropdown, details about 
        the hotels and a contact page that goes to the admin for Holidaze. The admin page has a login section that makes use of JWT tokens, messages from cantact form and are able to delete/create a new establishment."
      />
      <ProjectsItem
        image={ecommerce}
        title="Electronics"
        info="Electronics is a fictional e-commerce website for Semester Project 2. The website has a search function and featured products. Login function with JWT tokens that will take you to the admin page. Adding an item to the cart saves it in LocalStorage, and also calculates the total sum."
      />
      <ProjectsItem
        image={test}
        title="Project 3"
        info="when an unknown printer took a galley of type and scrambled it to make a
        type specimen book. It has survived not only five centuries, but also.when an unknown printer took a galley of type and scrambled it to make a
        type specimen book. It has survived not only five centuries, but also."
      />
    </div>
  );
};

export default Projects;
