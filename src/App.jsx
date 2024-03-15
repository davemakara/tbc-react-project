import { Fragment } from "react";
import "./App.css";

import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  return (
    <Fragment>
      <Header />
      <Content />

      <Footer />
    </Fragment>
  );
}

export default App;
