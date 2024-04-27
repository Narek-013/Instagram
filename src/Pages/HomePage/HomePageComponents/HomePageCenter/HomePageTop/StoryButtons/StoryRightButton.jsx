import React from 'react'

const StoryRightButton = ({ count, storyRight, allUsersData, x}) => {
  return (
    <button
      style={{
        display: count >= (allUsersData.length - x) / 4 ? "none" : "flex",
      }}
      onClick={storyRight}
      aria-label="Next"
      className="storyRightBtn _afxw _al46 _aahm _akl_ _al47"
      tabIndex="-1"
    >
      <div className=" _9zs2"></div>
    </button>
  );
};

export default StoryRightButton