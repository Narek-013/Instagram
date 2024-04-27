
const AccountGender = ({ activeUser }) => {
  return (
    <div className="GenderAccount">
      <p className="gender">Gender</p>
      <div className="genderSelectBlock">
        <select className="genderSelect" name="gender" id="gender">
          <option>{activeUser.gender}</option>
          <option value="Male">Male</option>
          <option value="Female">
            Female
          </option>
          <option value="Custom">
            Custom
          </option>
          <option value="Perfer">Prefer not to say</option>
        </select>
      </div>
      <p className="publicProfileP">
        This won’t be part of your public profile.
      </p>
    </div>
  );
};

export default AccountGender;
