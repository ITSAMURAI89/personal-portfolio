import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/nature-bg.jpg";
import GradientCircleProgressbar from "./GradientCircleProgressBar";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skills" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <GradientCircleProgressbar
                    width={120}
                    height={120}
                    percentage={90}
                    strokeWidth={10}
                    primaryColor={["#002702", "#f0ea71"]}
                  />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <GradientCircleProgressbar
                    width={120}
                    height={120}
                    percentage={80}
                    strokeWidth={10}
                    primaryColor={["#002702", "#f0ea71"]}
                  />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <GradientCircleProgressbar
                    width={120}
                    height={120}
                    percentage={75}
                    strokeWidth={10}
                    primaryColor={["#002702", "#f0ea71"]}
                  />
                  <h5>TypeScript</h5>
                </div>
                <div className="item">
                  <GradientCircleProgressbar
                    width={120}
                    height={120}
                    percentage={100}
                    strokeWidth={10}
                    primaryColor={["#002702", "#f0ea71"]}
                  />
                  <h5>HTML & CSS</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-center" src={colorSharp} />
    </section>
  );
};
