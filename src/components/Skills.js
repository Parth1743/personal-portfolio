import meter1 from "../assets/img/meter1.svg"; // Advanced
import meter2 from "../assets/img/meter2.svg"; // Intermediate
import meter3 from "../assets/img/meter3.svg"; // Basic
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                These are the core technical and programming skills I’ve developed through real-world experience in AI, machine learning, and full-stack development.
              </p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">

                <div className="item">
                  <img src={meter1} alt="Python" />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="JavaScript" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="MERN Stack" />
                  <h5>MERN Stack</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="MySQL" />
                  <h5>MySQL & DBMS</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Machine Learning" />
                  <h5>Machine Learning</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="OpenCV and PyTorch" />
                  <h5>OpenCV & PyTorch</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="TensorFlow" />
                  <h5>TensorFlow & Pandas</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Flask and NumPy" />
                  <h5>Flask & NumPy</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="C++" />
                  <h5>C / C++</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Git and Linux" />
                  <h5>Git & Linux</h5>
                </div>

              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
