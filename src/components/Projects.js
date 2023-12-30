import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/react-todo-phi.png";
import projImg2 from "../assets/img/react-spreadsheet-livid.png";
import projImg3 from "../assets/img/react-personal-portfolio-one.png";
import projImg4 from "../assets/img/react-trvl-eta.png";
import projImg5 from "../assets/img/demo-react-counter-fawn.png";
import projImg6 from "../assets/img/demo-react-github-users.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "To-Do List",
      description: "Keeping Track of Daily Tasks",
      imgUrl: projImg1,
      url: "https://react-todo-phi-three.vercel.app/",
    },
    {
      title: "Spreadsheet",
      description: "Basic Speadsheet Layout",
      imgUrl: projImg2,
      url: "https://react-spreadsheet-livid.vercel.app/",
    },
    {
      title: "Practice Personal Portfolio",
      description: "First Responsive Portfolio",
      imgUrl: projImg3,
      url: "https://react-personal-portfolio-one.vercel.app/",
    },
    {
      title: "TRVL Site",
      description: "Responsive Sample Travel Site",
      imgUrl: projImg4,
      url: "https://react-trvl-eta.vercel.app/",
    },
    {
      title: "Counter",
      description: "Basic Counter App",
      imgUrl: projImg5,
      url: "https://demo-react-counter-fawn.vercel.app/",
    },
    {
    title: "GitHub User Finder",
    description: "Find Any GitHub User By Their Name and/or Username",
    imgUrl: projImg6,
    url: "https://demo-react-github-users-eight.vercel.app/",
  },
  ];

  const smallProjects = [
    {
      title: "Basic Background Video",
      url: "https://imaginative-druid-a7e3c3.netlify.app/",
    },
    {
      title: "Creative Loading Animation",
      url: "https://tubular-otter-288a18.netlify.app/",
    },
    {
      title: "Custom Scrollbar",
      url: "https://poetic-entremet-0161da.netlify.app/",
    },
    {
      title: "Creative Skateboarder Image Hover Effect",
      url: "https://ornate-crostata-71b952.netlify.app/",
    },
    {
      title: "Creative Buttons",
      url: "https://fanciful-trifle-21c4f4.netlify.app/",
    },
    {
      title: "Creative Menus",
      url: "https://superlative-cactus-9386a4.netlify.app/",
    },
    {
      title: "Creative Image Effect",
      url: "https://subtle-heliotrope-2cc2c9.netlify.app/",
    },
    {
      title: "Tooltip",
      url: "https://famous-bavarois-c2b592.netlify.app/",
    },
    {
      title: "",
      url: "",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__bounce" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Here you will find each project in my portfolio reflects my
                    commitment to writing clean, maintainable code and my
                    dedication to staying at the forefront of modern web
                    development practices. Below you can view some of the work I
                    have done, using the creativity and technical expertise in
                    the realm of JavaScript, HTML, CSS, and React. Also, the
                    additional use of Vite, Tailwind, and Bootstrap.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">React projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Vanilla projects</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects?.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <div className="small-projects">
                          <ol className="gradient-list">
                            {smallProjects?.map((smallie, index) => {
                              return (
                                <li
                                  key={index}
                                  onClick={() =>
                                    (window.location.href = smallie.url)
                                  }
                                >
                                  {smallie.title}
                                </li>
                              );
                            })}
                          </ol>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
