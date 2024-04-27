import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ALL_USERS_URL } from "../../../projectInfo";
import MessageNav from "./MessageNav";
import "./messageOneItemBlock.css";
import MessageFooterInput from "./MessageFooterInput";
import AllMessages from "./AllMessages";
import { useDispatch, useSelector } from "react-redux";
import { selectUsersData } from "../../../store/slices/usersData/userDataSlice";
import { fetchGetOtherUser } from "../../../store/slices/usersData/API";

const MessageOneItemBlock = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const { activeUser, otherUser } = useSelector(selectUsersData);
  const dispatch = useDispatch();

  useEffect(() => {
    const get = async () => {
      const res = await fetch(`${ALL_USERS_URL}/${id}`);
      const result = await res.json();
      setUser(result);
    };
    get();
  }, [id]);

  useEffect(() => {
    dispatch(fetchGetOtherUser(id));
  }, [id]);

  return (
    <div className="oneItemMesage">
      <MessageNav user={user} />
      <AllMessages otherUser={otherUser} activeUser={activeUser} />
      <MessageFooterInput otherUser={otherUser} activeUser={activeUser} />
    </div>
  );
};

export default MessageOneItemBlock;
