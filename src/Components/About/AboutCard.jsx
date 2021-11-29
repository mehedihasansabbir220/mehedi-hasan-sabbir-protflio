import React from "react";
import "./About.css";
import { Card } from "react-bootstrap";
import { ImPointRight } from "react-icons/im";
export const AboutCard = () => {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mehedi Hasan Sabbir  </span>
            from <span className="purple"> Sylhet, Bangladesh.</span>
            <br />I am a web developer with a vast array of knowledge in many different font end and back end languages, responsive frameworks, databases, and best code practices. My Object is simply to be the best web developer that I can be and to contribute to the technology industry all that I know and can do, I am dedicated to perfecting my craft by learning from more seasoned developers, remaining humble, and continuously making strides to learn all that I can about development, I studied Computer Science, and I believe that complex algorithms are also skills that have and will continue to contribute to my overall success as a developer.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Box cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Solving Data Structures
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning Algorithms
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to Music
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
};
