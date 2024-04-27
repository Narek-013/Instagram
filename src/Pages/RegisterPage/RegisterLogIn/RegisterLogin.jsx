import { Link } from "react-router-dom";



const RegisterLogin = () => {
    return (
      <div className="loginBottomBlocks">
        <p className="dontHave">Have an account?</p>
        <Link to="/">Log in</Link>
      </div>
    );
}

export default RegisterLogin;
