import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footRooter">
        <Link>Meta</Link>
        <Link>About</Link>
        <Link>Blog</Link>
        <Link>Jobs</Link>
        <Link>Help</Link>
        <Link>Api</Link>
        <Link>Privacy</Link>
        <Link>Terms</Link>
        <Link>Locations</Link>
        <Link>Instagram Lite</Link>
        <Link>Threads</Link>
        <Link>Contact Uploading & Non-Users</Link>
        <Link>Meta Verified</Link>
        <select id="cars" name="cars" className="selectLenguage">
          <option value="volvo">English</option>
          <option value="saab">Saab 95</option>
          <option value="mercedes">Mercedes SLK</option>
          <option value="audi">Audi TT</option>
        </select>
        <p>© 2024 Instagram from Meta</p>
      </div>
    </div>
  );
};

export default Footer;
