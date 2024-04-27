import React, { useRef, useState } from "react";
import "./HomePageTopPar.css";
import { useDispatch } from "react-redux";
import { addStoryBlok } from "../../../../../store/slices/usersData/userDataSlice";
import StoryLeftButton from "./StoryButtons/StoryLeftButton";
import StoryRightButton from "./StoryButtons/StoryRightButton";
import StoryModalWindow from "./StoryModalWindow/StoryModalWindow";
let count = 1;

function HomePageTopPar({ allUsersData }) {
  const [position, setPosition] = useState(0);
  const storyDiv = useRef(0);
  const StoryWindow = useRef(null);
  const dispatch = useDispatch()

  let x = allUsersData.length % 4;
  const storyLeft = () => {
    count--;
    if (count + 1  === (allUsersData.length - x) / 4) {
      setPosition(position + x * 78);
    } else {
      setPosition(position + 312);
    }
  };
  const storyRight = () => {
    count++;
    if (count >= (allUsersData.length - x) / 4) {
      setPosition(position - x * 78);
    } else {
      setPosition(position - 312);
    }
  };
  const StoryModal = (el) => {
    StoryWindow.current.classList.remove("StoryModalWindowNone");
    dispatch(addStoryBlok(el));
  };

  const timeOut = setTimeout(() =>{
      StoryWindow?.current?.classList?.add("StoryModalWindowNone");
  },  4000)

  const StoryModalClose = (e) => {
    if (e.target === e.currentTarget || e.target.localName === "i") {
      StoryWindow.current.classList.add("StoryModalWindowNone");
    }
    clearTimeout(timeOut)
  };
  return (
    <div className="story">
      <StoryLeftButton count={count} storyLeft={storyLeft} />
      <StoryRightButton
        count={count}
        storyRight={storyRight}
        allUsersData={allUsersData}
        x={x}
      />
      <div
        ref={storyDiv}
        style={{ transform: `translateX(${position}px)` }}
        className="HomePageTopPar"
      >
        {allUsersData.map((el) => {
          return (
            <div className="HomePageStoryDiv" key={el.id} onClick={() => StoryModal(el)}>
              <div className="HomePageStoryImgDiv">
                <img className="HomePageStorycircle" src={el.profileImage} />
              </div>
              {el?.userName?.length >= 10 ? (
                <span>{el?.userName?.slice(0, 9)}...</span>
              ) : (
                <span>{el?.userName}</span>
              )}
            </div>
          );
        })}
      </div>
      <div
        onClick={StoryModalClose}
        ref={StoryWindow}
        className="StoryBackDiv StoryModalWindowNone"
      >
        <div className="StoryModalWindow">
          <StoryModalWindow />
        </div>
      </div>
    </div>
  );
}

export default HomePageTopPar;
