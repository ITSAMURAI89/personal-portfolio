import { Col, Container, Row } from "react-bootstrap";
import unnamed2 from '../assets/img/unnamed2.jpg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col sm={6}>
                        <img src={unnamed2} alt="Logo" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/nikola-kuzmanovic-b3a021a5?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BIq1MOUywRHWNnNRcd96N5A%3D%3D"><img src={navIcon1} /></a>
                            <a href="https://www.facebook.com/nikola.kuzmanovic.399488"><img src={navIcon2} /></a>
                            <a href="https://www.instagram.com/ticticnik/"><img src={navIcon3} /></a>
                        </div>
                        <p>CopyRight 2023. All Rights Reserved<br/>ITSAMURAI89</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}