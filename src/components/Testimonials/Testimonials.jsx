import React from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";
import { useRef } from "react";

function Testimonials() {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <>
      <div className="testimonials">
        <img
          src={next_icon}
          alt=""
          className="next-btn"
          onClick={slideForward}
        />
        <img
          src={back_icon}
          alt=""
          className="back-btn"
          onClick={slideBackward}
        />
        <div className="slider">
          <ul ref={slider}>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_1} alt="First User" />
                  <div>
                    <h3>Shubham Jigyas</h3>
                  </div>
                </div>

                <p>
                  Choosing my degree at this institute its give lots of banefits
                  , and also teaching experience is also just amazing.
                </p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_2} alt="First User" />
                  <div>
                    <h3>Mohammed Hasmi</h3>
                  </div>
                </div>
                <p>
                  Choosing my degree at this institute its give lots of banefits
                  , and also teaching experience is also just amazing.
                </p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_3} alt="First User" />
                  <div>
                    <h3>Divyangi Patel</h3>
                  </div>
                </div>
                <p>
                  Choosing my degree at this institute its give lots of banefits
                  , and also teaching experience is also just amazing.
                </p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_4} alt="First User" />
                  <div>
                    <h3>Technical Guruji</h3>
                  </div>
                </div>
                <p>
                  Choosing my degree at this institute its give lots of banefits
                  <br />
                  and also teaching experience is also just amazing.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
