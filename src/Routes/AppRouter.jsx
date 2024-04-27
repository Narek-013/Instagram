import { Route, Routes } from "react-router-dom";
import Layout from "../Pages/Layout/Layout";
import HomePage from "../Pages/HomePage/HomePage";
import UserPage from "../Pages/UserPage/UserPage";
import PostsProfil from "../Pages/UserPage/Profils/PostsProfil/PostsProfil";
import ReelsProfils from "../Pages/UserPage/Profils/ReelsProfils/ReelsProfils";
import AccountPages from "../Pages/AccountPages/AccountPages";
import LoginPage from "../Pages/LoginPage/LoginPage";
import LayoutUserPage from "../Pages/LayoutUserPage/LayoutUserPage";
import RegisterPage from "../Pages/RegisterPage/RegisterPage";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchActiveItem, fetchUsersData } from "../store/slices/usersData/API";
import { selectUsersData } from "../store/slices/usersData/userDataSlice";
import MessagesPage from "../Pages/MessagesPage/MessagesPage";
import Messages from "../Pages/MessagesPage/MessageLeftBlock/Messages";
import MessageRequests from "../Pages/MessagesPage/MessageLeftBlock/messageRequests";
import OneItemMessages from "../Pages/MessagesPage/MessageCent/OneItemMessages";
import OtherProfil from "../Pages/OtherProfil/OtherProfil";
import OtherUserPosts from "../Pages/OtherProfil/OtherUserPosts";
import OtherUserRells from "../Pages/OtherProfil/OtherUserRells";

const AppRouter = () => {
  const { allUsersData, activeUser } = useSelector(selectUsersData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsersData());
    dispatch(fetchActiveItem());
  }, []);


   

  return (
    <Routes>
      {activeUser?.id ? (
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/:id" element={<OtherProfil />}>
            <Route index element={<OtherUserPosts />} />
            <Route path="/:id/rells" element={<OtherUserRells/>} />
          </Route>
          <Route path="/userPage" element={<UserPage />}>
            <Route index element={<PostsProfil />} />
            <Route path="reels" element={<ReelsProfils />} />
          </Route>
          <Route path="/direct" element={<MessagesPage />}>
            <Route index element={<Messages />} />
          </Route>
          <Route path="/direct/:id" element={<OneItemMessages />} />
          <Route path="/direct/requests" element={<MessageRequests />} />
          <Route path="/settings" element={<AccountPages />} />
        </Route>
      ) : (
        <Route path="/" element={<LayoutUserPage />}>
          <Route index element={<LoginPage />} />
          <Route path="/registerPage" element={<RegisterPage />} />
        </Route>
      )}
    </Routes>
  );
};

export default AppRouter;
