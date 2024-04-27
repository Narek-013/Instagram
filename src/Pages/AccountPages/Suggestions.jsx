
const Suggestions = () => {
    return (
      <div className="suggetions">
        <p className="suggetionsP">Show account suggestions on profiles</p>
        <div className="suggetionsBlock">
          <ul className="sugUl">
            <li>Show account suggestions on profiles</li>
            <li>Choose whether people can see similar account suggestions on your profile, and whether your account can be suggested on other profiles.</li>
          </ul>
          <div className="suggetionsRadioblock   
          ">
            <input type="radio" className="suggetionsRadio"/>
          </div>
        </div>
      </div>
    );
}

export default Suggestions;
