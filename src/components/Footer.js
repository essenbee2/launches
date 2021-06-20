import React from "react";
import { Container } from "semantic-ui-react";

const Footer = () => (
  <div>
    <footer className="ui vertical inverted footer segment">
      <Container>
        Built with{" "}
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          ReactJS
        </a>{" "}
        and{" "}
        <a
          href="https://fomantic-ui.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Fomantic UI
        </a>{" "}
        by Essenbee 2021
      </Container>
    </footer>
  </div>
);

export default Footer;
