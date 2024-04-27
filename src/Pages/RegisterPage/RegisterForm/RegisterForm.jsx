import { NavigationLogoIcon } from "../../../components/NavigationMenu/NavigationIcons";
import LoginFacebook from "../LogInFaceBook/LoginFacebook";
import RegForm from "./RegForm/RegForm";


const RegisterForm = () => {
    return (
      <div className="loginForm">
        <div className="instagramIconBlock">
          <NavigationLogoIcon />
        </div>
        <LoginFacebook />
        <div className="lineBlock linesBlock">
          <div className="lineForgotLeft"></div>
            <p>Or</p>
          <div className="lineForgotRight"></div>
        </div>
        <RegForm/>
      </div>
    );
}

export default RegisterForm;
