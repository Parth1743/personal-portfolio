import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.webp";
import projImg2 from "../assets/img/project-img2.webp";
import projImg3 from "../assets/img/project-img3.webp";
import projImg4 from "../assets/img/img4.webp";
import projImg5 from "../assets/img/img5.webp";
import projImg6 from "../assets/img/img6.webp";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Library Management System",
      description: "An interactive system using Python and MySQL for managing book stock, member records, and transactions. It features search functionality and reporting tools for easy management.",
      imgUrl: projImg1,
    },
    {
      title: "Weapon Detection AI Model",
      description: "Developed a YOLO-based AI model with 90% accuracy for weapon detection, featuring a web interface built with the MERN stack. The project focuses on public safety applications.",
      imgUrl: projImg2,
    },
    {
      title: "Web Scraping Tool",
      description: "A Python-based web scraping tool that extracts data from various websites. Leveraged libraries like BeautifulSoup and pandas for efficient data extraction and analysis.",
      imgUrl: projImg6,
    },
    {
      title: "Music Player",
      description: "Built a music player application using Python. This project involved creating a user-friendly interface and handling audio playback functionalities using Pygame.",
      imgUrl: projImg4,
    },
    {
      title: "AI Engineer Intern - Nasscom",
      description: "Worked on multiple AI and ML projects during my internship at Nasscom, gaining hands-on experience with various programming languages and tools.",
      imgUrl: projImg3,
    },
    {
      title: "Python Developer Intern - CodeClause",
      description: "Developed and implemented several Python projects, earning a Letter of Recommendation for outstanding contributions and expertise in Python.",
      imgUrl: projImg5,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Projects</h2>
                <p>Here are some of the projects I've worked on, showcasing my skills in AI, Machine Learning, and software development. These projects demonstrate my expertise in Python, JavaScript, and the MERN stack, along with my passion for problem-solving and innovation.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">All Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Internships</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Personal Projects</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {projects.map((project, index) => (
                          <ProjectCard
                            key={index}
                            {...project}
                          />
                        ))}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>During my internships, I worked on real-world AI projects, gaining valuable industry experience and developing innovative solutions for practical challenges.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>My personal projects showcase my creativity and passion for developing solutions that make a difference, whether it's building interactive applications or exploring advanced AI models.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background"></img>
    </section>
  );
};
