import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/Logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon style" style = {{paddingTop:"20px"}}>
              <a href="https://www.linkedin.com/in/sahil-sureliya-1a4a82223?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                <img src={navIcon1} alt="" />
              </a>
              <a href="https://github.com/Sahil19258">
                <img src={navIcon2} alt="" />
              </a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
