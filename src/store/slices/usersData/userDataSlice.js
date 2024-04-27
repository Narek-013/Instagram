import { createSlice } from "@reduxjs/toolkit";
import {
  fetchActiveItem,
  fetchChaneBioAndGender,
  fetchChangeProfilImg,
  fetchCreatePostsImage,
  fetchDeleteActiveUser,
  fetchDeleteProfilImg,
  fetchFollowUser,
  fetchGetOtherUser,
  fetchLoginUser,
  fetchRegisterNewUser,
  fetchSendNewMessage,
  fetchSendStartMessage,
  fetchUnFollow,
  fetchUsersData,
} from "./API";

const usersDataSlice = createSlice({
  name: "usersData",
  initialState: {
    allUsersData: [],
    activeUser: {},
    searchUser: {
      allItemsSearch: [],
      searchActive: false,
    },
    otherUser: {},
    storyElm: {},
    postsUsers: "",
  },
  reducers: {
    searchUserItem(state, { payload }) {
      return {
        ...state,
        searchUser: {
          ...state,
          allItemsSearch: payload,
          searchActive: true,
        },
      };
    },
    changeSearchLogos(state, { payload }) {
      return {
        ...state,
        searchUser: {
          ...state,
          searchActive: true,
        },
      };
    },
    addStoryBlok(state, { payload }) {
      return {
        ...state,
        storyElm: payload,
      };
    },
    changeInstaSearch(state, { payload }) {
      return {
        ...state,
        searchUser: {
          ...state,
          searchActive: false,
        },
      };
    },
    changePostImg(state, { payload }) {
      state.postsUsers = payload;
    },
    removePostsAndBack(state, { payload }) {
      state.postsUsers = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsersData.fulfilled, (state, { payload }) => {
        return {
          ...state,
          allUsersData: payload,
        };
      })
      .addCase(fetchRegisterNewUser.fulfilled, (state, { payload }) => {
        state.allUsersData.push(payload);
      })
      .addCase(fetchActiveItem.fulfilled, (state, { payload }) => {
        state.activeUser = payload[0];
      })
      .addCase(fetchLoginUser.fulfilled, (state, { payload }) => {
        state.activeUser = payload;
      })
      .addCase(fetchChangeProfilImg.fulfilled, (state, { payload }) => {
        const index = state.allUsersData.findIndex((user) => user.id === payload.id);
        state.activeUser = payload.changeProfilImage;
        state.allUsersData[index] = payload.changeAllUsersImage;
      })
      .addCase(fetchChaneBioAndGender.fulfilled, (state, { payload }) => {
        const index = state.allUsersData.findIndex((user) => user.id === payload.id);
        state.allUsersData[index] = payload.newInfoAllUsersActive;
        state.activeUser = payload.newInfoActive;
      })
      .addCase(fetchDeleteActiveUser.fulfilled, (state, { payload }) => {
        state.activeUser = {};
      })
      .addCase(fetchFollowUser.fulfilled, (state, { payload }) => {
        const index = state.allUsersData.findIndex((user) => user.id === payload.result.id);
        const activeIndex = state.allUsersData.findIndex((user) => user.id === payload.activeUserInfo.id);
        state.allUsersData[index] = payload.result;
        state.allUsersData[activeIndex] = payload.activeUserInfo;
        state.activeUser = payload.activeUserInfo;
        state.otherUser = payload.result;
      })
      .addCase(fetchGetOtherUser.fulfilled, (state, { payload }) => {
        state.otherUser = payload;
      })
      .addCase(fetchUnFollow.fulfilled, (state, { payload }) => {
        const index = state.allUsersData.findIndex((user) => user.id === payload.result.id);
        const activeIndex = state.allUsersData.findIndex((user) => user.id === payload.activeUserInfo.id);
        state.allUsersData[index] = payload.result;
        state.allUsersData[activeIndex] = payload.activeUserInfo;
        state.activeUser = payload.activeUserInfo;
        state.otherUser = payload.result;
      })
      .addCase(fetchCreatePostsImage.fulfilled, (state, { payload }) => {
        const index = state.allUsersData.findIndex((user) => user.id === payload.id);
        state.activeUser = payload.changePosts;
        state.allUsersData[index] = payload.changeAllUsersPosts;
        state.postsUsers = "";
      })
      .addCase(fetchSendNewMessage.fulfilled, (state, { payload }) => {
        const activeIndex = state.allUsersData.findIndex((user) => user.id === payload.activeResult.id);
        const otherIndex = state.allUsersData.findIndex((user) => user.id === payload.otherResult.id);
        state.activeUser = payload.activeResult;
        state.otherUser = payload.otherResult;
        state.allUsersData[activeIndex] = payload.activeResult;
        state.allUsersData[otherIndex] = payload.otherResult;
      })
      .addCase(fetchSendStartMessage.fulfilled, (state, { payload }) => {
        const activeIndex = state.allUsersData.findIndex((user) => user.id === payload.activeResult.id);
        const otherIndex = state.allUsersData.findIndex((user) => user.id === payload.otherResult.id);
        state.activeUser = payload.activeResult;
        state.otherUser = payload.otherResult;
        state.allUsersData[activeIndex] = payload.activeResult;
        state.allUsersData[otherIndex] = payload.otherResult;
      });
  },
});

export const selectUsersData = (state) => state.usersData;
export const { searchUserItem, changeSearchLogos, changeInstaSearch, addStoryBlok, changePostImg, removePostsAndBack } = usersDataSlice.actions;
export const usersDataReducer = usersDataSlice.reducer;
