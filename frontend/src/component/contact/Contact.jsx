import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiTimeLine } from "react-icons/ri";
import { FaMapMarkerAlt } from "react-icons/fa";
import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { FaRegStar } from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_n1x7r3i",
      "template_iaskjea",
      form.current,
      "h22HNrB2XxohuOVp2"
    );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>
        <FaRegStar />
        ...Reserve Table...
        <FaRegStar />
      </h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>mink.udm@gmail.com</h5>
            <a href="mailto:khaitoon@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <RiTimeLine className="contact__option-icon" />
            <h4>Opening Hour</h4>
            <h5>02.00 p.m. to 07.00 p.m.</h5>
            <a href="#">open daily</a>
          </article>
          <article className="contact__option">
            <FaMapMarkerAlt className="contact__option-icon" />
            <h4>Shop Location</h4>
            <h5>Mueng Nakhonpanom</h5>
            <a href="https://api.whatsapp.com/send?phone+23355733888">
              See Map
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Reserve Table
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
