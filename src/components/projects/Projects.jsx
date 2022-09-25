import React from "react";
import { useState } from "react";
import { ProjectData } from "./Data";
import { FaTimes } from "react-icons/fa";
import { listClasses } from "@mui/material";

const Projects = () => {
  const [popup, setPopup] = useState([]);
  const [popuptoggle, setPopuptoggle] = useState(false);
  const changecontent = (project) => {
    setPopup([project]);
    setPopuptoggle(!popuptoggle);
  };

  return (
    <div className="project" id="projects">
      <h1>Projects</h1>
      <div className="project__container">
        {ProjectData.map((project) => {
          return (
            <div
              className="project__card"
              key={project.id}
              onClick={() => changecontent(project)}
            >
              <img src={project.image} alt="Project img" />
            </div>
          );
        })}
      </div>
      {popuptoggle && (
        <div className="pop-up" onClick={changecontent}>
          <div className="pop-up__body" onClick={(e) => e.stopPropagation()}>
            <div className="pop-up__header">
              <button onClick={changecontent}>
                <FaTimes size={20} style={{ color: "#000" }} />
              </button>
            </div>
            <div className="pop-up__content">
              {popup.map((pop) => {
                return (
                  <div className="pop-up__card">
                    <div className="pop-up__grid--1">
                      <h1 className="card-title head-title">{pop.title}</h1>
                      <p>{pop.description}</p>
                      <ul>{pop.list}</ul>
                    </div>
                    <div className="pop-up__grid--2">
                      <img src={pop.image} alt="small img of project" />
                      <div className="pop-up__grid--3 mt-4">
                        <a href={pop.demo} target="_blank">
                          Live Demo
                        </a>
                        <a href={pop.github} target="_blank">
                          Code
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
      <div className="project__courses">
        <h2 className="head-title--2 mt-8">Courses</h2>
        <img
          src="https://udemy-certificate.s3.amazonaws.com/image/UC-77697637-18e4-4923-b2cb-2c76f1fa7df4.jpg"
          alt="course certificate"
        />
      </div>
    </div>
  );
};

export default Projects;
