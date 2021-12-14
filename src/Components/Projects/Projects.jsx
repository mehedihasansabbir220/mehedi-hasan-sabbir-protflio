import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./Projects.css";
import sudokologo from "../Assets/S.png";
import Clockifylogo from "../Assets/Clockify.png";
import TestAdmin from "../Assets/test-Admin.png";
import Covidlogo from "../Assets/21.png";
import Travelocitylogo from "../Assets/22.png";
import Airgaragelogo from "../Assets/23.png";
import MotorByke from "../Assets/24.png";
import { DiReact, DiJavascript, DiGithubBadge, DiHtml5 } from "react-icons/di";
import { SiRedux, SiStyledcomponents,SiMaterialui} from "react-icons/si";
import { FaLink, FaCss3 } from "react-icons/fa";
export const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={6} className="project-card">
            <Card className="project-card-view" style={{ textAlign: "center" }}>
              <Card.Img variant="top" src={TestAdmin} alt="Clockify Clone" />
              <Card.Body>
                <Card.Title style={{ fontWeight: "800" }}>
                 Admin Panel  
                </Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                This is Website Admin Panel Here You Can add Product See Youser Delate a Product and Also Update Tham .
                </Card.Text>
                <div className="Techstacks">
                  <DiReact className="Techstacks-icons" />
                  <SiRedux className="Techstacks-icons" />
                  <SiStyledcomponents className="Techstacks-icons" />
                  <DiJavascript className="Techstacks-icons" />
                  <SiMaterialui className="Techstacks-icons" />
                  <FaCss3 className="Techstacks-icons" />
                  <DiHtml5 className="Techstacks-icons" />
                </div>
                <Button
                  variant="primary"
                  style={{ marginTop: "5%" }}
                  href="https://github.com/mehedihasansabbir220/Test-Admin"
                  target="_blank"
                >
                  {" "}
                  <DiGithubBadge /> Github
                </Button>
                <Button
                  variant="primary"
                  style={{ marginLeft: "5%", marginTop: "5%" }}
                  href="https://happy-mayer-0c4b02.netlify.app/#/login"
                  target="_blank"
                >
                  {" "}
                  <FaLink /> Link
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="project-card">
            <Card className="project-card-view" style={{ textAlign: "center" }}>
              <Card.Img variant="top" src={Clockifylogo} alt="Clockify Clone" />
              <Card.Body>
                <Card.Title style={{ fontWeight: "800" }}>
                 Food Devilbary 
                </Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                Would you like millions of new customers to enjoy your amazing food and groceries? So would we! It's simple: we list your menu and product lists online, help you process orders, pick them up, and deliver them to hungry pandas – in a heartbeat! Interested? Let's start our partnership today!
                </Card.Text>
                <div className="Techstacks">
                  <DiReact className="Techstacks-icons" />
                  <SiRedux className="Techstacks-icons" />
                  <SiStyledcomponents className="Techstacks-icons" />
                  <DiJavascript className="Techstacks-icons" />
                  <SiMaterialui className="Techstacks-icons" />
                  <FaCss3 className="Techstacks-icons" />
                  <DiHtml5 className="Techstacks-icons" />
                </div>
                <Button
                  variant="primary"
                  style={{ marginTop: "5%" }}
                  href="https://github.com/mehedihasansabbir220/food-delevery"
                  target="_blank"
                >
                  {" "}
                  <DiGithubBadge /> Github
                </Button>
                <Button
                  variant="primary"
                  style={{ marginLeft: "5%", marginTop: "5%" }}
                  href="https://food-delivary-d65b6.web.app/"
                  target="_blank"
                >
                  {" "}
                  <FaLink /> Link
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="project-card" style={{ textAlign: "center" }}>
            <Card className="project-card-view">
              <Card.Img variant="top" src={sudokologo} alt="Clockify Clone" />
              <Card.Body>
                <Card.Title style={{ fontWeight: "800" }}>
                  Car Sels Online 
                </Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                Car Sels Online  is a Website that gives you the Solution of
                  Every Car Problem that you input and also you can visualize
                  each step of how the Car is getting solved.
                </Card.Text>
                <div className="Techstacks">
                  <DiReact className="Techstacks-icons" />
                  <DiJavascript className="Techstacks-icons" />
                  <SiMaterialui className="Techstacks-icons" />
                  <FaCss3 className="Techstacks-icons" />
                  <DiHtml5 className="Techstacks-icons" />
                </div>
                <Button
                  variant="primary"
                  href="https://github.com/mehedihasansabbir220/carsels"
                  target="_blank"
                  style={{ marginTop: "5%" }}
                >
                  {" "}
                  <DiGithubBadge /> Github
                </Button>
                <Button
                  variant="primary"
                  style={{ marginLeft: "5%", marginTop: "5%" }}
                  href="https://carsals-cb716.web.app/"
                  target="_blank"
                >
                  {" "}
                  <FaLink /> Link
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="project-card">
            <Card className="project-card-view" style={{ textAlign: "center" }}>
              <Card.Img variant="top" src={Covidlogo} alt="Clockify Clone" />
              <Card.Body>
                <Card.Title style={{ fontWeight: "800" }}>
                  Medical (Bangladesh)
                </Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                Medical is website that shows you the complete data of
                  the Covid-19 Cases of Every State distributed in three
                  sections Active, Recovered and Deaths.
                </Card.Text>
                <div className="Techstacks">
                  <DiReact className="Techstacks-icons" />
                  <DiJavascript className="Techstacks-icons" />
                  <SiMaterialui className="Techstacks-icons" />
                  <FaCss3 className="Techstacks-icons" />
                  <DiHtml5 className="Techstacks-icons" />
                </div>
                <Button
                  variant="primary"
                  style={{ marginTop: "5%" }}
                  href="https://github.com/mehedihasansabbir220/medical-life1"
                  target="_blank"
                >
                  {" "}
                  <DiGithubBadge /> Github
                </Button>
                <Button
                  variant="primary"
                  style={{ marginLeft: "5%", marginTop: "5%" }}
                  href="https://medical-life-d021f.web.app/"
                  target="_blank"
                >
                  {" "}
                  <FaLink /> Link
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="project-card">
            <Card className="project-card-view" style={{ textAlign: "center" }}>
              <Card.Img
                variant="top"
                src={Travelocitylogo}
                alt="Clockify Clone"
              />
              <Card.Body>
                <Card.Title style={{ fontWeight: "800" }}>
                 HeadPhones 
                </Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                HeadPhones is a Website that lets You Buy HeadPhones Complete Vacation Packages Across the World and Also
               Provides free of Cost Cancellation Policy to Customers.
                </Card.Text>
                <div className="Techstacks">
                  <DiJavascript className="Techstacks-icons" />
                  <FaCss3 className="Techstacks-icons" />
                  <DiHtml5 className="Techstacks-icons" />
                </div>
                <Button
                  variant="primary"
                  style={{ marginTop: "5%" }}
                  href="https://github.com/mehedihasansabbir220/online-store"
                  target="_blank"
                >
                  {" "}
                  <DiGithubBadge /> Github
                </Button>
                <Button
                  variant="primary"
                  style={{ marginLeft: "5%", marginTop: "5%" }}
                  href="https://gracious-noether-9e6362.netlify.app/"
                  target="_blank"
                >
                  {" "}
                  <FaLink /> Link
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="project-card">
            <Card className="project-card-view" style={{ textAlign: "center" }}>
              <Card.Img
                variant="top"
                src={Airgaragelogo}
                alt="Clockify Clone"
              />
              <Card.Body>
                <Card.Title style={{ fontWeight: "800" }}>Top Univesity List In Usa </Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                Top Univesity List In Usa is a Website that lets You Book the University 
                  in any Part of the Us Country.
                </Card.Text>
                <div className="Techstacks">
                  <DiJavascript className="Techstacks-icons" />
                  <FaCss3 className="Techstacks-icons" />
                  <DiHtml5 className="Techstacks-icons" />
                </div>
                <Button
                  variant="primary"
                  style={{ marginTop: "5%" }}
                  href="https://github.com/mehedihasansabbir220/university-of-education"
                  target="_blank"
                >
                  {" "}
                  <DiGithubBadge /> Github
                </Button>
                <Button
                  variant="primary"
                  style={{ marginLeft: "5%", marginTop: "5%" }}
                  href="https://ecstatic-hawking-39741f.netlify.app/"
                  target="_blank"
                >
                  {" "}
                  <FaLink /> Link
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="project-card">
          <Card className="project-card-view" style={{ textAlign: "center" }}>
              <Card.Img
                variant="top"
                src={MotorByke}
                alt="Clockify Clone"
              />
              <Card.Body>
                <Card.Title style={{ fontWeight: "800" }}>Honda Cbr 100</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                Honda Cbr 100 is a Website that lets You See  the All New Feture In Honda CBR and there Price 
                  in any Part of the Us Country.
                </Card.Text>
                <div className="Techstacks">
                  <DiJavascript className="Techstacks-icons" />
                  <FaCss3 className="Techstacks-icons" />
                  <DiHtml5 className="Techstacks-icons" />
                </div>
                <Button
                  variant="primary"
                  style={{ marginTop: "5%" }}
                  href="https://github.com/mehedihasansabbir220/Honda-CVR"
                  target="_blank"
                >
                  {" "}
                  <DiGithubBadge /> Github
                </Button>
                <Button
                  variant="primary"
                  style={{ marginLeft: "5%", marginTop: "5%" }}
                  href="https://eloquent-hoover-7c6815.netlify.app/"
                  target="_blank"
                >
                  {" "}
                  <FaLink /> Link
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
