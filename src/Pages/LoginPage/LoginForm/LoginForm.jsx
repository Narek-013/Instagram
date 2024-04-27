import { useDispatch, useSelector } from "react-redux";
import { NavigationLogoIcon } from "../../../components/NavigationMenu/NavigationIcons";
import LoginForgot from "../LoginForgot/LoginForgot";
import "./loginForm.css";
import { selectUsersData } from "../../../store/slices/usersData/userDataSlice";
import { fetchLoginUser } from "../../../store/slices/usersData/API";

const LoginForm = () => {
  
  const { allUsersData } = useSelector(selectUsersData);
  const dispatch = useDispatch();

  const signInSubmit = (ev) => {
    ev.preventDefault();

    const {
      login: { value: login },
      password: { value: password },
    } = ev.target;

    const activeUser = allUsersData.find((el) => (el.email === login || el.userName === login) && el.password === password);

    if (activeUser) {
      dispatch(fetchLoginUser(activeUser));
    } else {
      console.log("chka tenc user");
    }

    ev.target.reset();
  };

  return (
    <div className="loginForm">
      <div className="instagramIconBlock">
        <NavigationLogoIcon />
      </div>
      <div className="formBlockLogin">
        <form className="formLogin" onSubmit={signInSubmit}>   
          <input className="textInput" type="text" name="login" placeholder="username or email" />
          <input className="loginPasswordInput" type="password" placeholder="password" name="password" />
          <button className="LoginSubmit">Log in</button>
        </form>
      </div>
      <LoginForgot />
    </div>
  );
};

export default LoginForm;
