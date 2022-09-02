import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h2>Let's get started.</h2>
      <p>Click the icons below to get in touch!</p>
      <ul className="contact__icons">
        <a
          href="https://www.linkedin.com/in/%E2%9C%A8camilla-%C3%A5mli-268ba2213/"
          rel="noopener"
          target="_blank"
        >
          <LinkedInIcon fontSize="large" />
        </a>
        <a href="mailto:camillaatek@gmail.com" rel="noopener" target="__blank">
          <EmailIcon fontSize="large" />
        </a>
        <a href="https://github.com/Camillaatek" rel="noopener" target="_blank">
          <GitHubIcon fontSize="large" />
        </a>
      </ul>
    </div>
  );
};

export default Contact;
