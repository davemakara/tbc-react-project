import Navigation from "./Navigation";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <div className="terms-and-policy">
          <p>
            <a href="#">წესები და პირობები</a>
          </p>
          <p>
            <a href="#">კონფიდენციალურობის პოლიტიკა</a>
          </p>
        </div>
        {/* <div className="newsletter">
          <p>გამოიწერეთ სიახლეები</p>
          <input type="email" placeholder="Email address" />
          <button>Submit</button>
        </div> */}
        <Navigation />
      </div>
    </footer>
  );
};

export default Footer;
