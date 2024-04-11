"use client";
import { useState } from "react";

const ProfileForm = () => {
  let profile = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [profileObj, setProfileObj] = useState(profile);

  const handleInputChange = (event) => {
    const { name: inputName, value } = event.target;
    setProfileObj((prevState) => ({ ...prevState, [inputName]: value }));
  };

  const handleSubit = (e) => {
    e.preventDefault();
    setProfileObj(profile);
  };
  return (
    <form className="profile-details" onSubmit={handleSubit} autoComplete="off">
      <div className="form-heading">
        <h1>Profile Details</h1>
      </div>
      <div className="input-wrapper">
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={profileObj.firstName}
          onChange={handleInputChange}
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={profileObj.lastName}
          onChange={handleInputChange}
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="email">Email Address:</label>
        <input
          type="email"
          name="email"
          id="email"
          value={profileObj.email}
          onChange={handleInputChange}
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          value={profileObj.password}
          onChange={handleInputChange}
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          value={profileObj.confirmPassword}
          onChange={handleInputChange}
        />
      </div>
      <button className="profile-save-btn">Submit</button>
    </form>
  );
};
export default ProfileForm;
