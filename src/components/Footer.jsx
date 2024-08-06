import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import "./Footer.css"
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container-fluid" style={{position:'absolute', paddingTop: "100px", width:'100%'}}>
        <div className="row">
          {/* About Section */}
          <div className="col-md-6 col-lg-5 col-12 footer-section">
            <h3><span>BOOK</span>LAND</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum ea quo ex ullam laboriosam magni totam, facere eos iure voluptate.</p>
            <div className="footer-icons">
              <a href="https://facebook.com" aria-label="Facebook">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="https://twitter.com" aria-label="Twitter">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://instagram.com" aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="col-md-6 col-lg-3 col-12 footer-section">
            <h5>Quick Links</h5>
            <ul>
              <li><a href="/">Services</a></li>
              <li><a href="/">Portfolio</a></li>
              <li><a href="/">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Information Section */}
          <div className="col-md-6 col-lg-4 col-12 footer-section">
            <h5>Contact Information</h5>
            <p><FontAwesomeIcon icon={faPhone} /> +91 3686348783</p>
            <p><FontAwesomeIcon icon={faEnvelope} /> Sibasis@gmail.com</p>
            <p><FontAwesomeIcon icon={faLocationDot} /> bbsr, India</p>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
       
      </div>
    </footer>
  );
}
