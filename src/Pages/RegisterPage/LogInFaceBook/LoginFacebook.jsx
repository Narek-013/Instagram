import { Link } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";


const LoginFacebook = () => {
    return (
      <div className="loginFacebook">
        <p>Sign up to see photos and videos from your friends.</p>
        <Link className="lines"><FaFacebookSquare className="face"/> Log in with Facebook</Link>
      </div>
    );
}

export default LoginFacebook;
