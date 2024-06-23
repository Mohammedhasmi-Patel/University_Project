import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import white_arrow from "../../assets/white-arrow.png";

import location_icon from "../../assets/location-icon.png";

function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "0e86ec2d-4015-4214-8faa-d38d28a07a37");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Email Sent Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
      <div className="contact">
        <div className="contact-col">
          <h3>
            Send us a Message <img src={msg_icon} alt="" />
          </h3>
          <p>
            Feel free to reach out through contact form or find our contact
            information below. Your Feedback is very important for us.
          </p>
          <ul>
            <li>
              {" "}
              <img src={mail_icon} alt="" />
              Contacthasmi@gmail.com
            </li>
            <li>
              {" "}
              <img src={phone_icon} alt="" />
              123-985-121
            </li>
            <li>
              <img src={location_icon} alt="" /> Near Sultania
              Zymkhana,Rander,Surat.
            </li>
          </ul>
        </div>
        <div className="contact-col">
          <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              required
            />
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter Your Mobile Number"
              required
            />
            <label>Write Your messages here</label>
            <textarea
              name="message"
              rows="6"
              placeholder="Enter Your Message"
              required
            ></textarea>
            <button type="submit" className="btn dark-btn">
              Submit Now <img src={white_arrow} alt="" />
            </button>
          </form>
          <span>{result}</span>
        </div>
      </div>
    </>
  );
}

export default Contact;
