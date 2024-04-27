import { Link } from "react-router-dom";
import './loginBottom.css'

const LoginBottomBlock = () => {
    return (
      <div className="loginBottomBlocks">
        <p className="dontHave">Don't have an account ?</p>
        <Link to='/registerPage'>Sign Up</Link>
      </div>
    );
}

export default LoginBottomBlock;
