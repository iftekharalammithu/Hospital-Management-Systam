import React from "react";
import { FaLocationArrow, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  const hours = [
    {
      id: 1,
      day: "Monday",
      time: "9:00 AM - 11:00 PM",
    },
    {
      id: 2,
      day: "Tuesday",
      time: "12:00 PM - 12:00 AM",
    },
    {
      id: 3,
      day: "Wednesday",
      time: "10:00 AM - 10:00 PM",
    },
    {
      id: 4,
      day: "Thursday",
      time: "9:00 AM - 9:00 PM",
    },
    {
      id: 5,
      day: "Monday",
      time: "3:00 PM - 9:00 PM",
    },
    {
      id: 6,
      day: "Saturday",
      time: "9:00 AM - 3:00 PM",
    },
  ];

  return (
    <>
      <footer className="container">
        <br />
        <div className="content">
          <div>
            <img src="public\logo.png" alt="logo" className="logo-img" />
          </div>
          <div>
            <h4>Quick Link</h4>
            <ul>
              <Link to={"/"}>Home</Link>
              <Link to={"/appointment"}>Appointment</Link>
              <Link to={"/about"}>About US</Link>
            </ul>
          </div>
          <div>
            <h4>Hours</h4>
            <ul>
              {hours.map((element) => (
                <li key={element.id}>
                  <span>{element.day}</span>
                  <span>{element.time}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <div>
              <FaPhone></FaPhone>
              <span>999-999-9999</span>
            </div>
            <div>
              <MdEmail></MdEmail>
              <span>healthcare@gmail.com</span>
            </div>
            <div>
              <FaLocationArrow></FaLocationArrow>
              <span>123 Main St, Anytown, USA</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
