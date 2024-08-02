import { BiLogoGmail } from "react-icons/bi";
import { PiMicrosoftOutlookLogo } from "react-icons/pi";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const ContactPage = () => {
  return (
    <div id="contact" className="page-container">
      <div className="contact-page">
        <h1>Contact</h1>
        <p>You can get in touch with me now, just send a message</p>
        <div className="contact-content">
          <Link to={"mailto:abeldelaguila7@gmail.com"}>
            <BiLogoGmail className="contact-icon" />
          </Link>
          <Link to={"mailto:abel.alvarez.dev@outlook.com"}>
            <PiMicrosoftOutlookLogo className="contact-icon" />
          </Link>
          <Link to={"https://www.linkedin.com/in/alvarez-abel/"} target="_blank">
            <FaLinkedin className="contact-icon" />
          </Link>
        </div>
        <p>abel.alvarez.dev@outlook.com</p>
      </div>
    </div>
  )
}

export default ContactPage
