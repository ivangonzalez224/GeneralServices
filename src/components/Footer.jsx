import { BsLinkedin, BsFacebook, BsInstagram } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2025 Musuq Technologies</p>
      <ul className="footer-social">
        <li><a className="footer-link" href="" target="_blank" rel="noreferrer"><BsFacebook /></a></li>
        <li><a className="footer-link" href="" target="_blank" rel="noreferrer"><BsLinkedin /></a></li>
        <li><a className="footer-link" href="" target="_blank" rel="noreferrer"><BsInstagram /></a></li>
      </ul>
    </footer>
  );
};

export default Footer;
