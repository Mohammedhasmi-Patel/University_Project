import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";
const About = () => {
  return (
    <>
      <div className="about">
        <div className="about-left">
          <img
            src={about_img}
            alt="its image about university"
            className="about-img"
          />
          <img src={play_icon} alt="its about playing" className="play-icon" />
        </div>
        <div className="about-right">
          <h3>ABOUT UNIVERSITY</h3>
          <h2>Nurturing Tommorow's Leaders Today</h2>
          <p>
            We are on a mission to change the indian education system. we will
            provide amazing knowledge in minnimum price.Also We will provide
            Great Hostel Facilities to everyone.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
