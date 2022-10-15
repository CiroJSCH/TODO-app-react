import "../styles/footer.css";
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer>
      <div className="footer-name">
        <p>Desarrollado por Ciro Schapert</p>
      </div>
      <div className="footer-social">
        <a href="https://github.com/CiroJSCH" target="_blank"><AiFillLinkedin /></a>
        <a href="#" target="_blank"><AiFillGithub /></a>
      </div>
    </footer>
  );
};

export default Footer;
