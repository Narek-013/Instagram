import React from 'react'

const StoryLeftButton = ({ count, storyLeft }) => {
  return (
    <button
      onClick={storyLeft}
      style={{ display: count <= 1 ? "none" : "flex" }}
      aria-label="Go back"
      className="storyLeftBtn _afxv _al46 _aahm _akl_ _al47"
      tabIndex="-1"
    >
      <div className=" _9zs1"></div>
    </button>
  );
};

export default StoryLeftButton