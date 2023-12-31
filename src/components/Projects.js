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
    description: "Find Any GitHub User By Their Username",
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
      title: "Accordion",
      url: "https://sweet-faloodeh-577b55.netlify.app/",
    },
    {
      title: "Scrollbar",
      url: "https://incomparable-eclair-68ccf0.netlify.app/",
    },
    {
      title: "Image Background Text",
      url: "https://tiny-faloodeh-e7ef1c.netlify.app/",
    },
    {
      title: "Page Scroll Indicator",
      url: "https://meek-crisp-3b58b9.netlify.app/",
    },
    {
      title: "Heart",
      url: "https://comforting-semolina-9afbd8.netlify.app/",
    },
    {
      title: "Random Background Color Changer",
      url: "https://tubular-griffin-99842d.netlify.app/",
    },
    {
      title: "Auto Text For JavaScript",
      url: "https://clever-cobbler-ab121e.netlify.app/",
    },
    {
      title: "Mouse Cursor Project",
      url: "https://app.netlify.com/sites/effulgent-daifuku-831ea3/overview",
    },
    {
      title: "Call Of Duty Game Trailer",
      url: "https://illustrious-babka-813a6b.netlify.app/",
    },
    {
      title: "Light to Dark Toggler",
      url: "https://storied-dieffenbachia-fd4952.netlify.app/",
    },
    {
      title: "Animated Navigation Bar",
      url: "https://adorable-marshmallow-c71063.netlify.app/",
    },
    {
      title: "Random Emojis",
      url: "https://tangerine-alfajores-dd3a15.netlify.app/",
    },
    {
      title: "Arrow Fade Out",
      url: "https://idyllic-profiterole-b322b9.netlify.app/",
    },
    {
      title: "Simple Calculator",
      url: "https://subtle-pavlova-36766c.netlify.app/",
    },
    {
      title: "Copy & Move Text",
      url: "https://soft-mermaid-629e8c.netlify.app/",
    },
    {
      title: "Progress Steps",
      url: "https://euphonious-kleicha-8e6aa2.netlify.app/",
    },
    {
      title: "Form Popup",
      url: "https://dashing-duckanoo-95214f.netlify.app/",
    },
    {
      title: "Lazy Loading",
      url: "https://snazzy-shortbread-7ab726.netlify.app/",
    },
    {
      title: "Show & Hide Password",
      url: "https://tourmaline-quokka-b0ccf2.netlify.app/",
    },
    {
      title: "Social Media Menu Selector",
      url: "https://unique-kleicha-c18bb7.netlify.app/",
    },
    {
      title: "Form Wave",
      url: "https://courageous-licorice-72bd36.netlify.app/",
    },
    {
      title: "Full Screen Navigation",
      url: "https://app.netlify.com/sites/shimmering-alpaca-3bce8c/overview",
    },
    {
      title: "3D Nav",
      url: "https://calm-chaja-689d7a.netlify.app/",
    },
    {
      title: "Counter v2",
      url: "https://app.netlify.com/sites/incredible-salmiakki-7d55a7/overview",
    },
    {
      title: "Text Formatter",
      url: "https://fascinating-salmiakki-71974e.netlify.app/",
    },
    {
      title: "Image Gallery",
      url: "https://famous-sorbet-3454db.netlify.app/",
    },
    {
      title: "Read More / Read Less",
      url: "https://astounding-peony-38dfe4.netlify.app/",
    },
    {
      title: "Expanding Video Game Cards",
      url: "https://loquacious-brigadeiros-f59816.netlify.app/",
    },
    {
      title: "KeyCode",
      url: "https://coruscating-crepe-da2322.netlify.app/",
    },
    {
      title: "Front-End Development Tabs",
      url: "https://elaborate-kataifi-f125fb.netlify.app/",
    },
    {
      title: "JavaScript Accordions",
      url: "https://fancy-yeot-d8c301.netlify.app/",
    },
    {
      title: "Random Image Feed",
      url: "https://superb-cendol-2997c2.netlify.app/",
    },
    {
      title: "Random Quote Generator",
      url: "https://stately-mermaid-582379.netlify.app/",
    },
    {
      title: "Email Validation",
      url: "https://lustrous-daifuku-7a702b.netlify.app/",
    },
    {
      title: "Interchangeable Background Colors",
      url: "https://wonderful-druid-17d563.netlify.app/",
    },
    {
      title: "Digital Clock",
      url: "https://curious-froyo-0d863d.netlify.app/",
    },
    {
      title: "Browse & Upload File",
      url: "https://dancing-tanuki-3dc474.netlify.app/",
    },
    {
      title: "Sticky Navbar",
      url: "https://zesty-narwhal-ee7b1e.netlify.app/",
    },
    {
      title: "Search & Highlight Text",
      url: "https://cerulean-licorice-d736d7.netlify.app/",
    },
    {
      title: "Custom Range Slider",
      url: "https://cheery-boba-b26cd5.netlify.app/",
    },
    {
      title: "Emoji Feedback",
      url: "https://curious-seahorse-37f529.netlify.app/",
    },
    {
      title: "Emoji Eye Follow",
      url: "https://glittering-medovik-723142.netlify.app/",
    },
    {
      title: "Rounded Navbar",
      url: "https://sunny-cucurucho-7505b7.netlify.app/",
    },
    {
      title: "CSS Clip Path Animation",
      url: "https://zingy-griffin-055f0e.netlify.app/",
    },
    {
      title: "Mini Calendar",
      url: "https://precious-pie-ae8a00.netlify.app/",
    },
    {
      title: "Two Sides Scrolling",
      url: "https://vocal-haupia-a4d4a2.netlify.app/",
    },
    {
      title: "Facebook & YouTube Followers",
      url: "https://nimble-selkie-7c3bec.netlify.app/",
    },
    {
      title: "Custom Cursor",
      url: "https://tranquil-sundae-5824ae.netlify.app/",
    },
    {
      title: "CSS Rotating Text",
      url: "https://superlative-alpaca-477010.netlify.app/",
    },
    {
      title: "Background Image Carousel",
      url: "https://brilliant-cucurucho-6b6480.netlify.app/",
    },
    {
      title: "Modern Calculator",
      url: "https://endearing-griffin-6d25ca.netlify.app/",
    },
    {
      title: "Sidebar Animation",
      url: "https://genuine-dodol-89544b.netlify.app/",
    },
    {
      title: "Rotating Image Gallery",
      url: "https://darling-baklava-622978.netlify.app/",
    },
    {
      title: "Password Strength Background",
      url: "https://illustrious-gingersnap-67a884.netlify.app/",
    },
    {
      title: "Gradient Generator",
      url: "https://cute-taiyaki-92517b.netlify.app/",
    },
    {
      title: "Login / Sign-Up Form",
      url: "https://gentle-ganache-acc9c0.netlify.app/",
    },
    {
      title: "Animated Search Bar",
      url: "https://melodious-hotteok-f22e81.netlify.app/",
    },
    {
      title: "Password Generator",
      url: "https://dreamy-cranachan-fbb669.netlify.app/",
    },
    {
      title: "Box-Shadow Generator",
      url: "https://ubiquitous-kulfi-eee3af.netlify.app/",
    },
    {
      title: "Decimal to Binary Converter",
      url: "https://precious-kleicha-a76bbb.netlify.app/",
    },
    {
      title: "Random Captcha",
      url: "https://ephemeral-fenglisu-05579f.netlify.app/",
    },
    {
      title: "Drag & Drop",
      url: "https://earnest-croquembouche-789d02.netlify.app/",
    },
    {
      title: "Update CSS Variables Using JavaScript",
      url: "https://glittery-pasca-63971b.netlify.app/",
    },
    {
      title: "Lightbulb",
      url: "https://genuine-croissant-24ae8a.netlify.app/",
    },
    {
      title: "Tabbed Navigation",
      url: "https://bejewelled-brioche-5836a4.netlify.app/",
    },
    {
      title: "To-Do List",
      url: "https://zesty-duckanoo-7cbe60.netlify.app/",
    },
    {
      title: "Random Chuck Norris Jokes",
      url: "https://stirring-kulfi-b0ed25.netlify.app/",
    },
    {
      title: "Random Cat Images",
      url: "https://resilient-blancmange-6f5bac.netlify.app/",
    },
    {
      title: "Random Dad Jokes",
      url: "https://dapper-naiad-b8216f.netlify.app/",
    },
    {
      title: "Testimonial Box",
      url: "https://adorable-gumption-bf715d.netlify.app/",
    },
    {
      title: "Live User Filter",
      url: "https://gleeful-kleicha-904b04.netlify.app/",
    },
    {
      title: "Emoji Catcher Game",
      url: "https://amazing-dodol-54657f.netlify.app/",
    },
    {
      title: "Twitter Follow Component",
      url: "https://symphonious-alfajores-ff5f39.netlify.app/",
    },
    {
      title: "Book List App",
      url: "https://calm-caramel-0392f6.netlify.app/",
    },
    {
      title: "Stop Watch Timer",
      url: "https://stately-salmiakki-a42749.netlify.app/",
    },
    {
      title: "Typing Challenge",
      url: "https://spontaneous-lebkuchen-d09790.netlify.app/",
    },
    {
      title: "Shape Clicker Game",
      url: "https://meek-melomakarona-acba45.netlify.app/",
    },
    {
      title: "Word Counter",
      url: "https://genuine-jelly-40d2ab.netlify.app/",
    },
    {
      title: "Construction Landing Page",
      url: "https://timely-crostata-0c3357.netlify.app/",
    },
    {
      title: "Foody Landing Page",
      url: "https://papaya-jalebi-e2fe9e.netlify.app/",
    },
    {
      title: "Coffee Landing Page",
      url: "https://moonlit-lamington-f5a934.netlify.app/",
    },
    {
      title: "Chairs Landing Page",
      url: "https://papaya-griffin-7e8109.netlify.app/",
    },
    {
      title: "Art Landing Page",
      url: "https://sunny-clafoutis-c95203.netlify.app/",
    },
    {
      title: "Hoodies Landing Page",
      url: "https://capable-dasik-747f80.netlify.app/",
    },
    {
      title: "Random Users",
      url: "https://splendid-zabaione-69c178.netlify.app/",
    },
    {
      title: "Home Decor",
      url: "https://inquisitive-gnome-168e35.netlify.app/",
    },
    {
      title: "Form Validation",
      url: "https://subtle-starburst-0cc59b.netlify.app/",
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
                        <Nav.Link eventKey="first">React Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Vanilla Projects</Nav.Link>
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
