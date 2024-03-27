const ProfilePage = () => {
  return (
    <section className="profile-page-wrapper">
      <div className="profile-details">
        <ul>
          <li>Name: John</li>
          <li>Last Name: Doe</li>
          <li>Email: someone@gmail.com</li>
        </ul>
        <form
          className="passwords-form"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="passwords-wrapper">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
            />
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              placeholder="Confirm Password"
            />
          </div>
          <button className="password-save-btn">Submit</button>
        </form>
      </div>
    </section>
  );
};
export default ProfilePage;
