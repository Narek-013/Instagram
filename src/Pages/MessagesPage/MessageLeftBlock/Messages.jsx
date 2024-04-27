import { useSelector } from "react-redux";
import { selectUsersData } from "../../../store/slices/usersData/userDataSlice";
import "./messages.css";
import { NavLink } from "react-router-dom";

const Messages = () => {
  const { allUsersData, activeUser } = useSelector(selectUsersData);
  const users = allUsersData.filter((el) => el.id !== activeUser.id);

  return (
    <div className="messages">
      <div className="allItems">
        {users.map((el) => {
          return (
            <NavLink key={el.id} className="oneItem" to={`/direct/${el.id}`}>
              <img src={el.profileImage} alt="#" className="messageProfilImg" />
              <p className="messageProfilP">{el.userName}</p>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default Messages;
