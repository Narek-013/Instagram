import { FaFacebookSquare } from "react-icons/fa";
import "./loginForgot.css";
import { Link } from "react-router-dom";

const LoginForgot = () => {
  return (
    <div className="loginForgot">
      <div className="lineBlock">
        <div className="lineForgotLeft"></div>
        <p>Or</p>
        <div className="lineForgotRight"></div>
      </div>
      <div className="forgotCenter">
        <Link><FaFacebookSquare className="facebookLogo" /></Link>
        <Link className="goToFacebook"> Login in with Facebook</Link>
      </div>
      <Link className="forgotPassword">Forgot Password ?</Link>
    </div>
  );
};

export default LoginForgot;
