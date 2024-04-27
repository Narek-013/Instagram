import LoginBottomBlock from "./LoginBottomBlock/LoginBottomBlock";
import LoginForm from "./LoginForm/LoginForm";
import './loginPage.css'


const LoginPage = () => {

    return (
      <div className="container">
        <div className="loginBlocks">
         <LoginForm/>
        <LoginBottomBlock/>
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
}

export default LoginPage;
