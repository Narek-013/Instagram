import RegisterForm from "./RegisterForm/RegisterForm";
import RegisterLogin from "./RegisterLogIn/RegisterLogin";

import "./registerPage.css";

const RegisterPage = () => {


  
  return (
    <div className="container">
      <div className="loginBlocks">
        <RegisterForm />
        <RegisterLogin />
      </div>
      <div className="getApp">
        <p>Get the app.</p>
        <div className="allApp">
          <img src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png" alt="" />
          <img src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
