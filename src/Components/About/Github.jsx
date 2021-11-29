import React from "react";
import { Row } from "react-bootstrap";
import "./About.css";
import ReactGitHubCalendar from 'react-ts-github-calendar';



export const Github = () => {
  const colourTheme = {
    background: "transparent",
    text: "#ffffff",
    grade4: "#8400b8",
    grade3: "#b22ff4",
    grade2: "#b265f6",
    grade1: "#c084f5",
    grade0: "#ecd9fc"
  };

  return <Row style={{justifyContent:"center", paddingBottom:"10px"}}>
    <h1 className="project-heading" style={{paddingBottom:"20px"}}>
      Days I <strong className="purple">Code</strong>
    </h1>
    <ReactGitHubCalendar 
    theme={colourTheme}
    blockSize={15} 
    blockMargin={5} userName="mehedihasansabbir220" global_stats={false} cache={(12 * 60 * 60)*1000} 
    tooltips
    responsive
    fontSize={16}
    />;
  </Row>;
};
