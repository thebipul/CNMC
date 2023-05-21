import "./contact.css";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import { Title } from "../../elements/Title";

function Contact() {
  return (
    <>
      <div className="contact">
        <Title text="Contact" />
        <div className="contact-details">
          <h1>
            If you have any questions, feel free to contact our members here:
          </h1>
          <ul>
            <li className="contact-list">
              <h2 className="position">President</h2>
              <p>Ambika Ghawali</p>
              <p>(647) 409-0669</p>
            </li>
            <li className="contact-list">
              <h2 className="position">Vice President</h2>
              <p>Durga Adhikari</p>
              <p>(416) 625-6901</p>
            </li>
            <li className="contact-list">
              <h2 className="position">Secretary</h2>
              <p>Indira Bhandari</p>
              <p>(647) 762-6675</p>
            </li>
            <li className="contact-list">
              <h2 className="position">Chairperson</h2>
              <p>Gita Dawadi</p>
              <p>(647) 761-6227</p>
            </li>
            <li className="contact-list">
              <h2 className="position">Treasurer</h2>
              <p>Shanta Rayamajhi Thapa</p>
              <p>(647) 473-0145</p>
            </li>
          </ul>
        </div>
        {/* <div className="contact-form">
          <form>
            <h2>Please fill in the details below:</h2>
            <div className="field">
              <div className="text">Your First Name</div>
              <input type="text" required />
            </div>
            <div className="field">
              <div className="text">Your Last Name</div>
              <input type="text" required />
            </div>
            <div className="field">
              <div className="text">Your Email Address</div>
              <input type="email" required />
            </div>
            <div className="field">
              <div className="text">Your Query</div>
              <textarea required />
            </div>
            <div className="submit">
              <input className="submit-btn" type="submit" value="Send" />
            </div>
          </form>
        </div> */}
        <h2>Don't forget to follow our facebook page!</h2>
        <div className="social-medias">
          <div className="social-medias-icons">
            <a href="/">
              <FaFacebookSquare className="facebook" />
            </a>
            {/* <a href="/">
              <FaTwitterSquare className="twitter" />
            </a>
            <a href="/">
              <FaInstagramSquare className="instagram" />
            </a> */}
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default Contact;
