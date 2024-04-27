import { useDispatch, useSelector } from "react-redux";
import RegInfo from "./RegInfo";
import { selectUsersData } from "../../../../store/slices/usersData/userDataSlice";
import { fetchRegisterNewUser } from "../../../../store/slices/usersData/API";
import "./formBlock.css";
import { useNavigate } from "react-router-dom";

const RegForm = () => {
  const dispatch = useDispatch();
  const { allUsersData } = useSelector(selectUsersData);
  const navigate = useNavigate();

  const handlerSubmit = (e) => {
    e.preventDefault();
    const {
      email: { value: email },
      firstName: { value: firstName },
      lastName: { value: lastName },
      userName: { value: userName },
      password: { value: password },
    } = e.target;

    let newUser = {
      id: new Date().getTime().toString(),
      firstName,
      lastName,
      login: "",
      password,
      userName,
      email,
      age: null,
      bio: "",
      followers: [],
      follower: [],
      posts: [],
      profileImage: "",
      message: [],
    };

    if (allUsersData.find((el) => el.userName === userName || el.email === email)) {
      e.target.reset();
      return;
    }
    dispatch(fetchRegisterNewUser(newUser));
    navigate("/");
  };
  return (
    <div className="formBlock">
      <form onSubmit={handlerSubmit}>
        <input type="text" placeholder="Mobile Number or Email" name="email" />
        <input type="text" placeholder="FirstName" name="firstName" />
        <input type="text" placeholder="LastName " name="lastName" />
        <input type="text" placeholder="UserName" name="userName" />
        <input type="password" placeholder="password" name="password" />
        <RegInfo />
        <button className="LoginSubmit">Sign up</button>
      </form>
    </div>
  );
};

export default RegForm;
