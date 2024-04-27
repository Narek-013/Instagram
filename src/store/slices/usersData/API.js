import { createAsyncThunk } from "@reduxjs/toolkit";
import { UseRequest } from "../../../hook/UseRequest";
import { ACTIVE_USER, ALL_USERS_URL, SEARCH_ICON } from "../../../projectInfo";
const { get, post, patch, put, del } = UseRequest();

export const fetchUsersData = createAsyncThunk("usersData/fetchUsersData", async () => {
  const result = await get(ALL_USERS_URL);
  return result;
});
export const fetchRegisterNewUser = createAsyncThunk("usersData/fetchRegisterNewUser", async (user) => {
  const result = await post(ALL_USERS_URL, user);
  return result;
});
export const fetchLoginUser = createAsyncThunk("activeUser/fetchLoginUser", async (user) => {
  const posts = await post(ACTIVE_USER, user);
  return posts;
});
export const fetchActiveItem = createAsyncThunk("activeUser/fetchActiveItem", async () => {
  const getActiveUser = await get(ACTIVE_USER);
  return getActiveUser;
});
export const fetchChangeProfilImg = createAsyncThunk("activeUser/fetchChangeProfilImg", async ({ activeUser, img }) => {
  const changeProfilImage = await patch(ACTIVE_USER + "/" + activeUser?.id, { profileImage: img });
  const changeAllUsersImage = await patch(ALL_USERS_URL + "/" + activeUser.id, { profileImage: img });
  return { changeProfilImage, changeAllUsersImage };
});
export const fetchChaneBioAndGender = createAsyncThunk("activeUser/fetchChaneBioAndGender", async ({ activeUser, info }) => {
  const newInfoActive = await put(ACTIVE_USER + "/" + activeUser.id, { ...activeUser, bio: info.bioInput, gender: info.gender });
  const newInfoAllUsersActive = await put(ALL_USERS_URL + "/" + activeUser.id, { ...activeUser, bio: info.bioInput, gender: info.gender });
  return { newInfoActive, newInfoAllUsersActive };
});
export const fetchDeleteActiveUser = createAsyncThunk("activeUser/fetchDeleteActiveUser", async (activeUser) => {
  const delActive = await del(ACTIVE_USER + "/" + activeUser.id);
  return delActive;
});

export const fetchGetOtherUser = createAsyncThunk("usersData/fetchGetOtherUser", async (id) => {
  const getOtherUser = await get(ALL_USERS_URL + "/" + id);
  return getOtherUser;
});

export const fetchFollowUser = createAsyncThunk("usersData/fetchFollowUser", async ({ otherUser, activeUser }) => {
  const result = await patch(ALL_USERS_URL + "/" + otherUser.id, { followers: [...otherUser.followers, activeUser.id] });
  const allUsers = await patch(ALL_USERS_URL + "/" + activeUser.id, { following: [...activeUser.following, otherUser.id] });
  const activeUserInfo = await patch(ACTIVE_USER + "/" + activeUser.id, { following: [...activeUser.following, otherUser.id] });

  return { allUsers, result, activeUserInfo };
});

export const fetchUnFollow = createAsyncThunk("usersData/fetchUnFollow", async ({ otherUser, activeUser }) => {
  const filterOtherUsers = otherUser.followers.filter((el) => el !== activeUser.id);
  const filterActiveFollowing = activeUser.following.filter((el) => el !== otherUser.id);
  const result = await patch(ALL_USERS_URL + "/" + otherUser.id, { followers: filterOtherUsers });
  const allUsers = await patch(ALL_USERS_URL + "/" + activeUser.id, { following: filterActiveFollowing });
  const activeUserInfo = await patch(ACTIVE_USER + "/" + activeUser.id, { following: filterActiveFollowing });

  return { result, allUsers, activeUserInfo };
});

export const fetchCreatePostsImage = createAsyncThunk("activeUser/fetchCreatePostsImage", async ({ activeUser, postsUsers }) => {
  const changePosts = await put(ACTIVE_USER + "/" + activeUser.id, { ...activeUser, posts: [...activeUser.posts, postsUsers] });
  const changeAllUsersPosts = await put(ALL_USERS_URL + "/" + activeUser.id, { ...activeUser, posts: [...activeUser.posts, postsUsers] });
  return { changePosts, changeAllUsersPosts };
});

export const fetchSendNewMessage = createAsyncThunk(
  "activeUser/fetchSendNewMessage",
  async ({ otherUser, activeUser, otherArray, activeUserArray }) => {
    const otherResult = await patch(ALL_USERS_URL + `/${otherUser.id}`, {
      message: otherArray,
    });
    const activeResult = await patch(ACTIVE_USER + `/${activeUser.id}`, {
      message: activeUserArray,
    });
    const allUsersResult = await patch(ALL_USERS_URL + `/${activeUser.id}`, {
      message: activeUserArray,
    });
    return { otherResult, activeResult };
  }
);

export const fetchSendStartMessage = createAsyncThunk(
  "activeUser/fetchSendStartMessage",
  async ({ otherUser, activeUser, newMessageActiveUser, newMessageOther }) => {
    const otherResult = await patch(ALL_USERS_URL + `/${otherUser.id}`, {
      message: [...otherUser.message, newMessageOther],
    });
    const activeResult = await patch(ACTIVE_USER + `/${activeUser.id}`, {
      message: [...activeUser.message, newMessageActiveUser],
    });
    const allUsersResult = await patch(ALL_USERS_URL + `/${activeUser.id}`, {
      message: [...activeUser.message, newMessageActiveUser],
    });
    return { otherResult, activeResult };
  }
);
