import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Type } from "./Type";
import { Particle } from "./Particle";
import homeLogo from "../Assets/home-main.svg";
import "./Home.css";
export const Home = () => {
  return (
    <>
    <Particle/>
        <Container fluid className="home-section" id="home">
          {/* <Particle /> */}
          <Container className="home-content">
            <Row>
              <Col md={7} className="home-header">
                <h1 style={{ paddingBottom: 15 }} className="heading">
                  Hi There! <span className="wave">👋🏻</span>
                </h1>
                <h1 className="heading-name">
                  I'M
                  <strong className="main-name"> &nbsp;Mohammed Mehedi Hasan Sabbir </strong>
                </h1>
                <div style={{ padding: 50, textAlign: "left" }}>
                  <Type />
                </div>
              </Col>
              <Col md={5} style={{ paddingBottom: 20 }}>
                <img src={homeLogo} alt="home pic" className="img-fluid" />
              </Col>
            </Row>
          </Container>
        </Container>
        
    </>
  );
};
